import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import CategoryEdit from 'views/category/categoryEdit'
import type { PagePropsType } from 'types/common'

const AddCategoryPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <CategoryEdit />
}
export default AddCategoryPage
