import type { UseOnlinePaymentCreateViewModelType } from '../imports'
import {
  SERVICE_URL,
  useCreate,
  useOnlinePaymentListViewModel,
  useTranslations,
} from '../imports'

export const useOnlinePaymentCreateViewModel =
  (): UseOnlinePaymentCreateViewModelType => {
    const { refetchList } = useOnlinePaymentListViewModel()
    const { isLoadingSubmit, handleRequest } = useCreate({ url: SERVICE_URL })
    const t = useTranslations()
    const initialValues = {
      title: '',
      image: '',
      min_price: '',
      max_price: '',
      description: '',
      region_ids: [],
      category_ids: [],
      subscription_ids: [],
      tag_ids: [],
      form_id: null,
      status: { label: t('active'), value: 'active' },
      wage_id: '',
      sku: '',
      slug: '',
    }

    const onSubmit = (values: any, formikProps: any): void => {
      const {
        status,
        form_id: formId,
        tag_ids: tagIds,
        category_ids: categoryIds,
        region_ids: regionIds,
        subscription_ids: subscriptionIds,
        wage_id: wage,
      } = values
      const tags = tagIds.map((tag) => tag.id)
      const categories = categoryIds.map((cat) => cat.id)
      const regions = regionIds.map((region) => region.id)
      const subscriptions = subscriptionIds.map((sub) => sub.id)

      const body = {
        ...values,
        form_id: formId?.id,
        status: status.value,
        tag_ids: tags,
        category_ids: categories,
        region_ids: regions,
        subscription_ids: subscriptions,
        wage_id: wage.id,
      }
      if (subscriptionIds?.length) {
        delete body.min_price
        delete body.max_price
      } else {
        delete body.subscription_ids
      }

      handleRequest(body, refetchList, formikProps)
    }

    return {
      initialValues,
      isLoadingSubmit,
      onSubmit,
    }
  }
