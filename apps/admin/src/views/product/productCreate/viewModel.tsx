import type { UseProductCreateViewModelType } from '../imports'
import {
  axiosPost,
  GIFT_CARD_PRODUCT_URL,
  showSuccess,
  useMutation,
  useTranslations,
} from '../imports'

export const useProductCreateViewModel = (): UseProductCreateViewModelType => {
  const initialValues = {
    package: '',
    region: '',
    status: '',
    price: '',
    discount: '',
    discountType: '',
    quantity: '',
    slug: '',
    sku: '',
  }
  const t = useTranslations()

  const createProduct = async (body): Promise<void> => {
    await axiosPost({ url: GIFT_CARD_PRODUCT_URL, body })
  }
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => createProduct(e),
    onSuccess() {
      showSuccess(`${t('add')} ${t('product')}  `)
    },
  })
  const handleAddNewProduct = async (values, formikProps): Promise<any> => {
    const body = {
      price: values?.price,
      quantity: values?.quantity,
      region_id: values?.region?.id,
      status: values?.status?.value,
      gift_card_package_id: values?.package?.id,
      slug: values?.slug,
      sku: values?.sku,
      amount: values?.discount,
      discount_type: values?.discountType,
    }
    for (const key in body) {
      if (body[key] == '' || body[key] == null) {
        delete body[key]
      }
    }
    const mainBody = body
    await mutateAsync(mainBody as any).then(() => formikProps.resetForm())
  }

  return {
    initialValues,
    handleAddNewProduct,
    isPending,
  }
}
