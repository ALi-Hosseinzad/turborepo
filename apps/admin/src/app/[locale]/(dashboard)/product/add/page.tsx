import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { ProductCreate } from 'views/product/productCreate'
import type { PagePropsType } from 'types/common'

const AddNewProductPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <ProductCreate />
}

export default AddNewProductPage
