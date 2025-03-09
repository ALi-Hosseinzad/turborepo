import type { NationalCardValuesType } from '@/types/authorization/authorization'
import type { FormNationalCardViewModelType } from '../../imports'
import {
  handleLoginedUser,
  ME_URL,
  moment,
  NATIONAL_CARD_INFO_URL,
  NUMBER_REGEX,
  useAxiosMutation,
  useAxiosQuery,
  useDispatch,
  useEffect,
  useState,
  useTranslations,
  yup,
} from '../../imports'

export const UseNationalCardViewModel = (): FormNationalCardViewModelType => {
  const t = useTranslations()
  const itemList = [
    { value: 'female', label: 'زن' },
    { value: 'male', label: 'مرد' },
  ]
  const base64PrefixRegex = /^data:image/

  const validationSchema = yup.object({
    nationalNumber: yup
      .string()
      .matches(NUMBER_REGEX, t('mustNumber'))
      .matches(/^\d{10}$/, t('errNationalNumber'))
      .required(t('requiredNationalNumber')),
    birthDate: yup.string().required(t('requiredBirthDate')),
    gender: yup.object().required(t('requiredGender')),
    nationalCardImg: yup
      .string()
      .matches(base64PrefixRegex, t('invalidNationalCardImg'))
      .required(t('requiredGender')),
  })

  const [sendRequestMe, setGetRequestMe] = useState<any>(false)

  const dispatch = useDispatch()
  const { data, isSuccess } = useAxiosQuery({
    url: ME_URL,
    queryKey: ['me'],
    enabled: sendRequestMe,
  })

  const {
    mutateAsync,
    isPending,
    isSuccess: isSuccessPost,
    data: dataNationalCardPost,
  } = useAxiosMutation(NATIONAL_CARD_INFO_URL, 'post')

  const {
    data: dataNationalCardGet,
    isSuccess: isSuccessNationalCard,
    refetch: refetchNationalCard,
  } = useAxiosQuery({
    url: NATIONAL_CARD_INFO_URL,
    queryKey: ['NATIONAL-CARD-INFO'],
  })

  const isVerify = Boolean(
    dataNationalCardGet?.is_verify_label === t('waiting'),
  )
  const momentBirthDate = moment(dataNationalCardGet?.birthday)
    .locale('fa')
    .format('YYYY/MM/DD')
  const initialValues: NationalCardValuesType = {
    nationalNumber: dataNationalCardGet?.national_id || '',
    gender: dataNationalCardGet?.gender
      ? {
          value: dataNationalCardGet?.gender,
          label: dataNationalCardGet?.gender_label,
        }
      : '',
    birthDate: momentBirthDate || '',
    nationalCardImg: dataNationalCardGet?.image || '',
  }

  const handleSubmit = (values: NationalCardValuesType) => {
    const ConvertDateToJalali = moment(values.birthDate as any)
      .locale('fa')
      .format('YYYY/MM/DD')
    const dashReplaceSlas = ConvertDateToJalali.replaceAll('/', '-')

    const nationalCardInfo = {
      national_id: values.nationalNumber,
      image: values.nationalCardImg,
      birthday: dashReplaceSlas,
      gender: values.gender?.value,
    }
    mutateAsync(nationalCardInfo).then(() => {
      refetchNationalCard()
    })
  }

  useEffect(() => {
    if (dataNationalCardPost?.data?.is_verify) {
      setGetRequestMe(true)
      if (isSuccess) {
        dispatch(handleLoginedUser(data))
      }
    }
  }, [isSuccessNationalCard, isSuccess, isSuccessPost])

  const isReject = dataNationalCardGet?.is_verify_label === 'رد شده'

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    itemList,
    isPending,
    dataNationalCardPost,
    dataNationalCardGet,
    isSuccessNationalCard,
    isVerify,
    momentBirthDate,
    isReject,
  }
}
