import { UseAccess } from '@/hooks/useAccess'
import {
  Balance,
  useState,
  useTranslations,
  WalletDepositTab,
  WalletTransferTab,
} from '../imports'
import WalletWithdrawTab from '../walletWithdrawTab'

export const useWalletTabsViewModel = () => {
  const t = useTranslations()
  const [step, setStep] = useState(0)
  const { permissions } = UseAccess()

  const tabItems = [
    { key: 1, text: t('wallet') },
    {
      key: 2,
      text: t('addBalance'),
      disabled: !permissions?.walletDepositAccess?.value,
    },
    {
      key: 3,
      text: t('cashout'),
      disabled: !permissions?.walletWithdrawAccess?.value,
    },
    {
      key: 4,
      text: t('transfer'),
      disabled: !permissions?.walletTransferAccess?.value,
    },
  ]

  const tabPanelItems = [
    <Balance setStep={setStep} />,
    <WalletDepositTab />,
    <WalletWithdrawTab />,
    <WalletTransferTab />,
  ]

  return { tabItems, tabPanelItems, step }
}
