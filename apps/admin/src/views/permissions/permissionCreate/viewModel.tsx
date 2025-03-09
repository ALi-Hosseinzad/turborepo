import type { PermissionCreateType } from '../imports'
import {
  axiosPost,
  handleLocalStorage,
  JUST_PERSIAN_REGEX,
  PERMISSION_URL,
  showSuccess,
  useListViewModel,
  useMutation,
  useTranslations,
  yup,
} from '../imports'

export const usePermissionCreateViewModel = (): PermissionCreateType => {
  const t = useTranslations()
  const localStorageData = handleLocalStorage({
    type: 'getLocalStorage',
    key: 'enums',
  })
  const { refetchList }: any = useListViewModel({
    url: PERMISSION_URL,
    queryKey: 'permission-list',
  })
  let accessNameList = []
  let accessTypeList = []
  if (typeof window !== 'undefined') {
    accessNameList = localStorageData?.Permission?.permission_name
    accessTypeList = localStorageData?.Permission?.permission_type
  }

  const initialValues = {
    type: '',
    name: '',
    meta_name: '',
    description: '',
  }
  const validationSchema = yup.object({
    type: yup.object().required(t('emptyError')),
    name: yup.object().required(t('emptyError')),
    meta_name: yup
      .string()
      .matches(JUST_PERSIAN_REGEX, t('languageError'))
      .required(t('emptyError')),
  })

  const createNewPermission = async (body): Promise<void> => {
    await axiosPost({ url: PERMISSION_URL, body })
  }
  const { mutateAsync, isPending: isPendingPostData } = useMutation({
    mutationFn: (e) => createNewPermission(e),

    async onSuccess() {
      showSuccess(t('sucssesText'))
      await refetchList()
    },
  })
  const handlePermission = async (values, formikProps): Promise<void> => {
    const bodyData = {
      meta_name: values.meta_name,
      type: values.type.value,
      name: values.name.value,
    }
    const body =
      values.description != ''
        ? {
            ...values,
            type: values.type.value,
            name: values.name.value,
          }
        : bodyData
    await mutateAsync(body).then(() => {
      formikProps.resetForm()
    })
  }

  return {
    initialValues,
    validationSchema,
    accessTypeList,
    accessNameList,
    handlePermission,
    isPendingPostData,
  }
}
