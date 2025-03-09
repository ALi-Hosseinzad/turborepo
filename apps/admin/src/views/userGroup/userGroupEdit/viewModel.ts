import { useCallback } from 'react'
import { useEdit } from 'hooks/useEdit'
import { showError } from 'hooks/useToust'
import {
  GROUP_URL,
  useListViewModel,
  useTranslations,
  useUsersInGroupListViewModel,
} from '../imports'

export const useUserGroupEditViewModel = (): any => {
  const t = useTranslations()
  const { refetchList } = useListViewModel({
    url: GROUP_URL,
    queryKey: 'user-group-list',
  })

  const { refetchGroup } = useUsersInGroupListViewModel()

  const handleBody = useCallback((values: any): object => {
    if (values?.user_ids?.length === 0) {
      return { ...values }
    }
    const userIds = values?.user_ids
    return {
      ...values,
      user_ids: userIds,
    }
  }, [])

  const handleInitial = (giftCardData: any): object => {
    return {
      name: giftCardData?.name || '',
      slug: giftCardData?.slug || '',
      user_ids: giftCardData?.users?.map((user) => user.user_id) || [],
    }
  }

  const {
    editData,
    isLoadingEditData: isLoadingGetData,
    submitRequest,
    isPendingSubmitEdit,
    isSuccessEdit,
  } = useEdit({
    url: GROUP_URL,
    handleBody,
    handleInitial,
    queryKey: 'group',
  })

  const onSubmit = (body: any): void => {
    const curRefetch = async (): Promise<any> => {
      await refetchGroup?.()
      await refetchList?.()
    }
    if (body.user_ids.length === 0) {
      showError(t('userIdsLength'))
      return
    }
    submitRequest(handleBody(body), curRefetch)
  }

  return {
    initialValues: handleInitial(editData),
    isPendingSubmitEdit,
    onSubmit,
    isSuccessEdit,
    isLoadingGetData,
  }
}
