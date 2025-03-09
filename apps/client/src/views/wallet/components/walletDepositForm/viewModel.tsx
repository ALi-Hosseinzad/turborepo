import {
  PAYMENT_PAY_URL,
  useAxiosMutation,
  useTranslations,
  yup,
} from '../../imports'

export const useWalletDepositFormViewModel = () => {
  const { mutateAsync, isPending } = useAxiosMutation(PAYMENT_PAY_URL, 'post')
  const t = useTranslations()
  const initialValues = {
    amount: 0,
    accept_law: false,
  }

  const handleSubmit = (values: any) => {
    const amount = values.amount
    const curValues = { ...values, driver: 'saman', device: 'site', amount }
    mutateAsync(curValues).then((res: any) => {
      window.location.href = `${process.env.BASE_URL}/v1/payment/redirect/${res.data.id}`
    })
  }

  const validationSchema = yup.object({
    amount: yup.string().typeError(t('mustBeNum')).required(t('required')),
    accept_law: yup
      .boolean()
      .oneOf([true], t('required'))
      .required(t('required')),
  })

  return {
    initialValues,
    handleSubmit,
    validationSchema,
    isPending,
  }
}
