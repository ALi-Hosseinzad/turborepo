import type { UseListType } from 'types/common'
import { BANNER_URL, useCreate, useListViewModel } from '../imports'

export const useBannerManagementCreateViewModel = (): any => {
  const { refetchList }: UseListType = useListViewModel({
    url: BANNER_URL,
    queryKey: 'BannerManagements',
  })
  const { isLoadingSubmit, handleRequest } = useCreate({ url: BANNER_URL })

  const initialValues = {
    platformType: '',
    bannerType: '',
    status: '',
    slug: '',
    pageUrlId: '',
  }

  const onSubmit = (values: any, formikProps: any): void => {
    const body = {
      ...values,
      platform_type: values.platformType.value,
      banner_type: values.bannerType.value,
      status: values.status.value,
      page_url_id: values.pageUrlId.id,
    }
    delete body.platformType
    delete body.bannerType
    delete body.pageUrlId

    handleRequest(body, refetchList, formikProps)
  }

  return {
    initialValues,
    isLoadingSubmit,
    onSubmit,
  }
}
