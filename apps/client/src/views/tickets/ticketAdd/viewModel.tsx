import type { BreadcrumbType } from '@/types/checkout'
import {
  ADD,
  TICKET_SUBJECT_URL,
  TICKETS,
  useAxiosQuery,
  useParams,
  useTranslations,
} from '../imports'

export const useTicketAddViewModel = () => {
  const t = useTranslations()
  const { subjectId } = useParams()
  const { data: subjectData, isLoading } = useAxiosQuery({
    url: `${TICKET_SUBJECT_URL}/${subjectId as string}`,
    queryKey: ['subjects', subjectId],
  })
  const getBreadCrumbs = (): BreadcrumbType[] => {
    return [
      {
        name: t('tickets'),
        url: TICKETS,
      },
      {
        name: t('addNewTicket'),
        url: `${TICKETS}${ADD}`,
      },
      {
        name: subjectData?.title,
        url: `${TICKETS}${ADD}/${subjectData?.id}`,
      },
    ]
  }
  return { subjectData, isLoading, getBreadCrumbs }
}
