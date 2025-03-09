'use client'

import { Loading, OstiganTab, React } from './imports'
import { useUserGenuineViewModel } from './viewModel'

const UserDetails = (): JSX.Element => {
  const {
    tabUserItems,
    tabLegalUserItems,
    tabUserPanelItems,
    tabLegalUserPanelItems,
    isLoading,
    isLegal,
  } = useUserGenuineViewModel()

  return (
    <>
      <OstiganTab
        tabItems={!isLegal ? tabUserItems : tabLegalUserItems}
        tabPanelItems={!isLegal ? tabUserPanelItems : tabLegalUserPanelItems}
        iconPosition="start"
        tabSx={{
          width: '50%',
        }}
      />
      <Loading isLoading={isLoading} />
    </>
  )
}
export default UserDetails
