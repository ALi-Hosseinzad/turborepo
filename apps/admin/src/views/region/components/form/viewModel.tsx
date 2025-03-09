import { JUST_ENGLISH_REGEX, useTranslations, yup } from '../../imports'

export const useRegionFormViewModel = (): any => {
  const t = useTranslations()

  const validationSchema = yup.object({
    name: yup.string().required(t('required')),
    currencyId: yup.object().required(t('required')),
    flag_image: yup.string().required(t('required')),
    symbol: yup.string().max(5, t('maxLength5')).required(t('required')),
    slug: yup
      .string()
      .required(t('required'))
      .matches(JUST_ENGLISH_REGEX, t('languageErrorEnglish')),
  })

  return {
    validationSchema,
  }
}
