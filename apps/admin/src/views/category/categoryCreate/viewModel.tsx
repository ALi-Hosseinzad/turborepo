'use client'

import { CATEGORY_URL, useCreate, useListViewModel } from '../imports'

export const useCategoryCreateViewModel = (): any => {
  const { isLoadingSubmit, handleRequest } = useCreate({
    url: CATEGORY_URL,
  })

  const { refetchList } = useListViewModel({
    url: CATEGORY_URL,
    queryKey: 'category-list',
  })

  const onSubmit = (values: any, formikProps: any): void => {
    const body = {
      ...values,
      type: values?.type?.value,
    }
    if (values.parent_id) {
      body.parent_id = values.parent_id.id
    } else {
      delete body.parent_id
    }
    handleRequest(body, refetchList, formikProps)
  }

  const initialValues = {
    name: '',
    description: '',
    slug: '',
    type: '',
    category_image: '',
    parent_id: '',
  }

  return {
    initialValues,
    onSubmit,
    isLoadingSubmit,
  }
}
