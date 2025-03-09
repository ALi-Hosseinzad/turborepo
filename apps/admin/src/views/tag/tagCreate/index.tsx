'use client'

import { TagForm, useTagCreateViewModel, useTranslations } from '../imports'

export const TagCreate = (): JSX.Element => {
  const t = useTranslations('')
  const { initialValues, handleAddNewProduct, isPending } =
    useTagCreateViewModel()

  return (
    <TagForm
      initialValues={initialValues}
      isLoading={isPending}
      disabled={isPending}
      titleHeader1={t('tagcreate')}
      onSubmit={handleAddNewProduct}
    />
  )
}
