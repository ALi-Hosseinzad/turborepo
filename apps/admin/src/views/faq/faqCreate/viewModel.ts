import type { CreatePropsType } from '../imports'
import { FAQ_URL, useCreate, useListViewModel } from '../imports'

export const useFaqCreateViewModel = (): CreatePropsType => {
  const { refetchList } = useListViewModel({
    url: FAQ_URL,
    queryKey: 'faqs',
  })
  const initialValues = {
    question: '',
    answer: '',
    subject_id: '',
  }

  const { isLoadingSubmit, handleRequest } = useCreate({
    url: FAQ_URL,
  })

  const onSubmit = (values: any, formikProps: any): void => {
    const body = { ...values, subject_id: values.subject_id.id }
    handleRequest(body, refetchList, formikProps)
  }

  return {
    initialValues,
    isLoadingSubmit,
    onSubmit,
  }
}
