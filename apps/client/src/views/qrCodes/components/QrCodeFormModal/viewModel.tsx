import { useTranslations, yup } from '../../imports'

export const useQrCodeFormModalViewModel = () => {
  const t = useTranslations()
  const validationSchema = yup.object({
    title: yup.string().required(t('emptyError')),
    price: yup.string().required(t('emptyError')),
  })
  return { validationSchema }
}
