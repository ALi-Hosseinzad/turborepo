import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import CurrencyCreate from 'views/currency/currencyCreate'
import type { PagePropsType } from 'types/common'

const AddCurrencyCreatePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <CurrencyCreate />
}

export default AddCurrencyCreatePage
