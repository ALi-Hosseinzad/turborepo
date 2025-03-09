import type { UseTokenManagementCreateViewModelType } from '../imports'
import {
  axiosPost,
  GIFT_CARD_TOKEN_URL,
  showError,
  showSuccess,
  useListViewModel,
  useMutation,
  useTranslations,
} from '../imports'

export const useTokenManagementCreateViewModel =
  (): UseTokenManagementCreateViewModelType => {
    const { refetchList }: any = useListViewModel({
      url: GIFT_CARD_TOKEN_URL,
      queryKey: 'token-management-list',
    })
    const t = useTranslations()
    const initialValues = {
      product: '',
      price: '',
      token: '',
    }

    const createToken = async (body: any): Promise<void> => {
      await axiosPost({ url: GIFT_CARD_TOKEN_URL, body })
    }
    const { mutateAsync, isPending: isPendingToken } = useMutation({
      mutationFn: (e) => createToken(e),
    })
    const handleAddNewToken = async (values, formikProps): Promise<void> => {
      const body = {
        gift_card_product_buy_price_id: values?.product?.id,
        gift_card_product_id: values?.price?.gift_card_product_id,
        token: values?.token,
      }

      await mutateAsync(body as any)
        .then(async () => {
          formikProps.resetForm()
          await refetchList()
          showSuccess(t('editedSuccessfully'))
        })
        .catch((error) => {
          showError(error.message)
        })
    }

    return {
      initialValues,
      handleAddNewToken,
      isPendingToken,
    }
  }
