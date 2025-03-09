'use client'

import {
  handleLocalStorage,
  JUST_ENGLISH_REGEX,
  useTranslations,
  yup,
} from '../../imports'

export const useCategoryFormViewModel = (): any => {
  const t = useTranslations()

  const enumsList = handleLocalStorage({
    type: 'getLocalStorage',
    key: 'enums',
  })

  const categoryTypesList = enumsList?.Category?.category_type

  const validationSchema = yup.object({
    name: yup.string().required(t('emptyError')),
    description: yup.string().required(t('emptyError')),
    slug: yup
      .string()
      .matches(JUST_ENGLISH_REGEX, t('languageErrorEnglish'))
      .required(t('emptyError')),
    type: yup.object().required(t('emptyError')),
    category_image: yup.string().required(t('emptyError')),
  })

  return {
    categoryTypesList,
    validationSchema,
  }
}
