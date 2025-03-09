import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import CurrencyEdit from 'views/currency/currencyEdit'
import type { PagePropsType } from 'types/common'

const EditCurrencyPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <CurrencyEdit />
}

export default EditCurrencyPage
