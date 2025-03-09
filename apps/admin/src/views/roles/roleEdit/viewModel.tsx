'use client'

import { isEmptyObject } from 'utils/objectsMethods'
import { ROLE_URL, useEdit, useListViewModel, useParams } from '../imports'

export const useRoleEditViewModel = (): any => {
  const { id }: { id: string } = useParams()

  const { refetchList } = useListViewModel({
    url: ROLE_URL,
    queryKey: 'roles-list',
    enabled: false,
  })

  const handleInitial = (data): any => {
    if (data && !isEmptyObject(data)) {
      const permissionList = data?.permissions?.map(
        ({ id, name, meta_name: metaName }) => {
          return {
            id,
            name,
            metaName,
          }
        },
      )
      return {
        name: data?.name,
        type: {
          value: data?.permissions[0]?.type,
          label: data?.permissions[0]?.type_label,
        },
        permissionType: permissionList,
      }
    }
    return { id: '', type: '', permissionType: [] }
  }

  const {
    editData,
    isLoadingEditData: isLoadingGetData,
    submitRequest,
    isPendingSubmitEdit,
  } = useEdit({
    url: ROLE_URL,
    handleBody,
    method: 'post',
    handleInitial,
    queryKey: ['permissionOptions-AccessType', id],
  })

  const onSubmit = (body: any): void => {
    submitRequest(handleBody(body), refetchList)
  }

  return {
    initialValues: handleInitial(editData),
    isPendingSubmitEdit,
    onSubmit,
    isLoadingGetData,
  }
}
