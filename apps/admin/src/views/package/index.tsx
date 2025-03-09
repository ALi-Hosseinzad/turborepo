'use client'

import {
  ADD,
  GIFT_CARD_PACKAGE_URL,
  GIFTCARDPACKAGE_LIST_QUERY,
  List,
  React,
  usePackageListViewModel,
  useTranslations,
} from './imports'

const Packages = (): JSX.Element => {
  const t = useTranslations()
  const { bodyInfo, headInfo } = usePackageListViewModel()

  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={GIFT_CARD_PACKAGE_URL}
      queryKey={GIFTCARDPACKAGE_LIST_QUERY}
      tableUrlDeleteRequest={`admin${GIFT_CARD_PACKAGE_URL}`}
      tableEditNavigationLink="package"
      tableAddNavigationLink={`package/${ADD}`}
      tableAddBtnText={t('addNewPackage')}
      tableLabel={t('package')}
    />
  )
}

export default Packages
