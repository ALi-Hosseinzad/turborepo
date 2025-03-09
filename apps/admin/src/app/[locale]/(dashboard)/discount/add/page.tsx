import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import DiscountCreate from 'views/discount/discountCreate'
import type { PagePropsType } from 'types/common'

const AddDiscountPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <DiscountCreate />
}

export default AddDiscountPage
