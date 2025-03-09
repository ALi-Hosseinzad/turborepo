import type { UseMutateFunction } from '@tanstack/react-query'

export interface BodyInfoTicketType {
  id: number
  title: string
  priority: string
  subject: string
  name: string
  phone: string
  createdAt: string
  status: boolean
}
export interface TicketDetailDataType {
  ticketDetailData: any
}

export interface UseTicketDetailViewModelType {
  ticketDetailData: any
  lastUserTicketId?: any
  onSubmitSubject: UseMutateFunction<any, Error, any>
  initialValues: InitialValuesType
  validationSchema: yup.AnyObjectSchema
  onSubmitTicketReply: (values: any, formikProps: any) => Promise<any>
  isLoadingGetTicket: boolean
  isLoadingSubmitReply: boolean
  isLoadingSubmitSubject: boolean
}

export type TicketDetailViewPropsType = Omit<
  UseTicketDetailViewModelType,
  'isLoadingGetTicket' | 'isLoadingSubmitReply' | 'isLoadingSubmitSubject'
>

export type TicketReplyFormPropsType = Pick<
  UseTicketDetailViewModelType,
  'initialValues' | 'validationSchema' | 'onSubmitTicketReply'
>

export interface InitialValuesType {
  parent_id: number
  description: string
}
