import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import CategoryCreate from 'views/category/categoryCreate'
import type { PagePropsType } from 'types/common'

const AddCategoryPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <CategoryCreate />
}
export default AddCategoryPage
