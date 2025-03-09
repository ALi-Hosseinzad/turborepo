import { BannerImageFormView, useBannerImageFormViewModel } from '../../imports'

const BannerImageForm = (props: any): JSX.Element => {
  const { isLoading, initialValues, onSubmit, titleHeader1, titleHeader2 } =
    props
  const { validationSchema, onChageRelationType }: any =
    useBannerImageFormViewModel()

  return (
    <BannerImageFormView
      isLoading={isLoading}
      validationSchema={validationSchema}
      initialValues={initialValues}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      onSubmit={onSubmit}
      onChageRelationType={onChageRelationType}
    />
  )
}

export default BannerImageForm
