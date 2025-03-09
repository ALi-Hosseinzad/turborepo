import {
  ProductSlider,
  useBookmarksViewModel,
  useTranslations,
} from '../import'

export const Bookmarks = () => {
  const { bookmarksList, isLoading, isError } = useBookmarksViewModel()
  const t = useTranslations()

  return (
    <ProductSlider
      productsList={bookmarksList}
      isLoading={isLoading}
      isError={isError}
      title={t('bookmarks')}
      queryKeyForRefetch={['bokmark-list', 'new-product-list']}
    />
  )
}
