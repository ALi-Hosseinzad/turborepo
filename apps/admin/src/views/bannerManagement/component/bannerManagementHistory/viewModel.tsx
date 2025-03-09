import {
  useBannerManagementEditViewModel,
  useTranslations,
} from '../../imports'

export const useBannerManagementHistoryViewModel = (): any => {
  const { editData, isPendingSubmitEdit } = useBannerManagementEditViewModel()
  const t = useTranslations()

  const headInfo = [
    t('id'),
    t('relationTypeLabel'),
    t('path'),
    t('fileTypelabel'),
    t('serviceType'),
    t('giftCardType'),
  ]

  const handleBodyInfo = (body: any[]): any[] => {
    return body?.map(
      ({
        id,
        relation_type_label: relationTypeLabel,
        path,
        file_type_label: fileTypelabel,
        service,
        giftCardPackage,
      }) => {
        return {
          id,
          relationTypeLabel,
          path,
          fileTypelabel,
          service,
          giftCardPackage,
        }
      },
    )
  }

  return {
    bodyInfo: handleBodyInfo(editData?.banner_images),
    headInfo,
    isPendingSubmitEdit,
  }
}
