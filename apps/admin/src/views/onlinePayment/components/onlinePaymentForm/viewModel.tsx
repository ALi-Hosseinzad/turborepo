import {
  type UseOnlinePaymentFormViewModelType,
  useState,
  useTranslations,
  yup,
} from '../../imports'

export const useOnlinePaymentFormViewModel =
  (): UseOnlinePaymentFormViewModelType => {
    const t = useTranslations()
    const [disablePrice, setDisablePrice] = useState(false)
    const validationSchema = yup.object({
      title: yup.string().required(t('emptyError')),
      image: yup.string().required(t('emptyError')),
      min_price: yup
        .number()
        .nullable()
        .typeError(t('numberValidation'))
        .when(['subscription_ids'], ([value]: any) => {
          if (value.length) {
            return yup.number().nullable().typeError(t('numberValidation'))
          }
          return yup
            .number()
            .nullable()
            .typeError(t('numberValidation'))
            .required(t('emptyError'))
        }),
      max_price: yup
        .number()
        .nullable()
        .typeError(t('numberValidation'))
        .when(
          ['min_price', 'subscription_ids'],
          ([price, subscription]): any => {
            if (subscription.length) {
              return yup.number().nullable().typeError(t('numberValidation'))
            }
            if (price) {
              return yup
                .number()
                .nullable()
                .typeError(t('numberValidation'))
                .min(price, t('maxMoreThanMinPrice'))
                .required(t('emptyError'))
            }
            return yup
              .number()
              .nullable()
              .typeError(t('numberValidation'))
              .required(t('emptyError'))
          },
        ),
      description: yup.string().required(t('emptyError')),
      region_ids: yup.array().min(1, t('emptyError')),
      wage_id: yup.object().required(t('emptyError')),
      category_ids: yup.array().min(1, t('emptyError')),
      // subscription_ids: yup.array().min(1, t('emptyError')),
      tag_ids: yup.array().min(1, t('emptyError')),
      form_id: yup.object().required(t('emptyError')),
      sku: yup.string().required(t('emptyError')),
      slug: yup.string().required(t('emptyError')),
    })

    const handleDisablePrice = (value) => {
      setDisablePrice(false)
      if (value.length) {
        setDisablePrice(true)
      }
    }
    return { validationSchema, handleDisablePrice, disablePrice }
  }
