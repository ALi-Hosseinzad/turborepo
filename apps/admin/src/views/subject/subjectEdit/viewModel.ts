import type {
  InitialValuesType,
  RolesType, // SubjectCreateViewType,
} from '../imports'
import {
  axiosGet,
  axiosPost,
  getChangedObjectValues,
  showSuccess,
  SUBJECT_URL,
  useEffect,
  useMutation,
  useParams,
  useQuery,
  useState,
  useSubjectListViewModel,
  useTranslations,
} from '../imports'

export const useSubjectEditViewModel = (): any => {
  const t = useTranslations()
  const { id: paramId } = useParams()
  const { refetchList } = useSubjectListViewModel()
  const [editedValues, setEditedValues] = useState({})

  const { data: subjectData, isLoading: isLoadingSubjectData } = useQuery({
    queryKey: ['subject', paramId],
    queryFn: () =>
      axiosGet({
        url: `${SUBJECT_URL}/${paramId as string}`,
      }),
  })

  const initialValues = {
    title: subjectData?.title || '',
    icon: subjectData?.icon || '',
    role_ids:
      subjectData?.roles?.map(({ name, id }) => ({
        id,
        name,
      })) || [],
  }

  const { mutateAsync, isPending: isLoadingSubmit } = useMutation({
    mutationFn: (body: any) => {
      const changedValues = getChangedObjectValues(body, editedValues)
      return axiosPost({
        url: `${SUBJECT_URL}/${paramId as string}`,
        body: changedValues,
      })
    },
  })

  const onSubmit = async (values: InitialValuesType): Promise<void> => {
    const body = {
      ...values,
      role_ids: values.role_ids.map((role: RolesType) => role.id),
    }
    await mutateAsync(body).then(async () => {
      showSuccess(t('editedSuccessfully'))
      setEditedValues(body)
      await refetchList()
    })
  }

  const isLoading = isLoadingSubjectData || isLoadingSubmit

  const headInfo = [t('id'), t('title'), t('answer')]

  const handleBodyInfo = (data: any): any => {
    if (data) {
      return data?.faq.map((faq) => ({
        id: faq?.id || '',
        question: faq?.question || '',
        answer: faq?.answer || '',
      }))
    }
  }

  useEffect(() => {
    if (!isLoadingSubjectData) {
      setEditedValues(initialValues)
    }
  }, [isLoadingSubjectData])

  return {
    initialValues,
    isLoading,
    onSubmit,
    bodyInfo: handleBodyInfo(subjectData),
    headInfo,
  }
}
