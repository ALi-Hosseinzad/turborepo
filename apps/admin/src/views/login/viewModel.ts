'use client'

import {
  axiosGet,
  axiosPost,
  Cookies,
  ENUM_URL,
  handleCookie,
  LOGIN_URL,
  ME_URL,
  PHONE_REGEX,
  useAppContextValue,
  useEffect,
  useMutation,
  useQuery,
  useRouter,
  useTranslations,
  yup,
} from './imports'

export const useLoginViewModel = (): any => {
  const router = useRouter()
  const t = useTranslations()
  const { handleEnums, handleUser } = useAppContextValue()
  const loginSchema = yup.object().shape({
    phone: yup
      .string()
      .matches(PHONE_REGEX, t('phoneNumberErrorMin'))
      .required(t('emptyError')),
    password: yup.string().required(t('emptyError')),
  })

  const {
    mutate: handleLogin,
    isSuccess: isSuccessLogin,
    isPending,
    data: dataLogin,
  } = useMutation({
    mutationFn: (values: any) =>
      axiosPost({
        url: LOGIN_URL,
        body: values,
      }),
  })

  if (isSuccessLogin) {
    const accessToken = dataLogin.data.access_token
    Cookies.set('token', accessToken)
  }

  const { isSuccess: isSuccessMe, data: dataMe } = useQuery({
    queryKey: ['me'],
    queryFn: () => axiosGet({ url: ME_URL, isAdmin: false }),
    enabled: isSuccessLogin,
  })

  const {
    isSuccess: isSuccessEnum,
    data: dataEnum,
    isLoading: isLoadingEnum,
  } = useQuery({
    queryKey: ['enum'],
    queryFn: () => axiosGet({ url: ENUM_URL, isAdmin: false }),
    enabled: isSuccessLogin,
  })

  const initialValues = {
    phone: '',
    password: '',
  }

  const token = handleCookie({
    type: 'getCookie',
    key: 'token',
  })

  useEffect(() => {
    if (isSuccessEnum) {
      handleEnums(dataEnum)
      router.push('/')
    }
  }, [isSuccessEnum, token])

  useEffect(() => {
    handleUser(dataMe)
  }, [isSuccessMe])

  return {
    handleLogin,
    token,
    initialValues,
    isLoading: isLoadingEnum || isPending,
    isSuccess: isSuccessMe,
    loginSchema,
    isSuccessEnum,
  }
}
