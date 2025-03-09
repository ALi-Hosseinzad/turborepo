import type { FaqFormPropsType } from '../../imports'
import { FaqFormView, useFaqFormViewModel } from '../../imports'

const FaqForm = (props: FaqFormPropsType): JSX.Element => {
  const { isLoading, initialValues, onSubmit, titleHeader1, titleHeader2 } =
    props
  const { validationSchema } = useFaqFormViewModel()

  return (
    <FaqFormView
      isLoading={isLoading}
      validationSchema={validationSchema}
      initialValues={initialValues}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      onSubmit={onSubmit}
    />
  )
}

export default FaqForm
