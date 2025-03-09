import WalletTabLayout from '../components/walletTabLayout'
import WalletWithdrawForm from '../components/walletWithdrawForm'
import { WalletList } from '../imports'

const WalletWithdrawTab = () => {
  return (
    <WalletTabLayout
      children1={<WalletList type="withdrawal" tableTitle="withdrawList" />}
      children2={<WalletWithdrawForm />}
    />
  )
}

export default WalletWithdrawTab
