import type { UseSignatoryOwnerViewModelReturn } from '@/views/authorization/imports'
import {
  handleLoginedUser,
  ME_URL,
  SIGNATORY_OWNER_URL,
  ToastIconError,
  ToastIconSuccess,
  ToastIconwarning,
  useAxiosMutation,
  useAxiosQuery,
  useDispatch,
  useEffect,
  useState,
  useTranslations,
  yup,
} from '@/views/authorization/imports'

export const useSignatoryOwnerViewModel =
  (): UseSignatoryOwnerViewModelReturn => {
    const t = useTranslations()

    const [sendRequestMe, setSendRequestMe] = useState<boolean>(false)
    const dispatch = useDispatch()

    const { data: userData, isSuccess: isUserDataSuccess } = useAxiosQuery({
      url: ME_URL,
      queryKey: ['me'],
      enabled: sendRequestMe,
    })

    const {
      // mutateAsync: postSignatoryOwner,
      isPending: isPostPending,
      isSuccess: isPostSuccess,
      data: postSignatoryData,
    } = useAxiosMutation(SIGNATORY_OWNER_URL, 'post')

    const {
      data: signatoryData,
      isSuccess: isSignatoryDataSuccess,
      refetch: refetchSignatoryData,
    } = useAxiosQuery({
      url: SIGNATORY_OWNER_URL,
      queryKey: ['SIGNATORY-OWNER-URL'],
      enabled: true,
    })

    const [showProfileUploader, setShowProfileUploader] = useState<boolean>(
      signatoryData?.data.length > 0,
    )
    const [allAuthResults, setAllAuthResults] = useState<string[]>([])

    useEffect(() => {
      if (signatoryData?.user?.verify_state?.verify_profile) {
        setSendRequestMe(true)
        if (isUserDataSuccess && userData) {
          dispatch(handleLoginedUser(userData))
        }
      }

      const authenticationResults: string[] = []
      if (signatoryData?.data && signatoryData.data.length > 0) {
        for (const item of signatoryData.data) {
          if (item?.status === 'rejected' && item.authentication_result) {
            authenticationResults.push(item.authentication_result)
          }
        }
      }
      setAllAuthResults(authenticationResults)
    }, [
      isSignatoryDataSuccess,
      isUserDataSuccess,
      signatoryData,
      userData,
      dispatch,
    ])

    const initialValues = {
      nationalCardBack: '',
      nationalCardFront: '',
    }

    const initialValuesSignatory = signatoryData?.data?.reduce(
      (acc: { [x: string]: any; id: any }, item: any) => {
        acc[`national_card_front_path_${item.id}`] =
          item.national_card_front_path
        acc[`national_card_back_path_${item.id}`] = item.national_card_back_path

        return acc
      },
      {},
    )

    const mergedInitialValues = {
      ...(showProfileUploader ? initialValues : {}),
      ...initialValuesSignatory,
    }

    const dynamicSchemaFields = signatoryData?.data?.reduce((acc, item) => {
      acc[`national_card_front_path_${item.id}`] = yup.string()
      acc[`national_card_back_path_${item.id}`] = yup.string()

      return acc
    }, {})

    const staticSchemaFieldsRequired = {
      nationalCardBack: yup.string().required(t('requiredGender')),
      nationalCardFront: yup.string().required(t('requiredGender')),
    }

    const staticValidationSchema = yup.object({
      ...(showProfileUploader ? staticSchemaFieldsRequired : {}),
      ...dynamicSchemaFields,
    })

    const isVerify = signatoryData?.status === 'pending'
    const isVerifyPost = postSignatoryData?.data?.status === 'pending'
    const isReject = signatoryData?.status === 'rejected'

    const guidelinesTextKeys: any = {
      title: 'guideAttach',
      items: ['nationalCardText1', 'nationalCardText2'],
    }

    const handleAddProfileUploader = (
      hiddenUploader: boolean | ((prevState: boolean) => boolean),
    ) => {
      setShowProfileUploader(
        hiddenUploader ? hiddenUploader : !showProfileUploader,
      )
    }

    const getStatusIcon = (status: string, statusText: string) => {
      switch (status) {
        case 'pending':
          return (
            <>
              <ToastIconwarning />
              <span className="px-1">{statusText}</span>
            </>
          )
        case 'accepted':
          return (
            <>
              <ToastIconSuccess className="w-4 h-4" />
              <span className="px-1">{statusText}</span>
            </>
          )
        case 'rejected':
          return (
            <>
              <ToastIconError className="w-4 h-4" />
              <span className="px-1">{statusText}</span>
            </>
          )
        default:
          return null
      }
    }

    return {
      handleAddProfileUploader,
      getStatusIcon,
      refetchSignatoryData,
      showProfileUploader,
      mergedInitialValues,
      staticValidationSchema,
      isPostPending,
      postSignatoryData,
      signatoryData,
      isSignatoryDataSuccess,
      isVerify,
      isVerifyPost,
      isReject,
      guidelinesTextKeys,
      isPostSuccess,
      isUserDataSuccess,
      allAuthResults: allAuthResults?.flat(),
    }
  }
