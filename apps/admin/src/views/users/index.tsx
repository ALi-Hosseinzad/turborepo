'use client'

import { OstiganTab, useUserListViewModel } from './imports'

const Users = (): JSX.Element => {
  const { tabItems, tabPanelItems } = useUserListViewModel()

  return (
    <>
      <OstiganTab
        tabItems={tabItems}
        tabPanelItems={tabPanelItems}
        iconPosition="start"
        tabSx={{
          width: '50%',
        }}
      />
      {/* <Loading isLoading={isLoading} /> */}
    </>
  )
}

export default Users
