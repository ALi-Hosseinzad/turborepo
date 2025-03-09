'use client'

import { BANNERIMAGE_LIST_QUERY } from 'constants/queryKeys'
import {
  ADD,
  BANNER_IMAGE_URL,
  List,
  useBannerImageListViewModel,
  useTranslations,
} from './imports'

const BannerImages = (): JSX.Element => {
  const { headInfo, bodyInfo } = useBannerImageListViewModel()
  const t = useTranslations()

  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={BANNER_IMAGE_URL}
      queryKey={BANNERIMAGE_LIST_QUERY}
      tableUrlDeleteRequest="admin/banner-image"
      tableEditNavigationLink="bannerImage"
      tableAddNavigationLink={`bannerImage/${ADD}`}
      tableAddBtnText={t('addBannerImage')}
      tableLabel={t('banner')}
    />
  )
}

export default BannerImages
