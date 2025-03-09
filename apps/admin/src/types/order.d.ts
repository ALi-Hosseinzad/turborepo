import type { QueryListType } from './common'

export interface PaginationType {
  total: number
  count: number
  per_page: number
  current_page: number
  total_pages: number
  first_page_url: string
  last_page_url: string
  next_page_url: number | null
  prev_page_url: number | null
}
export interface OrderListViewType {
  orderData: [] | undefined
  headInfoTable: string[]
  orderPagination: PaginationType | undefined
  headInfoTable: []
  params: QueryListType
  data?: any
  onChangePage: (curPage: string) => void
  isLoading: boolean
}

export type OrderQueryListType = QueryListType

export interface OrderDetailDataType {
  orderable: {
    service: any
    id: number
  }
}

export interface UseOrderDetailModelPropsType {
  orderDetailData: Record<string, any>
  isLoading: boolean
  initialValues: {
    attachments: string
    description: string
  }
  validationSchema: any // Add proper type for yup validation schema
  onSubmit: any
  giftCardFirstPart?: any
  giftCardSecondPart?: any
  giftCardThirdPart?: any
  onlinePaymentFirstPart?: any
  onlinePaymentSecondPart?: any
}

export interface OrderDetailType {
  translate: string
  value: any
}
