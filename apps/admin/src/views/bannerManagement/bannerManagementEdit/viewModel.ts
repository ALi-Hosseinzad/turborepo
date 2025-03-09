import type { UseListType } from 'types/common'
import { BANNER_URL, useEdit, useListViewModel } from '../imports'

export const useBannerManagementEditViewModel = (): any => {
  const { refetchList }: UseListType = useListViewModel({
    url: BANNER_URL,
    queryKey: 'BannerManagement-list',
  })
  const handleBody = (body: any): object => {
    const bodyData = {
      ...body,
      platform_type: body.platformType.value,
      banner_type: body.bannerType.value,
      status: body.status.value,
      page_url_id: body.pageUrlId.id,
    }
    delete bodyData.platformType
    delete bodyData.bannerType
    delete bodyData.pageUrlId

    return bodyData
  }
  const handleInitial = (editData: any): object => ({
    platformType: editData?.platform_type
      ? { value: editData?.platform_type, label: editData?.platform_type_label }
      : null,
    status: editData?.status
      ? { value: editData?.status, label: editData?.status_label }
      : null,
    bannerType: editData?.type_banner
      ? { value: editData?.type_banner, label: editData?.type_banner_label }
      : null,
    pageUrlId: editData?.PageUrl
      ? { id: editData?.PageUrl.id, name: editData?.PageUrl.name }
      : null,
    slug: editData?.slug,
  })

  const { editData, isLoadingEditData, submitRequest, isPendingSubmitEdit } =
    useEdit({
      url: BANNER_URL,
      queryKey: 'BannerManagement-edit',
      handleInitial,
      handleBody,
    })

  const onSubmit = (body: any): void => {
    submitRequest(handleBody(body), refetchList)
  }

  return {
    initialValues: handleInitial(editData),
    editData,
    isPendingSubmitEdit,
    isLoadingEditData,
    onSubmit,
  }
}
