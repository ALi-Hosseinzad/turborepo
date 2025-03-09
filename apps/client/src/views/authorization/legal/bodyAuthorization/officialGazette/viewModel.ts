import type { ProfileViewModelType } from '../../../imports'
import {
  handleLoginedUser,
  LEGAL_GAZETTE_URL,
  ME_URL,
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
    file: yup.string().required(t('requiredGender')),
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
  } = useAxiosMutation(LEGAL_GAZETTE_URL, 'post')

  const {
    data: dataProfileGet,
    isSuccess: isSuccessProfileGet,
    refetch: refetchProfileGet,
  } = useAxiosQuery({ url: LEGAL_GAZETTE_URL, queryKey: ['LEGAL-PROFILE-URL'] })

  const initialValues: any = {
    file: dataProfileGet?.image || '',
  }

  const handleSubmit = (values: any) => {
    const info = {
      file: values?.file,
    }

    mutateAsync(info).then(() => {
      refetchProfileGet()
      setGetRequestMe(true)
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

  const isVerify = Boolean(dataProfileGet?.status === 'pending')
  const isReject = Boolean(dataProfileGet?.status === 'rejected')

  const guidelinesTextKeys = {
    title: 'gideAttach',
    items: ['nationalCardText1', 'nationalCardText2'],
  }

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
    guidelinesTextKeys,
  }
}
