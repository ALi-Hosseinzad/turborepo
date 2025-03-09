'use client'

import type { BreadcrumbType } from '@/types/checkout'
import {
  TICKET_SHOW_DETAIL_URL,
  TICKETS,
  useAxiosQuery,
  useParams,
  useTranslations,
} from '../imports'

export const useTicketDetailViewModel = (): any => {
  const { ticketId } = useParams()
  const t = useTranslations()

  const {
    data: ticketData,
    refetch: refetchDetailTicket,
    isLoading,
  } = useAxiosQuery({
    url: `${TICKET_SHOW_DETAIL_URL}/${ticketId as string}`,
    queryKey: ['ticket-id', ticketId],
  })
  const ticketUser = ticketData?.arrayUser[0]
  const getBreadCrumbs = (): BreadcrumbType[] => {
    return [
      {
        name: t('tickets'),
        url: TICKETS,
      },
      {
        name: ticketUser?.title,
        url: `${TICKETS}/${ticketUser?.id}`,
      },
    ]
  }
  return {
    getBreadCrumbs,
    ticketData,
    refetchDetailTicket,
    isLoading,
  }
}
