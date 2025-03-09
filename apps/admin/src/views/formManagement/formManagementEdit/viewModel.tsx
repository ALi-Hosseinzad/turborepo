import {
  axiosGet,
  axiosPut,
  FORM_URL,
  getChangedObjectValues,
  showError,
  showSuccess,
  useEffect,
  useListViewModel,
  useMutation,
  useParams,
  useQuery,
  useState,
  useTranslations,
} from '../imports'
import type { FormManagementEditViewModelType } from '../imports'

export const useFormManagementEditViewModel =
  (): FormManagementEditViewModelType => {
    const { id }: { id: string } = useParams()
    const t = useTranslations()
    const [initialValues, setInitialValues] = useState({
      formName: '',
      status: '',
      inputType: '',
      required: '',
      formInputs: [],
    })
    const { refetchList } = useListViewModel({
      url: FORM_URL,
      queryKey: 'form-management-list',
    })

    const { data, isLoading: isLoadingGetData } = useQuery({
      queryKey: ['permissionOptions-AccessType', id],
      queryFn: () =>
        axiosGet({
          url: `${FORM_URL}/${id}`,
        }),
      enabled: id != undefined,
      staleTime: 10 * 60000,
    })

    useEffect(() => {
      if (data) {
        const { name, status, status_label: statusLabel, inputs } = data
        let initialInputValue: any = {}
        initialInputValue = {
          ...initialInputValue,
          formName: name,
          status: { value: status, label: statusLabel },
          formInputs: inputs,
        }
        setInitialValues(initialInputValue)
      }
    }, [data])

    const editForm = async (params: any): Promise<void> => {
      await axiosPut({ url: `${FORM_URL}/${id}`, params })
    }
    const { mutateAsync, isPending } = useMutation({
      mutationFn: (e) => editForm(e),
    })

    const handleEditForm = async (values): Promise<any> => {
      let changedValues: any = getChangedObjectValues(values, initialValues)
      let body = { ...changedValues }

      if (body) {
        const formInputIds = body?.formInputs?.map(
          ({ id, required }, index) => {
            return {
              form_input_id: id,
              required,
              priority: index,
            }
          },
        )
        if (changedValues?.formName) {
          const { formName, ...rest } = changedValues
          changedValues = {
            ...rest,
            name: formName,
          }
          delete changedValues.formName
        }
        if (changedValues?.inputType && changedValues?.required) {
          delete changedValues.inputType
          delete changedValues.required
        }
        if (changedValues?.formInputs) {
          delete changedValues.formInputs
        }

        body = {
          ...changedValues,
          form_input_ids: JSON.stringify(formInputIds),
        }
      }

      await mutateAsync(body)
        .then(async () => {
          refetchList && (await refetchList())
          showSuccess(t('editedSuccessfully'))
        })
        .catch((error) => {
          showError(error.message)
        })
    }
    return {
      initialValues,
      isLoadingGetData,
      isPending,
      handleEditForm,
    }
  }
