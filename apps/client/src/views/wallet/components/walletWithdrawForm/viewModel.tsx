import {
  BANK_ACCOUNT_INFO_URL,
  showSuccess,
  useAxiosMutation,
  useAxiosQuery,
  useTranslations,
  WALLET_WITHDRAW_URL,
  yup,
} from '../../imports'

export const useWalletWithdrawFormViewModel = (): any => {
  const t = useTranslations()
  const { data, isLoading } = useAxiosQuery({
    url: BANK_ACCOUNT_INFO_URL,
    queryKey: ['bank-account'],
  })
  const { mutateAsync, isPending } = useAxiosMutation(
    WALLET_WITHDRAW_URL,
    'post',
  )

  const initialValues = {
    bank_account_id: '',
    amount: '',
  }

  const validationSchema = yup.object({
    bank_account_id: yup.object().required(t('required')),
  })

  const handleSubmit = (values: any) => {
    const body = { ...values, bank_account_id: values.bank_account_id.id }
    mutateAsync(body).then(() => {
      showSuccess(t('withdrawSuccessfully'))
    })
  }

  return {
    initialValues,
    isPending,
    validationSchema,
    handleSubmit,
    isLoading,
    selectOptions: data?.data,
  }
}
