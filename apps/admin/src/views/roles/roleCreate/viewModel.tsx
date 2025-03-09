'use client'

import { ROLE_URL, useCreate, useListViewModel } from '../imports'

export const useRoleCreateViewModel = (): any => {
  const initialValues = {
    name: '',
    type: '',
    permissionType: [],
  }

  const { isLoadingSubmit, handleRequest } = useCreate({
    url: ROLE_URL,
  })

  const { refetchList } = useListViewModel({
    url: ROLE_URL,
    queryKey: 'roles-list',
    enabled: false,
  })

  const onSubmit = (values: any, formikProps: any): void => {
    const body = {
      name: values.name,
      permission_id: values?.permissionType?.map((item) => item.id),
    }
    handleRequest(body, refetchList, formikProps)
  }

  return {
    onSubmit,
    initialValues,
    isLoadingSubmit,
  }
}
