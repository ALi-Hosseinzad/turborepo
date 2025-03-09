import { BANNER_URL, useListViewModel, useTranslations } from '../imports'

export const useBannerManagementListViewModel = (): any => {
  const t = useTranslations()
  const headInfo = [
    t('id'),
    t('name'),
    t('status'),
    t('typeBanner'),
    t('platformType'),
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
    queryKey: 'BannerManagement-list',
    url: BANNER_URL,
  })

  const handleBodyInfo = (body: any): any[] => {
    return body?.map(
      ({
        id,
        status_label: statusLabel,
        type_banner: typeBanner,
        platform_type: platformType,
        PageUrl,
      }) => {
        return {
          id,
          name: PageUrl.name,
          statusLabel,
          typeBanner,
          platformType,
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
