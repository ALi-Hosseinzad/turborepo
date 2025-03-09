import {
  NotificationFormView,
  useNotificationFormViewModel,
} from '../../imports'

const NotificationForm = (props: any): JSX.Element => {
  const { isLoading, initialValues, onSubmit, titleHeader1, titleHeader2 } =
    props
  const { validationSchema, checkboxClassName }: any =
    useNotificationFormViewModel()

  return (
    <NotificationFormView
      isLoading={isLoading}
      validationSchema={validationSchema}
      initialValues={initialValues}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      checkboxClassName={checkboxClassName}
      onSubmit={onSubmit}
    />
  )
}

export default NotificationForm
