import { PreInvoiceView, usePreInvoiceViewModel } from '../../imports'

export const PreInvoice = ({ isPending, isSuccess }) => {
  const { userInfo, priceInfo } = usePreInvoiceViewModel()
  return (
    <PreInvoiceView
      userInfo={userInfo}
      priceInfo={priceInfo}
      isPending={isPending}
      isSuccess={isSuccess}
    />
  )
}
