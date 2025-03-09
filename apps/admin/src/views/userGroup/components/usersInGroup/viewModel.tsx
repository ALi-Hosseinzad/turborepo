import { useState } from 'react'
import { useTranslations } from 'use-intl'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { showError, showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import { GROUP_DETACH_URL, GROUP_URL } from 'constants/endPoints'
import { axiosGet } from 'configs/httpService/axios/httpService'
import type { QueryListType } from 'types/common'
import { useCreate } from '../../imports'
import { DeleteIcon } from 'ui/components/icons'

export const useUsersInGroupListViewModel = (
  openDeleteModal?: any,
  setOpenDeleteModal?: any,
): any => {
  const t = useTranslations()
  const [params, setParams] = useState<QueryListType>(INDEX_PARAMS)

  const { isLoadingSubmit: isLoadingDetach, handleRequest } = useCreate({
    url: GROUP_DETACH_URL,
  })

  const { id } = useParams()

  const {
    data,
    isLoading,
    isFetching,
    refetch: refetchGroup,
  } = useQuery({
    queryKey: ['group', id],
    queryFn: () =>
      axiosGet({
        url: `${GROUP_URL}/${id as string}`,
      }),
  })

  const onChangePage = (page: string): void => {
    setParams((prev) => ({ ...prev, page }))
  }

  const afterDeleteHandler = async (): Promise<void> => {
    await refetchGroup()
    showSuccess(t('deletedSuccessfully'))
  }

  const onErrorDelete = (error: any): void => {
    showError(error.message)
  }

  const headInfo = [t('id'), t('name'), t('phone'), t('action')]

  const pageCount = data?.pagination?.total_pages

  const handleModal = (e: React.MouseEvent<HTMLButtonElement>): any => {
    setOpenDeleteModal({ status: true, userId: e.currentTarget.value })
  }

  const handleDetach = (): any => {
    if (openDeleteModal?.status) {
      const body = {
        userIds: [openDeleteModal?.userId],
        group_id: id,
      }
      handleRequest(body, refetchGroup)
      setOpenDeleteModal({ status: false, userId: '' })
    }
  }

  const bodyInfo = (data: any): any => {
    return data?.map(({ user_id: id, name, phone }) => ({
      id,
      name,
      phone,
      delete: (
        <button value={id} type="button" onClick={handleModal}>
          <DeleteIcon bgColor="transparent" className="m-auto" />
        </button>
      ),
    }))
  }

  return {
    bodyInfo: bodyInfo(data?.users),
    headInfo,
    pageCount,
    isLoading,
    isLoadingDetach,
    isFetching,
    refetchGroup,
    onChangePage,
    onErrorDelete,
    page: params.page,
    afterDeleteHandler,
    handleDetach,
  }
}
