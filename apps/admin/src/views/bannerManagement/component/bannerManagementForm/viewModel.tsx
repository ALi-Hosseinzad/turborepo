import {
  handleLocalStorage,
  JUST_ENGLISH_REGEX,
  useTranslations,
  yup,
} from '../../imports'

export const useBannerManagementFormViewModel = (): any => {
  const t = useTranslations()
  let enumsList: any = null
  enumsList = handleLocalStorage({
    type: 'getLocalStorage',
    key: 'enums',
  })

  const bannerPlatformType = enumsList?.Banner?.banner_platform_type

  const bannerStatusformTypes = enumsList?.Banner?.banner_status

  const bannerTypeformTypes = enumsList?.Banner?.banner_type

  const fileTypeformTypes = enumsList?.Banner?.file_type

  const validationSchema = yup.object({
    platformType: yup.object().required(t('emptyError')),
    bannerType: yup.object().required(t('emptyError')),
    status: yup.object().required(t('emptyError')),
    slug: yup
      .string()
      .required(t('emptyError'))
      .matches(JUST_ENGLISH_REGEX, t('languageErrorEnglish')),
    pageUrlId: yup.object().required(t('emptyError')),
  })

  return {
    validationSchema,
    bannerPlatformType,
    bannerStatusformTypes,
    bannerTypeformTypes,
    fileTypeformTypes,
  }
}
