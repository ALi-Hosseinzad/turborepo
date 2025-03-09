import {
  axiosPost,
  DISCOUNT_URL,
  showSuccess,
  useDiscountListViewModel,
  useMutation,
  useTranslations,
} from '../imports'

export const useDiscountCreateViewModel = (): any => {
  const t = useTranslations()
  const { refetchList } = useDiscountListViewModel() as { refetchList: any }

  const initialValues = {
    code: '',
    amount: '',
    min: '',
    max: '',
    amountType: '',
    type: '',
    whatFor: '',
    expireDay: '',
    userIds: '',
    userUsed: '',
    giftCardProductIds: [],
    giftCardPackageIds: [],
    serviceIds: [],
    status: '',
    sendNotify: '',
  }

  const { mutateAsync, isPending: isLoading } = useMutation({
    mutationFn: (body: any) =>
      axiosPost({
        url: DISCOUNT_URL,
        body,
      }),
  })

  const onSubmit = async (values, formikProps): Promise<void> => {
    const body = {
      ...values,
      type: values.type.value,
      send_notify: values.sendNotify.value === 'disable' ? 0 : 1,
      status: values.status.value,
      amount_type: values.amountType,
      expire_day: Number(values.expireDay),
      user_used: Number(values.userUsed),
      min: Number(values.min),
      max: Number(values.max),
      what_for: values.whatFor.value,
      gift_card_package_ids: values.giftCardPackageIds.map(
        (packageId: { id: string }) => packageId.id,
      ),
      group_id: values?.userIds.id,
      gift_card_product_ids: values.giftCardProductIds.map(
        (productId: { id: string }) => productId.id,
      ),
      service_ids: values?.serviceIds.map(
        (serviceId: { id: string }) => serviceId.id,
      ),
    }
    delete body.amountType
    delete body.expireDay
    delete body.userUsed
    delete body.sendNotify
    if (body.status === 'public') {
      delete body.group_id
    }

    if (body.what_for === 'service') {
      delete body.gift_card_product_ids
      delete body.gift_card_package_ids
    }
    if (body.what_for === 'gift_card_package') {
      delete body.gift_card_product_ids
      delete body.service_ids
    }
    if (body.what_for === 'gift_card_product') {
      delete body.service_ids
      delete body.gift_card_package_ids
    }
    if (body.what_for === 'perfect_money') {
      delete body.service_ids
      delete body.gift_card_product_ids
      delete body.gift_card_package_ids
    }
    delete body.giftCardProductIds
    delete body.giftCardPackageIds
    delete body.serviceIds
    delete body.whatFor
    delete body.userIds
    delete body.userIds

    await mutateAsync(body).then(async () => {
      formikProps.resetForm()
      showSuccess(t('addedSuccessfully'))
      await refetchList()
    })
  }

  return {
    initialValues,
    isLoading,
    onSubmit,
    refetchList,
  }
}
