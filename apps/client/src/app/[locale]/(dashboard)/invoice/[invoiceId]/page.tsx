import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import Invoice from '@/views/invoice/view'

const InvoicePage: React.FC<PagePropsType> = ({ params }) => {
  const { locale, invoiceId } = params
  unstable(locale)

  return <Invoice invoiceId={invoiceId} />
}

export default InvoicePage
