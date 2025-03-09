import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import ThankYou from '@/views/thankYou'

const ThankyouChargePage: React.FC<PagePropsType> = ({
  params,
}): React.ReactElement => {
  const { locale } = params
  unstable(locale)

  return <ThankYou />
}

export default ThankyouChargePage
