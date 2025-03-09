import {
  axiosGet,
  axiosPost,
  FORM_INPUT_URL,
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
import type { InputManagementEditViewModelType } from '../imports'

export const useInputManagementEditViewModel =
  (): InputManagementEditViewModelType => {
    const { id }: { id: string } = useParams()
    const t = useTranslations()
    const [initialInputType, setIinitialInputType] = useState(false)
    const [initialValues, setInitialValues] = useState({
      name: '',
      status: '',
      label: '',
      placeholder: '',
      formType: '',
      inputType: '',
      subLabel: '',
      option: [{ value: '', label: '' }],
      helperText: '',
      property: [{ value: '', label: '' }],
    })

    const [selectedOption, setSelectedOption] = useState({
      status: false,
      type: '',
      name: '',
    })

    const { data, isLoading: isLoadingGetData } = useQuery({
      queryKey: ['permissionOptions-AccessType', id],
      queryFn: () =>
        axiosGet({
          url: `${FORM_INPUT_URL}/${id}`,
        }),
      enabled: id != undefined,
      staleTime: 10 * 60000,
    })

    const { refetchList }: any = useListViewModel({
      url: FORM_INPUT_URL,
      queryKey: 'input-management-list',
    })

    useEffect(() => {
      setIinitialInputType(false)
      if (data) {
        const {
          label,
          name,
          status,
          status_label: statusLabel,
          placeholder,
          form_input_type: formType,
          type,
          type_label: typeLabel,
          sub_label: subLabel,
          helper_text: helperText,
          option,
          property,
        } = data

        if (
          type == 'checkbox' ||
          type == 'select' ||
          type == 'auto_complete' ||
          type == 'radiobutton'
        ) {
          setIinitialInputType(true)
          setSelectedOption({
            status: true,
            type,
            name: 'option',
          })
        }
        if (type == 'textarea' || type == 'range') {
          setIinitialInputType(true)
          setSelectedOption({
            status: true,
            type,
            name: 'property',
          })
        }

        const initialInputValue = {
          name,
          status: { value: status, label: statusLabel },
          label,
          placeholder,
          formType,
          inputType: { label: typeLabel, value: type },
          subLabel,
          helperText: helperText
            ? { value: helperText?.regex, label: helperText?.subtitle }
            : '',
          option,
          property: property != null ? property : [{ value: '', label: '' }],
        }

        setInitialValues(initialInputValue as any)
      }
    }, [data])

    const editInput = async (body): Promise<void> => {
      await axiosPost({
        url: `${FORM_INPUT_URL}/${id}`,
        body,
      })
    }
    const { mutateAsync, isPending } = useMutation({
      mutationFn: (e) => editInput(e),
    })

    const handleEditInput = async (values): Promise<any> => {
      let changedValues: any = getChangedObjectValues(values, initialValues)
      let body = { ...changedValues }

      if (body) {
        if (changedValues?.subLabel) {
          const { subLabel, ...rest } = changedValues
          changedValues = {
            ...rest,
            sub_label: subLabel,
          }
          delete changedValues.subLabel
        }

        if (changedValues?.formType) {
          const { formType, ...rest } = changedValues
          changedValues = {
            ...rest,
            form_input_type: formType,
          }
          delete changedValues.formType
        }

        if (changedValues?.inputType) {
          const { inputType, ...rest } = changedValues
          changedValues = {
            ...rest,
            type: inputType?.value,
          }
          delete changedValues.inputType
        }

        if (changedValues?.helperText) {
          const { helperText, ...rest } = changedValues
          changedValues = {
            ...rest,
            helper_text: helperText,
          }
          delete changedValues.helperText
        }

        if (changedValues?.status) {
          const { status, ...rest } = changedValues
          changedValues = {
            ...rest,
            status: status?.value,
          }
          delete changedValues.status
        }

        body = {
          ...changedValues,
        }
      }

      await mutateAsync(body)
        .then(() => {
          refetchList()
          showSuccess(t('editedSuccessfully'))
        })
        .catch((error) => {
          showError(error.message)
        })
    }

    return {
      initialValues,
      setInitialValues,
      handleEditInput,
      isPending,
      isLoadingGetData,
      initialInputType,
      setIinitialInputType,
      selectedOption,
      setSelectedOption,
    }
  }
