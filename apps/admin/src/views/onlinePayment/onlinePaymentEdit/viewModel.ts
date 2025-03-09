import { useEdit } from 'hooks/useEdit'
import type { UseOnlinePaymentEditViewModelType } from '../imports'
import { SERVICE_URL, useOnlinePaymentListViewModel } from '../imports'

const handleInitial = (editData: any): object => ({
  title: editData?.title,
  image: editData?.image,
  min_price: editData?.min_price,
  max_price: editData?.max_price,
  description: editData?.description,
  region_ids:
    editData?.regions?.map((region: any) => ({
      id: region?.id,
      name: region?.name,
    })) || [],
  category_ids:
    editData?.category?.map((cat: any) => ({
      id: cat?.id,
      name: cat?.name,
    })) || [],
  subscription_ids:
    editData?.subscriptions?.map((sub: any) => ({
      id: sub?.id,
      description: sub?.description,
    })) || [],
  tag_ids: editData?.tags || [],
  form_id: editData?.form_id
    ? { id: editData?.form?.id, name: editData?.form?.name }
    : null,
  status: editData?.status
    ? { label: editData?.status_label, value: editData?.status }
    : null,
  sku: editData?.sku,
  slug: editData?.slug,
  wage_id: { amount: editData?.wage?.amount, label: editData?.wage?.id },
})

const handleBody = (values: any): object => {
  const {
    status,
    form_id: formId,
    tag_ids: tagIds,
    category_ids: categoryIds,
    region_ids: regionIds,
    subscription_ids: subscriptionIds,
    wage_id: wage,
  } = values
  const tags = tagIds.map((tag) => tag.id)
  const categories = categoryIds.map((cat) => cat.id)
  const regions = regionIds.map((region) => region.id)
  const subscriptions = subscriptionIds.map((sub) => sub.id)

  const body = {
    ...values,
    form_id: formId.id,
    status: status.value,
    tag_ids: tags,
    category_ids: categories,
    region_ids: regions,
    subscription_ids: subscriptions,
    wage_id: wage?.id,
  }
  if (subscriptionIds?.length) {
    delete body.min_price
    delete body.max_price
  } else {
    delete body.subscription_ids
  }
  return body
}

export const useOnlinePaymentEditViewModel =
  (): UseOnlinePaymentEditViewModelType => {
    const { refetchList } = useOnlinePaymentListViewModel()
    const { editData, isLoadingEditData, submitRequest, isPendingSubmitEdit } =
      useEdit({
        url: SERVICE_URL,
        method: 'post',
        queryKey: 'online-payment-edit',
        handleBody,
        handleInitial,
      })

    const onSubmit = (values: any): void => {
      submitRequest(handleBody(values), refetchList)
    }

    return {
      initialValues: handleInitial(editData),
      isPendingSubmitEdit,
      isLoadingEditData,
      onSubmit,
    }
  }
