'use client'

import {
  List,
  REGION_URL,
  useRegionViewModel,
  useTranslations,
} from './imports'

const Regions = (): JSX.Element => {
  const { bodyInfo, headInfo, isLoadingChangeStatus } = useRegionViewModel()
  const t = useTranslations()

  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={REGION_URL}
      isLoadingParent={isLoadingChangeStatus}
      queryKey="region-list"
      tableEditNavigationLink="region"
      tableAddNavigationLink="region/add"
      tableAddBtnText={t('createNewRegion')}
    />
  )
}

export default Regions
