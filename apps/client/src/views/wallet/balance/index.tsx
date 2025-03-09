import { BalanceView, useBalanceViewModel } from '../imports'

export const Balance = ({ setStep }) => {
  const { walletInfo, walletTabs } = useBalanceViewModel()
  return (
    <BalanceView
      walletTabs={walletTabs}
      walletInfo={walletInfo}
      setStep={setStep}
    />
  )
}
