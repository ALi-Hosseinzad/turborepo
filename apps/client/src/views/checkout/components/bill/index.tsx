import { type BillProps, BillView, useBillViewModel } from '../../import'

const Bill: React.FC<BillProps> = ({ orderId }) => {
  const {
    checkoutImageInfo,
    getOrderBillInfo,
    initialValues,
    onSubmit,
    isPending,
    isSuccess,
    orderStatus,
    AddBalanceInitValue,
  } = useBillViewModel({ orderId })
  const orderBillData = getOrderBillInfo()
  return (
    <BillView
      orderBillData={orderBillData}
      checkoutImageInfo={checkoutImageInfo}
      initialValues={initialValues}
      AddBalanceInitValue={AddBalanceInitValue}
      isPending={isPending}
      isSuccess={isSuccess}
      orderStatus={orderStatus}
      onSubmit={onSubmit}
    />
  )
}
export default Bill
