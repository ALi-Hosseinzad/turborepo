import type { CreatePropsType } from '../imports'
import { NOTIFICATION_URL, useCreate, useListViewModel } from '../imports'

export const useNotificationCreateViewModel = (): CreatePropsType => {
  const { refetchList } = useListViewModel({
    url: NOTIFICATION_URL,
    queryKey: 'notifications',
  })
  const { isLoadingSubmit, handleRequest } = useCreate({
    url: NOTIFICATION_URL,
  })

  const initialValues = {
    need_sms: false,
    need_push: false,
    need_email: false,
    description: '',
    title: '',
    attachment: '',
    subject_id: '',
    group_id: '',
  }

  const onSubmit = (values: any, formikProps: any): void => {
    const body = {
      ...values,
      subject_id: values.subject_id.id,
      group_id: values.group_id.id,
    }
    body.attachment === '' && delete body?.attachment
    handleRequest(body, refetchList, formikProps)
  }

  return {
    initialValues,
    isLoadingSubmit,
    onSubmit,
  }
}
