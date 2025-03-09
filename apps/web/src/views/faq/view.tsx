'use client'

import { OstiganTab, React } from './imports'

const FaqView = (props: any): JSX.Element => {
  const { selectedStyles, tabButtonsStyles, tabItems, tabPanelItems } = props

  return (
    <>
      {!tabPanelItems || (
        <OstiganTab
          noBorderDivider
          marginTopTabPanel="10px"
          indicatorColor="transparent"
          selectedStyles={selectedStyles}
          tabButtonsStyles={tabButtonsStyles}
          tabItems={tabItems}
          tabPanelItems={tabPanelItems}
          tabSx={{
            width: '50%',
          }}
        />
      )}
    </>
  )
}

export default FaqView
