import type { UseUserDetailsLayoutType } from '../../imports'
import {
  AUTHENTICATION_RESULT_URL,
  axiosGet,
  axiosPost,
  COMPANY_PROFILE_URL,
  GUILD_URL,
  MEDIA_URL,
  showError,
  useMutation,
  useQuery,
  useState,
  useTranslations,
  yup,
} from '../../imports'

interface FuncPropsType {
  body: Record<string, any>
  url: string
  version: string
}
export const useUserDetailsLayoutViewModel = (
  refetchUserInfo: () => Promise<any>,
): UseUserDetailsLayoutType => {
  const t = useTranslations()
  const [isLoadingPostConfirmOptions, setIsLoadingPostConfirmOptions] =
    useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState({
    accept: false,
    reject: false,
  })

  const initialValuesConfirmOptions = {
    reason: '',
    confirmData: '',
  }
  const validationSchemaConfirmOptions = yup.object({
    reason: yup.object().required(t('emptyError')),
  })

  const handleOpen = (type: string): void => {
    setShowConfirmModal({
      ...showConfirmModal,
      [type]: true,
    })
  }
  const handleClose = (): void => {
    setShowConfirmModal({
      accept: false,
      reject: false,
    })
  }

  const { isLoading: isLoadingConfirmOptions, data: dataConfirmOptions } =
    useQuery({
      queryKey: ['confirmOptions'],
      queryFn: () => axiosGet({ url: AUTHENTICATION_RESULT_URL }),
      enabled: showConfirmModal.reject,
      staleTime: 10 * 6000 * 5,
    })

  const updateUserDetailsInfo = async ({
    body,
    url,
    version,
  }: FuncPropsType): Promise<any> => {
    await axiosPost({ url, body, version })
  }

  const { mutateAsync } = useMutation({
    mutationFn: (e: any) => updateUserDetailsInfo(e),
    onSuccess: async () => {
      setIsLoadingPostConfirmOptions(false)
      handleClose()
      await refetchUserInfo()
    },
    onError: () => {
      setIsLoadingPostConfirmOptions(false)
      handleClose()
      showError('some thing went wrong')
    },
  })

  const onsubmitConfirm = async ({
    body,
    url,
    version,
  }: FuncPropsType): Promise<any> => {
    await mutateAsync({ body, url, version })
  }

  const handleConfirm = async ({
    id,
    url,
    isVerify,
    values,
  }: any): Promise<void> => {
    setIsLoadingPostConfirmOptions(true)
    let version = 'v1'
    let body = {
      is_verify: isVerify,
    }

    if (url === GUILD_URL) {
      version = 'v2'
      body = {
        status: isVerify === 0 ? 'rejected' : 'approved',
      }
    }

    if (url === MEDIA_URL) {
      version = 'v2'
      body = {
        status: isVerify === 0 ? 'rejected' : 'accepted',
      }
    }

    if (url === COMPANY_PROFILE_URL) {
      version = 'v2'
      body = {
        verify_profile: isVerify === 0 ? 'rejected' : 'accepted',
      }
    }
    await onsubmitConfirm({
      url: `${url}/${id}`,
      version,
      body:
        isVerify != 0
          ? body
          : { ...body, authentication_result_ids: [values?.reason?.id] },
    })
  }

  return {
    dataConfirmOptions,
    isLoadingConfirmOptions,
    isLoadingPostConfirmOptions,
    initialValuesConfirmOptions,
    validationSchemaConfirmOptions,
    showConfirmModal,
    handleConfirm,
    handleOpen,
    handleClose,
    refetchUserInfo,
  }
}
