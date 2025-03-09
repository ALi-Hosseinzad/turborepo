import { useTranslations, yup } from '../../imports'

export const useSubjectFormViewModel = (): any => {
  const t = useTranslations()

  const validationSchema = yup.object({
    title: yup.string().required(t('emptyError')),
    icon: yup.string().required(t('emptyError')),
    role_ids: yup.array().min(1, t('emptyError')),
  })
  return { validationSchema }
}
