import { handleLocalStorage, useTranslations, yup } from '../../imports'

export const usePageUrlFormViewModel = (): any => {
  const t = useTranslations()
  const enumsList = handleLocalStorage({
    type: 'getLocalStorage',
    key: 'enums',
  })
  const PageUrlPlatformTypesAmountType = enumsList?.Page_url?.platform_type

  const validationSchema = yup.object({
    name: yup.string().required(t('emptyError')),
    description: yup.string(),
    href: yup.string().required(t('emptyError')),
    slug: yup.string().required(t('emptyError')),
    type: yup.object().required(t('emptyError')),
  })

  return {
    validationSchema,
    PageUrlPlatformTypesAmountType,
  }
}
