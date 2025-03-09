import type { BreadcrumbType } from '@/types/checkout'
import {
  ADD,
  TICKET_SUBJECT_URL,
  TICKETS,
  useAxiosQuery,
  useTranslations,
} from '../../imports'

export const useTicketChooseSubject = () => {
  const { data, isLoading } = useAxiosQuery({
    url: TICKET_SUBJECT_URL,
    queryKey: ['ticket-subjects'],
  })
  const t = useTranslations()

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
    ]
  }
  return { data, isLoading, getBreadCrumbs }
}
