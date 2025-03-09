import type { PermissionCreateType } from '../imports'
import {
  axiosGet,
  axiosPut,
  handleLocalStorage,
  JUST_PERSIAN_REGEX,
  PERMISSION_URL,
  showSuccess,
  useEffect,
  useListViewModel,
  useMutation,
  useParams,
  useQuery,
  useState,
  useTranslations,
  yup,
} from '../imports'

export const usePermissionEditViewModel = (): PermissionCreateType => {
  const t = useTranslations()
  const { refetchList }: any = useListViewModel({
    url: PERMISSION_URL,
    queryKey: 'permission-list',
  })
  const { id }: { id: string } = useParams()
  const [initialValues, setInitialValues] = useState({
    type: {
      value: '',
      label: '',
    },
    name: {
      value: '',
      label: '',
    },
    meta_name: '',
    description: '',
  })
  const localStorageData = handleLocalStorage({
    type: 'getLocalStorage',
    key: 'enums',
  })

  let accessNameList = []
  let accessTypeList = []
  if (typeof window !== 'undefined') {
    accessNameList = localStorageData?.Permission?.permission_name
    accessTypeList = localStorageData?.Permission?.permission_type
  }

  const validationSchema = yup.object({
    type: yup.object().required(t('emptyError')),
    name: yup.object().required(t('emptyError')),
    meta_name: yup
      .string()
      .matches(JUST_PERSIAN_REGEX, t('languageError'))
      .required(t('emptyError')),
  })

  const { data, isLoading: isLoadingGetData } = useQuery({
    queryKey: ['permissionOptions-AccessType', id],
    queryFn: () =>
      axiosGet({
        url: `${PERMISSION_URL}/${id}`,
      }),
    enabled: id != undefined,
    staleTime: 10 * 60000,
  })

  useEffect(() => {
    if (data) {
      setInitialValues({
        name: {
          value: data?.name,
          label: data?.meta_name,
        },
        meta_name: data?.meta_name,
        type: {
          value: data?.type,
          label: data?.type_label,
        },
        description: data?.description ? data?.description : '',
      })
    }
  }, [data])

  const createNewPermission = async (params): Promise<void> => {
    await axiosPut({ url: `${PERMISSION_URL}/${id}`, params })
  }
  const { mutateAsync, isPending: isPendingPostData } = useMutation({
    mutationFn: (e) => createNewPermission(e),
    onSuccess: () => {
      showSuccess(t('editedSuccessfully'))
    },
  })
  const handlePermission = async (values): Promise<void> => {
    const params = {
      ...values,
      type: values.type.value,
      name: values.name.value,
    }

    await mutateAsync(params).then(() => refetchList())
  }

  return {
    initialValues,
    validationSchema,
    accessTypeList,
    accessNameList,
    isLoadingGetData,
    isPendingPostData,
    handlePermission,
  }
}
