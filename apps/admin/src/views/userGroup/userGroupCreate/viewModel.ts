import { GROUP_URL, useCreate, useListViewModel } from '../imports'

export const useUserGroupCreateViewModel = (): any => {
  const {
    isLoadingSubmit: isLoadingCreate,
    handleRequest,
    isSuccessSubmit: isSuccessCreate,
  } = useCreate({
    url: GROUP_URL,
  })

  const { refetchList, isFetching } = useListViewModel({
    url: GROUP_URL,
    queryKey: 'user-group-list',
  })

  const initialValues = {
    name: '',
    slug: '',
    user_ids: [],
  }

  const onSubmit = (values: any, formikProps: any): void => {
    handleRequest(values, refetchList, formikProps)
  }

  return {
    onSubmit,
    initialValues,
    isLoadingSubmit: isLoadingCreate || isFetching,
    isSuccessCreate,
  }
}
