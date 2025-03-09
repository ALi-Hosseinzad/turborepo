export interface ItemType {
  id: string
  order_type_label: string
  product: {
    name: string
  }
  count: number
  created_at: string
  full_price: number
  status: string
  status_text_color: string
  status_background_color: string
  status_label: string
}

export interface TableRowType {
  id: string
  orderTypeLabel: string
  product: string
  count: number
  lastUpdate: JSX.Element
  fullPrice: JSX.Element
  statusLabel: JSX.Element
}

export interface OrderListViewPropsType {
  headInfo: any
  bodyInfo: any
}
