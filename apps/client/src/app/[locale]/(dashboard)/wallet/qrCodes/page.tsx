import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import { QrCodes } from '@/views/qrCodes'

const QrCodesPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)
  return <QrCodes />
}

export default QrCodesPage
