import { handleLocalStorage, useTranslations, yup } from '../../imports'

export const useDiscountFormViewModel = (): any => {
  const t = useTranslations()
  const enumsList = handleLocalStorage({
    type: 'getLocalStorage',
    key: 'enums',
  })
  const DiscountTypesAmountType = enumsList?.Discount?.amount_type
  const DiscountTypesType = enumsList?.Discount?.discount_type
  const DiscountTypesWhatFor = enumsList?.Discount?.discount_what_for

  const DiscountTypeStatus = enumsList?.Discount?.Discount_Status

  const DiscountTypeSendNotify = enumsList?.Device?.device_status

  const validationSchema = yup.object({
    code: yup.string().required(t('emptyError')),
    amount: yup.string().required(t('emptyError')),
    min: yup
      .number()
      .typeError(t('mustNumber'))
      .integer(t('mustNumber'))
      .required(t('emptyError')),

    max: yup
      .number()
      .typeError(t('mustNumber'))
      .integer(t('mustNumber'))
      .required(t('emptyError'))
      .test(
        'maxGreaterThanMin',
        t('maxGreaterThanMinError'),
        function maxGreaterThanMin(value) {
          const { min } = this.parent
          return value >= min
        },
      ),
    amountType: yup.string().required(t('emptyError')),
    expireDay: yup
      .number()
      .typeError(t('mustNumber'))
      .required(t('emptyError'))
      .integer(t('mustNumber')),
    userUsed: yup
      .number()
      .typeError(t('mustNumber'))
      .integer(t('mustNumber'))
      .required(t('emptyError')),
    type: yup.object().required(t('emptyError')),
    whatFor: yup.object().required(t('emptyError')),
    serviceIds: yup.array().when(['whatFor'], ([value]): any => {
      if (value?.value == 'service') {
        return yup.array().min(1, t('selectOneOptionError'))
      }
      return yup.array()
    }),
    giftCardProductIds: yup.array().when(['whatFor'], ([value]): any => {
      if (value?.value == 'gift_card_product') {
        return yup.array().min(1, t('selectOneOptionError'))
      }
      return yup.array()
    }),
    giftCardPackageIds: yup.array().when(['whatFor'], ([value]): any => {
      if (value?.value == 'gift_card_package') {
        return yup.array().min(1, t('selectOneOptionError'))
      }
      return yup.array()
    }),
    status: yup.object().required(t('emptyError')),
    sendNotify: yup.object(),
    userIds: yup.string().when(['type'], ([value]): any => {
      if (value?.value == 'specific') {
        return yup.string().required(t('emptyError'))
      }
      return yup.string()
    }),
  })

  return {
    validationSchema,
    DiscountTypesAmountType,
    DiscountTypesType,
    DiscountTypesWhatFor,
    DiscountTypeStatus,
    DiscountTypeSendNotify,
  }
}
