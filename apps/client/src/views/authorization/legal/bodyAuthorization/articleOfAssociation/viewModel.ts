import type {
  GuidelinesTextKeys,
  InitialValues,
  UseArticleOfAssociationViewModelReturn,
} from '../../../imports'
import {
  handleLoginedUser,
  LEGAL_STATUTE_URL,
  ME_URL,
  useAxiosMutation,
  useAxiosQuery,
  useDispatch,
  useEffect,
  useState,
  useTranslations,
  yup,
} from '../../../imports'

export const UseArticleOfAssociationViewModel =
  (): UseArticleOfAssociationViewModelReturn => {
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
      isSuccess: isSuccessPost,
      data: dataArticleOfAssociationPost,
    } = useAxiosMutation(LEGAL_STATUTE_URL, 'post')

    const {
      data: dataArticleOfAssociationGet,
      isSuccess: isSuccessArticleOfAssociationGet,
    } = useAxiosQuery({
      url: LEGAL_STATUTE_URL,
      queryKey: ['LEGAL-STATUTE-URL'],
      enabled: true,
    })

    const initialValues: InitialValues = {
      file: dataArticleOfAssociationGet?.image || '',
    }

    const handleSubmit = (values: InitialValues) => {
      const info = {
        file: values.file,
      }
      mutateAsync(info)
    }

    useEffect(() => {
      if (dataArticleOfAssociationGet?.user?.verify_state?.verify_profile) {
        setGetRequestMe(true)
        if (isSuccess) {
          dispatch(handleLoginedUser(data))
        }
      }
    }, [isSuccessArticleOfAssociationGet, isSuccess])

    const isVerify = dataArticleOfAssociationGet?.status === 'pending'
    const isVerifyPost =
      dataArticleOfAssociationPost?.data?.status === 'pending'
    const isReject = dataArticleOfAssociationGet?.status === 'rejected'

    const guidelinesTextKeys: GuidelinesTextKeys = {
      title: 'gideAttach',
      items: ['nationalCardText1', 'nationalCardText2'],
    }

    return {
      initialValues,
      validationSchema,
      handleSubmit,
      isPending,
      dataArticleOfAssociationPost,
      dataArticleOfAssociationGet,
      isSuccessArticleOfAssociationGet,
      isVerify,
      isVerifyPost,
      isReject,
      guidelinesTextKeys,
      isSuccessPost,
      isSuccess,
    }
  }
