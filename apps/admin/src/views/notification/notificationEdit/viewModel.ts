import type { EditViewModelType } from '../imports'
import { NOTIFICATION_URL, useEdit, useListViewModel } from '../imports'

export const useNotificationEditViewModel = (): EditViewModelType => {
  const { refetchList } = useListViewModel({
    url: NOTIFICATION_URL,
    queryKey: 'notification-list',
  })
  const handleBody = (curBody: any): object => {
    const body = { ...curBody }
    body?.group_id && delete body.group_id
    body?.need_push ? (body.need_push = 1) : (body.need_push = 0)
    body?.need_email ? (body.need_email = 1) : (body.need_email = 0)
    body?.need_sms ? (body.need_sms = 1) : (body.need_sms = 0)
    return body
  }

  const handleInitial = (editData: any): object => {
    // const attachment = editData?.attachment?.includes('image') || null
    return {
      need_sms: editData?.detail?.need_sms,
      need_push: editData?.detail?.need_push,
      need_email: editData?.detail?.need_email,
      description: editData?.description,
      title: editData?.title,
      attachment: editData?.attachment,
      group_id: editData?.group
        ? { id: editData?.group?.id, name: editData?.group?.name }
        : null,
    }
  }
  const { editData, isLoadingEditData, submitRequest, isPendingSubmitEdit } =
    useEdit({
      url: NOTIFICATION_URL,
      queryKey: 'notification-edit',
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
