import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import DiscountEdit from 'views/discount/discountEdit'
import type { PagePropsType } from 'types/common'

const EditDiscountPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <DiscountEdit />
}

export default EditDiscountPage
