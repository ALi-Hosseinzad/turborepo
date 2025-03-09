import {
  BannerManagementFormView,
  useBannerManagementFormViewModel,
} from '../../imports'

const BannerManagementForm = (props: any): JSX.Element => {
  const { isLoading, initialValues, onSubmit, titleHeader1, titleHeader2 } =
    props
  const { validationSchema } = useBannerManagementFormViewModel()

  return (
    <BannerManagementFormView
      isLoading={isLoading}
      validationSchema={validationSchema}
      initialValues={initialValues}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      onSubmit={onSubmit}
    />
  )
}

export default BannerManagementForm
