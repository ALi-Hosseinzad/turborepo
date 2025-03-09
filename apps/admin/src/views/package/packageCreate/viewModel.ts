import {
  type CreatePropsType,
  GIFT_CARD_PACKAGE_URL,
  GIFTCARDPACKAGE_LIST_QUERY,
  useCreate,
  useListViewModel,
} from '../imports'

export const usePackageCreateViewModel = (): CreatePropsType => {
  const { isLoadingSubmit, handleRequest } = useCreate({
    url: GIFT_CARD_PACKAGE_URL,
  })

  const { refetchList, isFetching } = useListViewModel({
    url: GIFT_CARD_PACKAGE_URL,
    queryKey: GIFTCARDPACKAGE_LIST_QUERY,
  })

  const initialValues = {
    title: '',
    sku: '',
    slug: '',
    wage_id: '',
    description: '',
    status: '',
    is_credit_card: false,
    category_ids: [],
    image: '',
    discount_type: 'amount',
    amount: '',
    tag_ids: [],
  }

  const onSubmit = (values: any, formikProps: any): void => {
    const body = {
      title: values?.title,
      description: values?.description,
      status: values?.status.value,
      category_ids: values?.category_ids.map((item) => item.id),
      image: values?.image,
      discount_type: values?.discount_type,
      amount: values?.amount,
      tag_ids: values?.tag_ids.map((item) => item.id),
      is_credit_card: values?.is_credit_card,
      sku: values?.sku,
      slug: values?.slug,
      wage_id: values?.wage_id?.id,
    }
    handleRequest(body, refetchList, formikProps)
  }

  return {
    onSubmit,
    initialValues,
    isLoadingSubmit: isLoadingSubmit || isFetching,
  }
}
