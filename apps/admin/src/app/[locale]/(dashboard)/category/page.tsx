import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Categories from 'views/category'
import type { PagePropsType } from 'types/common'

const CategoryPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <Categories />
}

export default CategoryPage
