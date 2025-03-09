import type { EditViewModelType } from '../imports'
import { FAQ_URL, useEdit, useListViewModel } from '../imports'

const handleBody = (body: any): object => {
  return { ...body, subject_id: body.subject_id.id }
}

const handleInitial = (editData: any): object => ({
  question: editData?.question,
  answer: editData?.answer,
  subject_id: editData?.subject
    ? {
        id: editData?.subject?.id,
        title: editData?.subject?.title,
      }
    : null,
})

export const useFaqEditViewModel = (): EditViewModelType => {
  const { refetchList } = useListViewModel({
    url: FAQ_URL,
    queryKey: 'faqs',
  })

  const { editData, isLoadingEditData, submitRequest, isPendingSubmitEdit } =
    useEdit({
      url: FAQ_URL,
      method: 'put-body',
      queryKey: 'faq-edit',
      handleInitial,
      handleBody,
    })

  const onSubmit = (body: any): void => {
    submitRequest(handleBody(body), refetchList)
  }

  return {
    initialValues: handleInitial(editData),
    isPendingSubmitEdit,
    isLoadingEditData,
    onSubmit,
  }
}
