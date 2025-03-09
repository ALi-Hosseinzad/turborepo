import { handleLocalStorage } from 'utils/localStorage'
import type { UseProductFormViewModelType } from '../../imports'
import {
  axiosGet,
  GIFT_CARD_PACKAGE_URL,
  REGION_URL,
  useEffect,
  useQuery,
  useState,
  useTranslations,
  yup,
} from '../../imports'

export const useProductFormViewModel = (): UseProductFormViewModelType => {
  const t = useTranslations()
  const [dataProductsOption, setDataProductsOption] = useState([])
  const [dataRegionOption, setDataRegionOption] = useState([])
  const enums = handleLocalStorage({ type: 'getLocalStorage', key: 'enums' })

  const status = enums?.GiftCard?.gift_card_product?.gift_card_product_status

  const validationSchema = yup.object({
    package: yup.object().required(t('emptyError')),
    region: yup.object().required(t('emptyError')),
    status: yup.object().required(t('emptyError')),
    price: yup.string().required(t('emptyError')),
    quantity: yup.string().required(t('emptyError')),
    slug: yup.string().required(t('emptyError')),
    sku: yup.string().required(t('emptyError')),
  })

  const { data: dataProduct, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['product-package-options'],
    queryFn: () =>
      axiosGet({
        url: GIFT_CARD_PACKAGE_URL,
      }),
    staleTime: 10 * 60000,
  })

  const { data: dataRegion, isLoading: isLoadingRegion } = useQuery({
    queryKey: ['region-options'],
    queryFn: () =>
      axiosGet({
        url: REGION_URL,
      }),
    staleTime: 10 * 60000,
  })

  useEffect(() => {
    setDataProductsOption([])
    if (dataProduct) {
      setDataProductsOption(dataProduct?.data)
    }
  }, [dataProduct])

  useEffect(() => {
    setDataRegionOption([])
    if (dataRegion) {
      setDataRegionOption(dataRegion?.data)
    }
  }, [dataProduct])

  return {
    validationSchema,
    dataProductsOption,
    isLoadingProduct,
    dataRegionOption,
    isLoadingRegion,
    status,
  }
}
