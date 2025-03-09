import { useTranslations, yup } from '../../imports'

export const useUserGroupFormViewModel = (): any => {
  const t = useTranslations()

  const validationSchema = yup.object({
    name: yup.string().required(t('emptyError')),
    slug: yup.string().required(t('emptyError')),
  })

  return {
    validationSchema,
  }
}
