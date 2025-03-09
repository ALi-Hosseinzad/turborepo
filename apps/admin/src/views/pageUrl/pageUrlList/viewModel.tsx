import { PAGE_URL_URL, useListViewModel, useTranslations } from '../imports'

export const usePageUrlListViewModel = (): any => {
  const t = useTranslations()
  const headInfo = [
    t('id'),
    t('name'),
    t('href'),
    t('slug'),
    t('type'),
    t('typeLabel'),
  ]

  const {
    page,
    data,
    isLoading,
    pageCount,
    refetchList,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
    isFetching,
  } = useListViewModel({
    queryKey: 'getPageUrlList',
    url: PAGE_URL_URL,
  })

  const handleBodyInfo = (body: any): any[] => {
    return body?.map(
      ({ id, name, href, slug, type, type_label: typeLabel }) => {
        return {
          id,
          name,
          href,
          slug,
          type,
          typeLabel,
        }
      },
    )
  }

  return {
    page,
    onErrorDelete,
    headInfo,
    bodyInfo: handleBodyInfo(data?.data),
    isLoading,
    pageCount,
    onChangePage,
    afterDeleteHandler,
    refetchList,
    isFetching,
  }
}
