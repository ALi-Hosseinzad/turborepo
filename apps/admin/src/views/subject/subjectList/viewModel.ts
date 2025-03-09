import { useListViewModel } from 'components/list/viewModel'
import type {
  RolesType,
  SubjectRecordType,
  UseListViewModelType,
} from '../imports'
import { SUBJECT_URL, useTranslations } from '../imports'

export const useSubjectListViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const {
    page,
    data,
    isLoading,
    pageCount,
    refetchList,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
    isFetching,
  } = useListViewModel({
    queryKey: 'subjects',
    url: SUBJECT_URL,
  })
  const headInfo = [t('id'), t('title'), t('role')]

  const handleBodyInfo = (curData: SubjectRecordType[]): any[] => {
    return curData?.map(({ id, title, roles }) => {
      const strRoles = roles?.map((role: RolesType) => role.name).toString()
      return { id, title, roles: strRoles }
    })
  }

  return {
    bodyInfo: handleBodyInfo(data?.data),
    headInfo,
    page,
    pageCount,
    isLoading,
    isFetching,
    refetchList,
    afterDeleteHandler,
    onChangePage,
    onErrorDelete,
  }
}
