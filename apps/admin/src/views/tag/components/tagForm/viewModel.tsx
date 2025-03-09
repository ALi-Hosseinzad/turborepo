import type { UseTagFormViewModelType } from '../../imports'
import {
  JUST_ENGLISH_REGEX,
  JUST_PERSIAN_REGEX,
  useTranslations,
  yup,
} from '../../imports'

export const useTagFormViewModel = (): UseTagFormViewModelType => {
  const t = useTranslations()
  const validationSchema = yup.object({
    name: yup
      .string()
      .matches(JUST_PERSIAN_REGEX, t('languageError'))
      .required(t('emptyError')),
    slug: yup
      .string()
      .matches(JUST_ENGLISH_REGEX, t('languageErrorEnglish'))
      .required(t('emptyError')),
  })

  return {
    validationSchema,
  }
}
