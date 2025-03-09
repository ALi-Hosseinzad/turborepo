'use client'

import {
  CATEGORY_LIST_QUERY,
  CATEGORY_URL,
  List,
  useCategoryListViewModel,
  useTranslations,
} from './imports'

const Categories = (): JSX.Element => {
  const t = useTranslations()
  const { headInfo, bodyInfo }: any = useCategoryListViewModel()

  return (
    <>
      {bodyInfo?.length === 0 ? (
        <div>{t('dontHaveData')}</div>
      ) : (
        <List
          bodyInfo={bodyInfo}
          headInfo={headInfo}
          url={CATEGORY_URL}
          queryKey={CATEGORY_LIST_QUERY}
          tableUrlDeleteRequest={`admin${CATEGORY_URL}`}
          tableEditNavigationLink="category"
          tableAddNavigationLink="category/add"
          tableAddBtnText={t('addCategory')}
          tableLabel={t('category')}
        />
      )}
    </>
  )
}

export default Categories
