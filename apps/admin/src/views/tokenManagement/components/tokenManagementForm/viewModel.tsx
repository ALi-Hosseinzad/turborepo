import type { UseTokenManagementFormViewModelType } from '../../imports'
import {
  axiosGet,
  GET_NAME_GIFT_CARD_PRODUCT_URL,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  useEffect,
  useQuery,
  useState,
  useTranslations,
  yup,
} from '../../imports'

export const useTokenManagementFormViewModel = (
  initialValues: any,
  setInitialValues: any,
): UseTokenManagementFormViewModelType => {
  const t = useTranslations()
  const [dataProductsOption, setDataProductsOption] = useState([])
  const [selecteProductsOption, setSelecteProductsOption] = useState<{
    id: string
  }>()
  const [dataPriceOption, setDataPriceOption] = useState([{ price: '' }])

  const validationSchema = yup.object({
    product: yup.object().required(t('emptyError')),
    price: yup.object().required(t('emptyError')),
    token: yup.string().required(t('emptyError')),
  })

  const { data: dataProduct, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['product-options'],
    queryFn: () =>
      axiosGet({
        url: GET_NAME_GIFT_CARD_PRODUCT_URL,
      }),
    staleTime: 10 * 60000,
  })

  const {
    data: dataPrice,
    isLoading: isLoadingPrice,
    refetch: refetchPrice,
  } = useQuery({
    queryKey: ['price-options', selecteProductsOption?.id],
    queryFn: () =>
      axiosGet({
        url: `${GIFT_CARD_PRODUCT_BUY_PRICE_URL}/${selecteProductsOption?.id}`,
      }),
    staleTime: 10 * 60000,
    enabled: false,
  })

  const handleOnChangeProductOption = (value: any): void => {
    setSelecteProductsOption(value)
    if (initialValues?.product?.id) {
      setInitialValues({
        ...initialValues,
        price: { price: '' },
      })
    }
  }

  useEffect(() => {
    setDataProductsOption([])
    if (dataProduct) {
      setDataProductsOption(dataProduct)
    }
  }, [dataProduct])

  useEffect(() => {
    setDataPriceOption([])
    if (dataPrice) {
      setDataPriceOption([dataPrice])
    }
  }, [dataPrice, selecteProductsOption])

  useEffect(() => {
    if (selecteProductsOption) {
      void refetchPrice()
    }
  }, [dataProduct, selecteProductsOption])

  useEffect(() => {
    if (initialValues?.product?.id) {
      setSelecteProductsOption(initialValues?.product)
    }
  }, [initialValues?.product])

  return {
    validationSchema,
    dataProductsOption,
    isLoadingProduct,
    handleOnChangeProductOption,
    dataPriceOption,
    isLoadingPrice,
  }
}
