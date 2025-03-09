import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { GiftCardDetails } from '@/views/giftCard/giftCardDetaile'

const GiftCardDetailePage = ({
  params: { locale, id },
}): React.ReactElement => {
  unstable(locale)

  return <GiftCardDetails productId={id} />
}

export default GiftCardDetailePage
