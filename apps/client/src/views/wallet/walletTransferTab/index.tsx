import WalletTabLayout from '../components/walletTabLayout'
import WalletTransferBlock from '../components/walletTransferBlock'
import { WalletList } from '../imports'

const WalletTransferTab = () => {
  return (
    <WalletTabLayout
      children1={<WalletList type="transfer" tableTitle="transferList" />}
      children2={<WalletTransferBlock />}
    />
  )
}

export default WalletTransferTab
