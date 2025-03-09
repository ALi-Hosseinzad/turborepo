import type { UsePriceEstimationViewMOdelType } from './imports'
import { axiosGet, GIFTCARD_PACKAGE_ALL_URL, useQuery, yup } from './imports'

export const usePriceEstimationViewMOdel = (
  categoryId,
): UsePriceEstimationViewMOdelType => {
  const initialValues = {
    productType: '',
    region: '',
    price: '',
  }

  const url = categoryId
    ? `${GIFTCARD_PACKAGE_ALL_URL}?category_id=${categoryId}`
    : `${GIFTCARD_PACKAGE_ALL_URL}?is_credit_card=false`
  const validationSchema = yup.object({
    productType: yup.object().required('empty'),
    region: yup.object().required('empty'),
    price: yup.object().required('empty'),
  })

  const { isLoading, data } = useQuery({
    queryKey: ['categoryOptions'],
    queryFn: () => axiosGet({ url }),
    staleTime: 10 * 6000,
  })

  const onSubmit = (values): any => {
    return <p>{values}</p>
  }

  return {
    initialValues,
    validationSchema,
    onSubmit,
    data,
    isLoading,
  }
}
