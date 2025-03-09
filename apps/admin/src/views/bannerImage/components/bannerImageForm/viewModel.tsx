import { WEBSITE_REGEX } from 'constants/regex'
import { useTranslations, yup } from '../../imports'

export const useBannerImageFormViewModel = (): any => {
  const t = useTranslations()

  const validationSchema = yup.object({
    priority: yup.number(),
    file: yup.string().required(t('required')),
    file_type: yup.object().required(t('required')),
    banner_id: yup.object().required(t('required')),
    relation_type: yup.string().required(t('required')),
    href: yup.string().when('relation_type', ([value]) => {
      if (value === 'link') {
        return yup.string().matches(WEBSITE_REGEX).required(t('required'))
      }
      return yup.string()
    }),
    time: yup
      .number()
      .typeError(t('mustNumber'))
      .min(1, t('notLessThanOne'))
      .max(10, t('notMoreThanOne')),
    service_id: yup
      .object()
      .when(['relation_type'], ([value], data, { context }): any => {
        if (value === 'entity') {
          if (context.gift_card_package_id) {
            return yup.object()
          }
          return yup.object().required(t('required'))
        }
      }),
    gift_card_package_id: yup
      .object()
      .when(['relation_type'], ([value], data, { context }): any => {
        if (value === 'entity') {
          if (context.service_id) {
            return yup.object()
          }
          return yup.object().required(t('required'))
        }
      }),
  })

  const onChageRelationType = (value, formikProps): any => {
    const touchedField = formikProps.touched
    if (value === 'entity') {
      formikProps.setValues((values) => {
        delete values?.href
        return { ...values }
      })
      formikProps.setTouched({
        ...touchedField,
        gift_card_package_id: true,
        service_id: true,
      })
    }
    if (value === 'link') {
      formikProps.setValues((values) => {
        delete values?.service_id
        delete values?.gift_card_package_id
        return { ...values }
      })
      formikProps.setTouched({
        ...touchedField,
        href: true,
      })
    }
  }

  return { validationSchema, onChageRelationType }
}
