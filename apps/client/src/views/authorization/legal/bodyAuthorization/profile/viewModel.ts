import { Pending, Rejected } from '@/constants/constants'
import type { ProfileFieldsType, ProfileViewModelType } from '../../../imports'
import {
  handleLoginedUser,
  JUST_PERSIAN_REGEX,
  LEGAL_PROFILE_URL,
  LEGAL_UPDATE_PROFILE_URL,
  ME_URL,
  NUMBER_REGEX,
  useAxiosMutation,
  useAxiosQuery,
  useDispatch,
  useEffect,
  useState,
  useTranslations,
  yup,
} from '../../../imports'

export const UseProfileViewModel = (): ProfileViewModelType => {
  const t = useTranslations()

  const validationSchema = yup.object({
    companyName: yup.string().required(t('requiredGender')),
    economicCode: yup
      .string()
      .matches(NUMBER_REGEX, t('mustNumber'))
      .min(12, t('economicCodeMin'))
      .max(12, t('economicCodeMin'))
      .required(t('requiredGender')),
    nationalCode: yup
      .string()
      .matches(NUMBER_REGEX, t('mustNumber'))
      .min(10, t('nationalCodeMin'))
      .max(11, t('nationalCodeMin'))
      .required(t('requiredGender')),
    taxCode: yup
      .string()
      .min(10, t('taxCodeMin'))
      .max(10, t('taxCodeMin'))
      .matches(NUMBER_REGEX, t('mustNumber'))
      .required(t('requiredGender')),
    phone: yup
      .string()
      .required(t('requiredGender'))
      .min(10, t('registrationNumberRegex'))
      .max(15, t('registrationNumberRegex')),
    registrationNumber: yup
      .string()
      .matches(NUMBER_REGEX, t('mustNumber'))
      .min(10, t('registrationNumberRegex'))
      .max(10, t('registrationNumberRegex'))
      .required(t('requiredGender')),
    postalCode: yup
      .string()
      .matches(NUMBER_REGEX, t('mustNumber'))
      .min(10, t('postalCodeMin'))
      .max(10, t('postalCodeMin'))
      .required(t('requiredGender')),
    address: yup
      .string()
      .matches(JUST_PERSIAN_REGEX, t('languageError'))
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
    data: dataProfile,
  } = useAxiosMutation(LEGAL_UPDATE_PROFILE_URL, 'post')

  const {
    data: dataProfileGet,
    isSuccess: isSuccessProfileGet,
    refetch: refetchProfileGet,
  } = useAxiosQuery({ url: LEGAL_PROFILE_URL, queryKey: ['LEGAL-PROFILE-URL'] })

  const isVerify = Boolean(dataProfileGet?.verify_profile === Pending)
  const isReject = Boolean(dataProfileGet?.verify_profile === Rejected)

  const initialValues: ProfileFieldsType = {
    companyName: dataProfileGet?.company_name || '',
    economicCode: dataProfileGet?.economic_code || '',
    nationalCode: dataProfileGet?.national_code || '',
    taxCode: dataProfileGet?.tax_code || '',
    registrationNumber: dataProfileGet?.registration_number || '',
    phone: dataProfileGet?.phone || '',
    postalCode: dataProfileGet?.postal_code || '',
    address: dataProfileGet?.address || '',
  }

  const handleSubmit = (values: ProfileFieldsType) => {
    const info = {
      company_name: values?.companyName,
      economic_code: values?.economicCode,
      national_code: values?.nationalCode,
      tax_code: values?.taxCode,
      registration_number: values?.registrationNumber,
      phone: values?.phone,
      postal_code: values?.postalCode,
      address: values?.address,
    }
    mutateAsync(info).then(() => {
      refetchProfileGet()
    })
  }

  useEffect(() => {
    if (dataProfileGet?.user?.verify_state?.verify_profile) {
      setGetRequestMe(true)
      if (isSuccess) {
        dispatch(handleLoginedUser(data))
      }
    }
  }, [isSuccessProfileGet, isSuccess])

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
    dataProfile,
    dataProfileGet,
    isSuccessProfileGet,
    isVerify,
    isReject,
  }
}
