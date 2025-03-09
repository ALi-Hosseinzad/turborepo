import {
  PAYMENT_PAY_URL,
  useAxiosMutation,
  UseTomanToRial,
  useTranslations,
  yup,
} from '../../import'

export const useAddBalanceModalViewModel = (initialValues) => {
  const {
    mutateAsync,
    isPending: isAddBalanceLoading,
    isSuccess: isAddBalanceSuccess,
  } = useAxiosMutation(PAYMENT_PAY_URL, 'post')
  const t = useTranslations()

  const handleSubmit = (values: any) => {
    const amount = Number(values.amount)
    const curValues = { ...values, driver: 'saman', device: 'site', amount }
    mutateAsync(curValues).then((res: any) => {
      window.location.href = `${process.env.BASE_URL}/v1/payment/redirect/${res.data.id}`
    })
  }

  const validationSchema = yup.object({
    amount: yup
      .number()
      .typeError(t('mustBeNum'))
      .min(
        initialValues.amount,
        `${t('amountMustBeAtLeast')} ${UseTomanToRial(initialValues.amount)} ${t('rial')}`,
      )
      .required(t('required')),
    accept_law: yup
      .boolean()
      .oneOf([true], t('required'))
      .required(t('required')),
  })

  return {
    isAddBalanceLoading,
    isAddBalanceSuccess,
    handleSubmit,
    validationSchema,
  }
}
