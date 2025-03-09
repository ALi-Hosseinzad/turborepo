'use client'

import {
  ADD,
  GIFT_CARD_PRODUCT_URL,
  List,
  PRODUCT,
  useProductListViewModel,
  useTranslations,
} from './imports'

const Product = (): JSX.Element => {
  const { headInfo, bodyInfo } = useProductListViewModel()
  const t = useTranslations()
  return (
    <List
      bodyInfo={bodyInfo}
      tableLabel={t('product')}
      headInfo={headInfo}
      url={GIFT_CARD_PRODUCT_URL}
      queryKey="product-management-list"
      tableUrlDeleteRequest="admin/gift-card-product"
      tableEditNavigationLink={PRODUCT}
      tableAddNavigationLink={`${PRODUCT}/${ADD}`}
      tableAddBtnText={t('addNewProduct')}
    />
  )
}

export default Product
