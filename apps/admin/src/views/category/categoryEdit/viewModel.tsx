'use client'

import {
  CATEGORY_URL,
  useCallback,
  useEdit,
  useListViewModel,
  useTranslations,
} from '../imports'

export const useCategoryEditViewModel = (): any => {
  const t = useTranslations()
  const headInfo = [t('id'), t('name'), t('categoryType')]

  const { refetchList } = useListViewModel({
    url: CATEGORY_URL,
    queryKey: 'category-list',
  })

  const bodyInfo = (data: any[]): any[] => {
    return data?.map(({ id, title, type }) => {
      return {
        id,
        title,
        type: type === 'gift_card' ? t('giftCard') : t('onlinePayment'),
      }
    })
  }

  const handleBody = useCallback((values: any): object => {
    const body = { ...values }
    if (values?.type) {
      body.type = values?.type?.value
    }
    if (values.parent_id) {
      body.parent_id = values.parent_id.id
    }
    return body
  }, [])

  const handleInitial = (editData): object => ({
    name: editData?.name || '',
    description: editData?.description || '',
    slug: editData?.slug || '',
    category_image: editData?.image || '',
    type: {
      value: editData?.type || '',
      label: editData?.type_label || '',
    },
    parent_id: editData?.parent
      ? {
          id: editData?.parent?.id || '',
          name: editData?.parent?.name || '',
        }
      : '',
  })

  const { editData, isLoadingEditData, submitRequest, isPendingSubmitEdit } =
    useEdit({
      url: CATEGORY_URL,
      handleBody,
      handleInitial,
      method: 'post',
      queryKey: 'category',
    })

  const onSubmit = (body: any): void => {
    submitRequest(handleBody(body), refetchList)
  }

  return {
    editData,
    isLoadingEditData,
    isPendingSubmitEdit,
    initialValues: handleInitial(editData),
    bodyInfo: bodyInfo(editData?.products),
    headInfo,
    onSubmit,
  }
}
