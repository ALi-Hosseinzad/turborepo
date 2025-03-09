import type { UseListType } from 'types/common'
import {
  BANNER_IMAGE_URL,
  BANNERIMAGE_LIST_QUERY,
  useCreate,
  useListViewModel,
} from '../imports'

export const useBannerImageCreateViewModel = (): any => {
  const { refetchList }: UseListType = useListViewModel({
    url: BANNER_IMAGE_URL,
    queryKey: { BANNERIMAGE_LIST_QUERY },
  })

  const { isLoadingSubmit, handleRequest } = useCreate({
    url: BANNER_IMAGE_URL,
  })

  const initialValues = {
    file: '',
    file_type: '',
    time: '',
    href: '',
    priority: '',
    banner_id: '',
    relation_type: 'entity',
    service_id: '',
    gift_card_package_id: '',
  }

  const onSubmit = (values: any, formikProps: any): void => {
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
    handleRequest(body, refetchList, formikProps)
  }

  return {
    initialValues,
    isLoadingSubmit,
    onSubmit,
  }
}
