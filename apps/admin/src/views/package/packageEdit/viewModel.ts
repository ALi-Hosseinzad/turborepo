import { useEdit } from 'hooks/useEdit'
import {
  GIFT_CARD_PACKAGE_URL,
  GIFTCARDPACKAGE_LIST_QUERY,
  useListViewModel,
} from '../imports'

const handleInitial = (giftCardData: any): object => {
  return {
    title: giftCardData?.title,
    description: giftCardData?.description,
    status: giftCardData?.status
      ? { value: giftCardData?.status, label: giftCardData?.status_label }
      : null,
    is_credit_card: giftCardData?.is_credit_card,
    category_ids:
      giftCardData?.category?.map((cat: any) => ({
        id: cat.id,
        name: cat.name,
      })) || [],
    image: giftCardData?.image,
    discount_type: giftCardData?.discount_type,
    amount: giftCardData?.amount,
    tag_ids: giftCardData?.tags || [],
    slug: giftCardData?.slug,
    sku: giftCardData?.sku,
    wage_id: {
      id: giftCardData?.wage?.id || '',
      amount: giftCardData?.wage?.amount || '',
    },
  }
}

const handleBody = (values: any): object => ({
  title: values.title,
  description: values.description,
  slug: values?.slug,
  sku: values?.sku,
  status: values?.status?.value,
  category_ids: values?.category_ids?.map((item) => item.id),
  image: values?.image,
  discount_type: values?.discount_type,
  amount: values?.amount,
  tag_ids: values?.tag_ids?.map((item) => item.id),
  is_credit_card: values?.is_credit_card,
})

export const usePackageEditViewModel = (): any => {
  const { refetchList } = useListViewModel({
    url: GIFT_CARD_PACKAGE_URL,
    queryKey: GIFTCARDPACKAGE_LIST_QUERY,
  })

  const { editData, isLoadingEditData, submitRequest, isPendingSubmitEdit } =
    useEdit({
      url: GIFT_CARD_PACKAGE_URL,
      handleBody,
      handleInitial,
      queryKey: GIFTCARDPACKAGE_LIST_QUERY,
      method: 'post',
    })

  const onSubmit = (body: any): void => {
    submitRequest(handleBody(body), refetchList)
  }

  return {
    initialValues: handleInitial(editData),
    isPendingSubmitEdit,
    onSubmit,
    isLoadingEditData,
    editData,
  }
}
