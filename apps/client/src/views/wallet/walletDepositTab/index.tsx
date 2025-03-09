import WalletTabLayout from '../components/walletTabLayout'
import { WalletFormAddBalance, WalletList } from '../imports'

const WalletDepositTab = () => {
  return (
    <WalletTabLayout
      children1={<WalletList type="payment" tableTitle="depositList" />}
      children2={<WalletFormAddBalance />}
    />
  )
}

export default WalletDepositTab
