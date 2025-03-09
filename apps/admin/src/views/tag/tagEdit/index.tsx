'use client'

import {
  Loading,
  TagForm,
  TagHistory,
  useTagEditViewModel,
  useTranslations,
} from '../imports'

export const TagEdit = (): JSX.Element => {
  const t = useTranslations('')
  const {
    initialValues,
    handleEditNewProduct,
    isPendingPostData,
    isLoadingGetData,
  } = useTagEditViewModel()

  return (
    <>
      <div className="flex flex-col gap-16">
        <TagForm
          initialValues={initialValues}
          isLoading={isPendingPostData}
          disabled={isPendingPostData}
          titleHeader1={t('tagEdit')}
          onSubmit={handleEditNewProduct}
        />
        <TagHistory />
      </div>
      <Loading isLoading={Boolean(isLoadingGetData)} />
    </>
  )
}
