import { useQueryClient } from '@tanstack/react-query'
import {
  CHECKOUT_DISCOUNT_URL,
  CHECKOUT_UNDO_DISCOUNT_URL,
  type DiscountProps,
  type OrderDataType,
  useAxiosMutation,
  useState,
} from '../../import'

export const useDiscountViewModel = ({ orderId }: DiscountProps) => {
  const queryClient = useQueryClient()
  const orderData = queryClient.getQueryData<OrderDataType>([
    `ORDER_CHECKOUT-${orderId}`,
  ])
  const [hasDiscount, setHasDiscount] = useState(
    Boolean(orderData?.discounts?.[0]?.code),
  )
  const initialValues = {
    discountCode: orderData?.discounts?.[0]?.code ?? '',
  }
  const mutationUrl = hasDiscount
    ? CHECKOUT_UNDO_DISCOUNT_URL
    : CHECKOUT_DISCOUNT_URL
  const { mutateAsync, isPending, isSuccess } = useAxiosMutation(
    mutationUrl,
    'post',
  )
  const onSubmit = (values) => {
    const body = {
      discount_code: values.discountCode,
      order_id: orderId,
    }
    mutateAsync(body).then((data) => {
      setHasDiscount(!hasDiscount)
      queryClient.setQueryData([`ORDER_CHECKOUT-${orderId}`], {
        ...orderData,
        ...data.data,
      })
    })
  }
  const orderStatus = orderData?.status

  return {
    orderStatus,
    onSubmit,
    initialValues,
    isPending,
    isSuccess,
    hasDiscount,
  }
}
