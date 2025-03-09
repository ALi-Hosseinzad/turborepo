import type {
  FormMediaAuthorizationViewModelType,
  MediaAuthorizationValues,
} from '../../imports'
import {
  handleLoginedUser,
  ME_URL,
  MEDIA_AUTHORIZATION_URL,
  useAxiosMutation,
  useAxiosQuery,
  useDispatch,
  useEffect,
  useState,
  useTranslations,
  yup,
} from '../../imports'

export const UseMediaAuthorizationViewModel =
  (): FormMediaAuthorizationViewModelType => {
    const [sendRequestMe, setGetRequestMe] = useState(false)

    const dispatch = useDispatch()
    const { data, isSuccess } = useAxiosQuery({
      url: ME_URL,
      queryKey: ['me'],
      enabled: sendRequestMe,
    })

    const {
      data: dataMediaGet,
      isSuccess: isSuccessMedia,
      refetch: refetchMedia,
    } = useAxiosQuery({ url: MEDIA_AUTHORIZATION_URL, queryKey: ['MediaINFO'] })

    useEffect(() => {
      if (dataMediaGet?.status === 'accepted') {
        setGetRequestMe(true)
        if (isSuccess) {
          dispatch(handleLoginedUser(data))
        }
      }
    }, [isSuccessMedia, isSuccess])
    const base64PrefixRegex = /^data:image/

    const initialValues: MediaAuthorizationValues = {
      nationalCardImg: dataMediaGet?.file || '',
    }
    const t = useTranslations()
    const validationSchema = yup.object({
      nationalCardImg: yup
        .string()
        .required(t('requiredGender'))
        .matches(base64PrefixRegex, t('invalidNationalCardImg')),
    })

    const {
      mutateAsync,
      isPending,
      data: dataMediaPost,
    } = useAxiosMutation(MEDIA_AUTHORIZATION_URL, 'post')

    const handleSubmit = (values: any) => {
      const nationalCardInfo = {
        media_type: 'image',
        media: values?.nationalCardImg,
      }

      mutateAsync(nationalCardInfo).then(() => {
        refetchMedia()
      })
    }
    const isVerify: boolean = dataMediaGet?.status === 'pending'
    const isReject: boolean = dataMediaGet?.status === 'rejected'
    return {
      initialValues,
      validationSchema,
      handleSubmit,
      isPending,
      dataMediaPost,
      dataMediaGet,
      isSuccessMedia,
      isVerify,
      isReject,
    }
  }
