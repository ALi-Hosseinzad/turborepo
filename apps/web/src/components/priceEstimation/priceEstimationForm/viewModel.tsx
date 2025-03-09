import type {
  FormikValuesPriceEstimationFormType,
  UsePriceEstimationFormViewMOdelType,
} from '../imports'
import {
  axiosGet,
  GIFTCARD_PACKAGE_URL,
  useEffect,
  useFormikContext,
  useQuery,
  useState,
} from '../imports'

export const usePriceEstimationFormViewMOdel =
  (): UsePriceEstimationFormViewMOdelType => {
    const { values } = useFormikContext<FormikValuesPriceEstimationFormType>()
    const [disabled, setDisabled] = useState(true)
    const [isLoadingPrice, setIsLoadingPrice] = useState(true)
    const [currency, setCurrency] = useState('')
    const [priceList, setPriceList] = useState([])

    const {
      data: dataRegion,
      isLoading: isLoadingRegion,
      isSuccess: isSuccessRegion,
    } = useQuery({
      queryKey: ['autoCompleteOptions', values?.productType?.id],
      queryFn: () =>
        axiosGet({
          url: `${GIFTCARD_PACKAGE_URL}/${values?.productType?.id}`,
          isAdmin: false,
        }),
      enabled: Boolean(values?.productType),
    })

    useEffect(() => {
      if (isSuccessRegion) {
        setDisabled(false)
      }
    }, [isSuccessRegion])

    useEffect(() => {
      setIsLoadingPrice(true)
      setPriceList([])
      if (dataRegion?.regions?.length > 0) {
        const filterRegion = dataRegion?.regions?.filter(
          (item) => item === values?.region,
        )[0]
        setPriceList(filterRegion?.gift_card_products)
        setCurrency(filterRegion?.currency?.name)
        setIsLoadingPrice(false)
      }
    }, [values?.region])

    return {
      isLoadingRegion,
      isLoadingPrice,
      dataRegion,
      disabled,
      priceList,
      currency,
    }
  }
