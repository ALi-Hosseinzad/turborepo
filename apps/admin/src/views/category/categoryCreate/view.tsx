'use client'

import { CategoryForm, useTranslations } from '../imports'

const CategoryCreateView = (props: any): JSX.Element => {
  const { initialValues, onSubmit, isLoadingSubmit } = props
  const t = useTranslations()

  return (
    <CategoryForm
      initialValues={initialValues}
      isLoading={isLoadingSubmit}
      titleHeader1={t('addCategory')}
      titleHeader2={t('categoryInfo')}
      onSubmit={onSubmit}
    />
  )
}

export default CategoryCreateView
