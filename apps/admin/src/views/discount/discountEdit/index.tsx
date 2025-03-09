'use client'

import {
  DiscountFormView,
  useDiscountEditViewModel,
  useTranslations,
} from '../imports'

const DiscountEdit = (): JSX.Element => {
  const { initialValues, isPendingSubmitEdit, onSubmit, isLoadingEditData } =
    useDiscountEditViewModel()
  const t = useTranslations()
  return (
    <DiscountFormView
      isLoading={isPendingSubmitEdit || isLoadingEditData}
      initialValues={initialValues}
      titleHeader1={`${t('edit')} ${t('discount')}`}
      onSubmit={onSubmit}
    />
  )
}

export default DiscountEdit
