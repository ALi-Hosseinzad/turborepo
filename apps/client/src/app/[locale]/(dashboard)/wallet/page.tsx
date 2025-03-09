import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import Wallet from '@/views/wallet'

const WalletPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)
  return <Wallet />
}

export default WalletPage
