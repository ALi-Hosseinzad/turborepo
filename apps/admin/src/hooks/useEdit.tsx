import { useEffect, useState } from 'react'
import { useTranslations } from 'use-intl'
import { getChangedObjectValues, isEmptyObject } from 'utils/objectsMethods'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  axiosGet,
  axiosPost,
  axiosPut,
  axiosPutBody,
} from 'configs/httpService/axios/httpService'
import type { UseEditPropsType, UseEditReturnType } from 'types/common'
import { showError, showSuccess } from './useToust'

export const useEdit = (props: UseEditPropsType): UseEditReturnType => {
  const { url, method, queryKey, handleBody, handleInitial } = props
  const { id: paramId } = useParams()
  const [editedData, setEditedData] = useState({})
  const t = useTranslations()

  const {
    data: gotData,
    isLoading: isLoadingGetData,
    isPending: isPendingGetData,
    isFetching: isFetchingGetData,
    isSuccess: isSuccessGetData,
  } = useQuery({
    queryKey: [queryKey, paramId],
    queryFn: () =>
      axiosGet({
        url: `${url}/${paramId as string}`,
      }),
  })

  const {
    mutateAsync,
    isPending: isPendingSubmitEdit,
    isSuccess: isSuccessEdit,
  } = useMutation({
    mutationFn: (changedBody: any) => {
      switch (method) {
        case 'post':
          return axiosPost({
            url: `${url}/${paramId as string}`,
            body: changedBody,
          })
        case 'put-body':
          return axiosPutBody({
            url: `${url}/${paramId as string}`,
            body: changedBody,
          })
        default:
          return axiosPut({
            url: `${url}/${paramId as string}`,
            params: changedBody,
          })
      }
    },
  })

  const submitRequest = async (body, refetchList): Promise<void> => {
    const changedBody = getChangedObjectValues(body, editedData)
    if (isEmptyObject(changedBody)) return
    await mutateAsync(changedBody)
      .then(() => {
        refetchList()
        setEditedData(body)
        showSuccess(t('editedSuccessfully'))
      })
      .catch((error) => {
        setEditedData(body)
        showError(error.message)
      })
  }

  useEffect(() => {
    if (isSuccessGetData && !isFetchingGetData) {
      setEditedData(() => {
        return handleBody(handleInitial(gotData))
      })
    }
  }, [isSuccessGetData])

  return {
    editData: !isFetchingGetData ? gotData : {},
    isLoadingEditData:
      isLoadingGetData || isPendingGetData || isFetchingGetData,
    isPendingSubmitEdit,
    isSuccessEdit,
    submitRequest,
  }
}
