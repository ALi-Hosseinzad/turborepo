import type { InputManagementCreateViewModelType } from '../imports'
import {
  axiosPost,
  FORM_INPUT_URL,
  showError,
  showSuccess,
  useListViewModel,
  useMutation,
  useState,
  useTranslations,
} from '../imports'

export const useInputManagementCreateViewModel =
  (): InputManagementCreateViewModelType => {
    const t = useTranslations()
    const [selectedOption, setSelectedOption] = useState({
      status: false,
      type: '',
      name: '',
    })
    const initialValues = {
      name: '',
      label: '',
      subLabel: '',
      inputType: '',
      formType: '',
      status: '',
      placeholder: '',
      helperText: '',
      property: [],
      option: [{ value: '', label: '' }],
    }
    const { refetchList }: any = useListViewModel({
      url: FORM_INPUT_URL,
      queryKey: 'input-management-list',
    })
    const createInput = async (body): Promise<void> => {
      await axiosPost({ url: FORM_INPUT_URL, body })
    }
    const { mutateAsync, isPending } = useMutation({
      mutationFn: (e) => createInput(e),
    })
    const handleAddNewInput = async (values, formikProps): Promise<any> => {
      const body = {
        name: values?.name,
        label: values?.label,
        sub_label: values?.subLabel,
        type: values?.inputType?.value,
        form_input_type: values?.formType,
        placeholder: values?.placeholder,
        status: values?.status?.value,
        helper_text: values?.helperText,
        property: values?.property,
        option: values?.option,
      }
      const cloneBody = { ...body }
      if (!cloneBody.property.length) {
        delete cloneBody.property
      }
      if (cloneBody.option[0].value == '') {
        delete cloneBody.option
      }

      for (const key in cloneBody) {
        if (cloneBody[key] == '' || cloneBody[key] == null) {
          delete cloneBody[key]
        }
      }
      if (cloneBody.option) {
        cloneBody?.option.map((item) => {
          return item.value != '' ? item : null
        })
      }
      if (cloneBody.property) {
        cloneBody?.option.map((item) => {
          return item.value != '' ? item : null
        })
      }

      if (
        cloneBody?.type == 'select' ||
        cloneBody?.type == 'checkbox' ||
        cloneBody?.type == 'auto_complete' ||
        cloneBody?.type == 'radiobutton'
      ) {
        delete cloneBody.property
      } else if (
        cloneBody?.type === 'range' ||
        cloneBody?.type === 'textarea'
      ) {
        delete cloneBody.option
      } else {
        delete cloneBody.option
        delete cloneBody.property
      }

      await mutateAsync(cloneBody as any)
        .then(async () => {
          formikProps.resetForm()
          await refetchList()
          showSuccess(t('editedSuccessfully'))
        })
        .catch((error) => {
          showError(error.message)
        })
    }

    return {
      initialValues,
      handleAddNewInput,
      isPending,
      selectedOption,
      setSelectedOption,
    }
  }
