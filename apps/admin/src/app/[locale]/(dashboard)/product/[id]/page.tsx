import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { ProductEdit } from 'views/product/productEdit'
import type { PagePropsType } from 'types/common'

const EditProductPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <ProductEdit />
}

export default EditProductPage
