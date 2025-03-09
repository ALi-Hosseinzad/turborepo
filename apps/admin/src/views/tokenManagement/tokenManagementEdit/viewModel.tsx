import type { UseTokenManagementEditViewModelType } from '../imports'
import {
  axiosGet,
  axiosPut,
  GIFT_CARD_TOKEN_URL,
  showError,
  showSuccess,
  useEffect,
  useListViewModel,
  useMutation,
  useParams,
  useQuery,
  useState,
  useTranslations,
} from '../imports'

export const useTokenManagementEditViewModel =
  (): UseTokenManagementEditViewModelType => {
    const { id }: { id: string } = useParams()
    const t = useTranslations()
    const [initialValues, setInitialValues] = useState({
      product: {},
      price: { price: '' },
      token: '',
    })
    const { refetchList }: any = useListViewModel({
      url: GIFT_CARD_TOKEN_URL,
      queryKey: 'token-management-list',
    })

    const { data, isLoading: isLoadingGetData } = useQuery({
      queryKey: ['token-options', id],
      queryFn: () =>
        axiosGet({
          url: `${GIFT_CARD_TOKEN_URL}/${id}`,
        }),
      enabled: id != undefined,
      staleTime: 10 * 60000,
    })

    useEffect(() => {
      if (data) {
        const { giftCardProduct, giftCardProductBuyPrice, token } = data
        const initialProduct = {
          product: giftCardProduct,
          price: giftCardProductBuyPrice,
          token,
        }
        setInitialValues(initialProduct)
      }
    }, [data])

    const editToken = async (params): Promise<void> => {
      await axiosPut({ url: `${GIFT_CARD_TOKEN_URL}/${id}`, params })
    }
    const { mutateAsync, isPending: isPendingToken } = useMutation({
      mutationFn: (e) => editToken(e),
    })
    const handleEditToken = async (values): Promise<void> => {
      const body = {
        gift_card_product_buy_price_id: values?.product?.id,
        gift_card_product_id: values?.price?.gift_card_product_id,
        token: values?.token,
      }

      await mutateAsync(body as any)
        .then(() => {
          void refetchList()
          showSuccess(t('editedSuccessfully'))
        })
        .catch((error) => {
          showError(error.message)
        })
    }

    return {
      initialValues,
      setInitialValues,
      isLoadingGetData,
      handleEditToken,
      isPendingToken,
    }
  }
