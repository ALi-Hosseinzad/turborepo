import { FORM_URL, useCreate, useListViewModel } from '../imports'
import type { FormManagementCreateViewModelType } from '../imports'

export const useFormManagementCreateViewModel =
  (): FormManagementCreateViewModelType => {
    const { refetchList } = useListViewModel({
      url: FORM_URL,
      queryKey: 'form-list',
    })

    const initialValues = {
      formName: '',
      status: '',
      inputType: '',
      required: '',
      formInputs: [],
    }
    const { isLoadingSubmit, isSuccessSubmit, handleRequest } = useCreate({
      url: FORM_URL,
    })

    const onSubmit = async (values: any, formikProps: any): Promise<any> => {
      const formInputIds = values?.formInputs?.map(
        ({ id, required }, index) => {
          return {
            form_input_id: id,
            required,
            priority: index,
          }
        },
      )

      const body = {
        name: values?.formName,
        status: values?.status?.value,
        form_input_ids: JSON.stringify(formInputIds),
      }

      await handleRequest(body, refetchList, formikProps)
    }

    return {
      initialValues,
      handleAddNewInput: onSubmit,
      isPending: isLoadingSubmit,
      isSuccess: isSuccessSubmit,
    }
  }
