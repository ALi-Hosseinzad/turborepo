'use client'

import {
  BannerManagementHistoryView,
  useBannerManagementHistoryViewModel,
} from '../../imports'

export const BannerManagementHistory = (): JSX.Element => {
  const { headInfo, bodyInfo, isLoading } =
    useBannerManagementHistoryViewModel()
  return (
    <BannerManagementHistoryView
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      isLoading={isLoading}
    />
  )
}
