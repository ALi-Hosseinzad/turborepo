'use client'

import {
  ADD,
  ADMIN,
  List,
  TAG,
  TAG_URL,
  useTagListViewModel,
  useTranslations,
} from './imports'

const Tag = (): JSX.Element => {
  const { headInfo, bodyInfo } = useTagListViewModel()
  const t = useTranslations()

  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={TAG_URL}
      tableUrlDeleteRequest={`${ADMIN}${TAG_URL}`}
      tableEditNavigationLink={TAG}
      tableAddNavigationLink={`${TAG}/${ADD}`}
      queryKey="tag-list"
      tableAddBtnText={t('addNewTag')}
      tableLabel={t('tag')}
    />
  )
}

export default Tag
