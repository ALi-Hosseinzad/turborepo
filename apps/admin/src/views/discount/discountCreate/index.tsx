'use client'

import {
  DiscountFormView,
  useDiscountCreateViewModel,
  useTranslations,
} from '../imports'

const DiscountCreate = (): JSX.Element => {
  const { initialValues, isLoading, onSubmit } = useDiscountCreateViewModel()
  const t = useTranslations()

  return (
    <DiscountFormView
      isLoading={isLoading}
      initialValues={initialValues}
      titleHeader1={`${t('add')} ${t('discount')}`}
      onSubmit={onSubmit}
    />
  )
}

export default DiscountCreate
