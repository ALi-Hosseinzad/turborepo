import {
  type OnlinePaymentFormPropsType,
  OnlinePaymentFormView,
  useOnlinePaymentFormViewModel,
} from '../../imports'

const OnlinePaymentForm = (props: OnlinePaymentFormPropsType): JSX.Element => {
  const { isLoading, initialValues, onSubmit, titleHeader1, titleHeader2 } =
    props
  const { validationSchema, handleDisablePrice, disablePrice } =
    useOnlinePaymentFormViewModel()

  return (
    <OnlinePaymentFormView
      isLoading={isLoading}
      validationSchema={validationSchema}
      initialValues={initialValues}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      handleDisablePrice={handleDisablePrice}
      disablePrice={disablePrice}
      onSubmit={onSubmit}
    />
  )
}

export default OnlinePaymentForm
