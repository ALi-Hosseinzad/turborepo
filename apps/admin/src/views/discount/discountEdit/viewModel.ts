import {
  DISCOUNT_URL,
  UseDifferenceDays,
  useEdit,
  useListViewModel,
} from '../imports'

const handleBody = (body: any): object => {
  const bodyData = {
    code: body.code,
    amount_type: body.amountType,
    amount: body.amount,
    expire_day: Number(body.expireDay),
    min: Number(body.min),
    max: Number(body.max),
    type: body.type.value,
    status: body.status.value,
    what_for: body.whatFor.value,
    // group_id: body?.userIds.id,
    // user_used: Number(body.userUsed),
    // send_notify: body.sendNotify.value === 'disable ' ? 0 : 1,
    gift_card_package_ids: body.giftCardPackageIds.map(
      (packageId: { id: string }) => packageId.id,
    ),
    service_ids: body?.serviceIds.map(
      (serviceId: { id: string }) => serviceId.id,
    ),
    gift_card_product_ids: body.giftCardProductIds.map(
      (productId: { id: string }) => productId.id,
    ),
  }

  // if (bodyData.status === 'public') {
  //   delete bodyData.group_id
  // }

  if (bodyData.what_for === 'service') {
    delete bodyData.gift_card_product_ids
    delete bodyData.gift_card_package_ids
  }
  if (bodyData.what_for === 'gift_card_package') {
    delete bodyData.gift_card_product_ids
    delete bodyData.service_ids
  }
  if (bodyData.what_for === 'gift_card_product') {
    delete bodyData.service_ids
    delete bodyData.gift_card_package_ids
  }
  if (bodyData.what_for === 'perfect_money') {
    delete bodyData.service_ids
    delete bodyData.gift_card_product_ids
    delete bodyData.gift_card_package_ids
  }
  return bodyData
}

const handleInitial = (editData: any): object => ({
  code: editData?.code,
  amount: editData?.amount,
  min: editData?.min,
  max: editData?.max,
  amountType: editData?.amount_type,

  type: {
    value: editData?.type,
    label: editData?.type_label,
  },
  whatFor: editData?.what_for
    ? {
        value: editData?.what_for,
        label: editData?.what_label,
      }
    : null,
  expireDay: UseDifferenceDays(editData.expire_day),

  giftCardProductIds: editData?.gift_card_product,
  giftCardPackageIds: editData?.gift_card_package,
  serviceIds: editData?.service,
  status: {
    value: editData?.status,
    label: editData?.status_label,
  },
})

export const useDiscountEditViewModel = (): any => {
  const { refetchList } = useListViewModel({
    url: DISCOUNT_URL,
    queryKey: 'discounts',
  })

  const { editData, isLoadingEditData, submitRequest, isPendingSubmitEdit } =
    useEdit({
      url: DISCOUNT_URL,
      queryKey: 'discount-edit',
      handleInitial,
      handleBody,
    })

  const onSubmit = (body: any): any => {
    submitRequest(handleBody(body), refetchList)
  }

  return {
    initialValues: handleInitial(editData),
    isPendingSubmitEdit,
    isLoadingEditData,
    onSubmit,
  }
}
