import type { UseListType } from 'types/common'
import type { EditViewModelType } from '../imports'
import {
  BANNER_IMAGE_URL,
  BANNERIMAGE_LIST_QUERY,
  useEdit,
  useListViewModel,
} from '../imports'

const handleBody = (values: any): object => {
  let body: any
  if (values?.relation_type === 'entity') {
    body = {
      ...values,
      file_type: values?.file_type?.value,
      banner_id: Number(values?.banner_id?.id),
      service_id: Number(values?.service_id?.id),
      priority: Number(values?.priority),
      gift_card_package_id: Number(values?.gift_card_package_id?.id),
    }
    body?.gift_card_package_id || delete body?.gift_card_package_id
    body?.service_id || delete body?.service_id
    typeof body?.href === 'string' && delete body.href
  }
  if (values?.relation_type === 'link') {
    body = {
      ...values,
      file_type: values?.file_type?.value,
      priority: Number(values?.priority),
      banner_id: Number(values?.banner_id?.id),
    }
    typeof body?.service_id === 'string' && delete body.service_id
    typeof body?.gift_card_package_id === 'string' &&
      delete body.gift_card_package_id
  }
  return { ...body }
}

const handleInitial = (editData: any): any => {
  if (editData) {
    const body = {
      banner_id: editData?.banner
        ? {
            id: editData?.banner?.id,
            slug: editData?.banner?.slug,
          }
        : null,
      file: editData?.file_manager?.path,
      file_type: editData?.file_type
        ? {
            value: editData?.file_type,
            label: editData?.file_type_label,
          }
        : null,

      priority: editData?.priority,
      relation_type: editData?.relation_type || 'entity',

      time: editData?.time,
    }
    if (body.relation_type === 'link') {
      return { ...body, href: editData?.href }
    }
    return {
      ...body,
      service_id: editData?.service_id
        ? { id: editData?.service_id, title: editData?.service }
        : null,
      gift_card_package_id: editData?.gift_card_package_id
        ? {
            id: editData?.gift_card_package_id,
            title: editData?.giftCardPackage,
          }
        : null,
    }
  }
}

export const useBannerImageEditViewModel = (): EditViewModelType => {
  const { refetchList }: UseListType = useListViewModel({
    url: BANNER_IMAGE_URL,
    queryKey: { BANNERIMAGE_LIST_QUERY },
  })

  const { editData, isLoadingEditData, submitRequest, isPendingSubmitEdit } =
    useEdit({
      url: BANNER_IMAGE_URL,
      method: 'post',
      queryKey: 'bannerImage-edit',
      handleInitial,
      handleBody,
    })

  const onSubmit = (body: any): void => {
    submitRequest(handleBody(body), refetchList)
  }

  return {
    initialValues: handleInitial(editData),
    isPendingSubmitEdit,
    isLoadingEditData,
    onSubmit,
  }
}
