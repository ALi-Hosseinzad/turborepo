'use client'

import type { BodyInfoTicketType, UseListViewModelType } from '../imports'
import { TICKET_URL, useListViewModel, useTranslations } from '../imports'

export const useTicketListViewModel = (): UseListViewModelType => {
  const t = useTranslations()
  const {
    data,
    isLoading,
    pageCount,
    onChangePage,
    page,
    isFetching,
    refetchList,
  } = useListViewModel({
    queryKey: 'tickets',
    url: TICKET_URL,
  })

  const headInfo = [
    t('id'),
    t('name'),
    t('priority'),
    t('subject'),
    t('phone'),
    t('status'),
    t('date'),
  ]

  const handleBodyInfo = (tickets: any): BodyInfoTicketType[] => {
    return tickets?.map((ticket: any) => {
      const {
        id,
        name,
        priority,
        created_at: createdAt,
        subject,
        user_id_from_info: userFrom,
        status_label: statusLabel,
      } = ticket
      return {
        id,
        name,
        priority,
        subject: subject.title,
        phone: userFrom.phone,
        statusLabel,
        createdAt,
      }
    })
  }

  return {
    headInfo,
    bodyInfo: handleBodyInfo(data),
    isLoading,
    page,
    pageCount,
    onChangePage,
    isFetching,
    refetchList,
  }
}
