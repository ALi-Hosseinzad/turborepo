import type { RootState } from '../../imports'
import {
  ORDER_URL,
  useAxiosMutation,
  useEffect,
  useLocale,
  useRouter,
  useSelector,
  useState,
  useTranslations,
  yup,
} from '../../imports'

export const usePreInvoiceViewModel = (selectedProduct) => {
  const t = useTranslations()
  const initialValues = { email: '', message: '', isGift: false }
  const { user } = useSelector((state: RootState) => state.persist)
  const { mutateAsync, isPending, isSuccess } = useAxiosMutation(
    ORDER_URL,
    'post',
  )
  const locale = useLocale()
  const router = useRouter()
  const [quantity, setQuantity] = useState({
    max: selectedProduct?.productQuantity,
    min: 1,
    current: 1,
  })

  const userInfo = {
    phone: user?.phone,
    email: user?.email,
  }
  useEffect(() => {
    setQuantity({
      ...quantity,
      max:
        selectedProduct?.productQuantity === 0
          ? 1
          : selectedProduct?.productQuantity,
      current: 1,
    })
  }, [selectedProduct.productQuantity])

  const validationSchema = yup.object({
    email: yup.string().when('isGift', ([value]) => {
      if (value == true) {
        return yup.string().email(t('emailError')).required(t('emptyError'))
      }
      return yup.string().email(t('emailError'))
    }),
    message: yup.string().when('isGift', ([value]) => {
      if (value == true) {
        return yup.string().required(t('emptyError'))
      }
      return yup.string()
    }),
  })

  const onSubmit = (values) => {
    const orderInfo = {
      orderable_type: 'GiftCardProduct',
      orderable_id: selectedProduct.id,
      count: quantity.current,
    }
    const body = values?.isGift
      ? {
          ...orderInfo,
          is_gift: 1,
          email: values.email,
          description: values.message,
        }
      : orderInfo

    mutateAsync(body).then((data) => {
      router.push(`/${locale}/checkout/${data?.data?.id}`)
    })
  }

  return {
    userInfo,
    initialValues,
    validationSchema,
    quantity,
    isPending,
    isSuccess,
    setQuantity,
    onSubmit,
  }
}
