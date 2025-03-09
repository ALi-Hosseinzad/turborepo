import { useTranslations, yup } from '../../imports'

export const useCurrencyFormViewModel = (): any => {
  const t = useTranslations()

  const validationSchema = yup.object({
    name: yup.string().required(t('emptyError')),
    symbol: yup.string().required(t('emptyError')),
    status: yup.string().required(t('emptyError')),
    exchange_price: yup
      .number()
      .typeError(t('mustNumber'))
      .integer(t('mustNumber'))
      .required(t('emptyError')),
  })

  return { validationSchema }
}
