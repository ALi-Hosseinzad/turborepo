'use client'

import { FaqView, React, useFaqViewModel } from './imports'

const Faq = (): JSX.Element => {
  const { selectedStyles, tabButtonsStyles, tabItems, tabPanelItems } =
    useFaqViewModel()

  return (
    <FaqView
      selectedStyles={selectedStyles}
      tabButtonsStyles={tabButtonsStyles}
      tabItems={tabItems}
      tabPanelItems={tabPanelItems}
    />
  )
}

export default Faq
