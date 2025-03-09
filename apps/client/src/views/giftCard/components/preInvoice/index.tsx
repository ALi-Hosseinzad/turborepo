import {
  FormWrapper,
  PreInvoiceView,
  usePreInvoiceViewModel,
} from '../../imports'

export const PreInvoice = ({ selectedProduct }) => {
  const {
    userInfo,
    initialValues,
    validationSchema,
    onSubmit,
    quantity,
    setQuantity,
    isPending,
    isSuccess,
  } = usePreInvoiceViewModel(selectedProduct)

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <PreInvoiceView
            userInfo={userInfo}
            selectedProduct={selectedProduct}
            quantity={quantity}
            setQuantity={setQuantity}
            isPending={isPending}
            isSuccess={isSuccess}
          />
        )
      }}
    </FormWrapper>
  )
}
