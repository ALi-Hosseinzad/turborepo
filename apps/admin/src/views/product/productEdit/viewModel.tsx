import type { UseProductEditViewModelType } from '../imports'
import {
  axiosGet,
  axiosPut,
  GIFT_CARD_PRODUCT_URL,
  showSuccess,
  useEffect,
  useMutation,
  useParams,
  useQuery,
  useState,
  useTranslations,
} from '../imports'

export const useProductEditViewModel = (): UseProductEditViewModelType => {
  const { id }: { id: string } = useParams()
  const t = useTranslations()

  const [initialValues, setInitialValues] = useState({
    package: {},
    region: '',
    status: {
      value: '',
      label: '',
    },
    price: '',
    discount: '',
    discountType: '',
    quantity: '',
    slug: '',
    sku: '',
  })

  const { data, isLoading: isLoadingGetData } = useQuery({
    queryKey: ['permissionOptions-AccessType', id],
    queryFn: () =>
      axiosGet({
        url: `${GIFT_CARD_PRODUCT_URL}/${id}`,
      }),
    enabled: id != undefined,
    staleTime: 10 * 60000,
  })

  useEffect(() => {
    if (data) {
      const {
        product,
        region,
        status,
        status_label: statusLabel,
        price,
        amount: discount,
        discount_type: discountType,
        quantity,
        slug,
        sku,
      } = data

      const initialProduct = {
        package: {
          title: product?.name,
        },
        region,
        status: {
          value: status,
          label: statusLabel,
        },
        price,
        discount,
        discountType,
        quantity,
        slug,
        sku,
      }

      setInitialValues(initialProduct)
    }
  }, [data])

  const editNewRole = async (params: any): Promise<any> => {
    await axiosPut({ url: `${GIFT_CARD_PRODUCT_URL}/${id}`, params })
  }
  const { mutateAsync, isPending: isPendingPostData } = useMutation({
    mutationFn: (e) => editNewRole(e),
    onSuccess() {
      showSuccess(`${t('product')} ${t('editedSuccessfully')} `)
    },
  })
  const handleEditNewProduct = async (
    values: Record<string, any>,
  ): Promise<any> => {
    const params = {
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
    for (const key in params) {
      if (params[key] == '' || params[key] == null) {
        delete params[key]
      }
    }
    const mainParams = params
    await mutateAsync(mainParams as any)
  }
  return {
    initialValues,
    handleEditNewProduct,
    isPendingPostData,
    isLoadingGetData,
  }
}
