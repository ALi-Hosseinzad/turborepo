import { useWalletTabsViewModel, WalletTabsView } from '../imports'

const WalletTabs = () => {
  const { tabItems, tabPanelItems, step } = useWalletTabsViewModel()

  return (
    <WalletTabsView
      tabItems={tabItems}
      tabPanelItems={tabPanelItems}
      step={step}
    />
  )
}

export default WalletTabs
