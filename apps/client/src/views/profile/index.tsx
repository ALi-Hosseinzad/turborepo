'use client'

import { BreadCrumbs, OstiganTab, UserPersist } from '../authorization/imports'
import {
  React,
  useUserGenuineViewModel,
  useUserLegalViewModel,
} from './imports'

export const ProfileUser = () => {
  const { user } = UserPersist()
  const { tabUserItems, tabUserPanelItems } = useUserGenuineViewModel()
  const { tabLegalUserItems, tabLegalUserPanelItems, getBreadCrumbs } =
    useUserLegalViewModel()
  const breadCrumbs = getBreadCrumbs()
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <OstiganTab
        tabItems={user?.is_legal ? tabLegalUserItems : tabUserItems}
        tabPanelItems={
          user?.is_legal ? tabLegalUserPanelItems : tabUserPanelItems
        }
        iconPosition="start"
      />
    </>
  )
}
