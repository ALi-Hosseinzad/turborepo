import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { GiftCard } from '@/views/giftCard'

const GiftCardPage = ({ params: { locale } }): React.ReactElement => {
  unstable(locale)

  return <GiftCard />
}

export default GiftCardPage
