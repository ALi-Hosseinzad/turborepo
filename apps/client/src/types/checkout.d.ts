export interface CheckoutPropsType {
  orderId?: number | undefined
}

export interface BreadcrumbType {
  name: string
  url: string
}

export interface CheckoutWrapperProps {
  children: ReactNode
}

export interface OrderDataType {
  id: number
  discounts?: {
    code: string
  }[]
  count?: number
  user_email?: string
  user_phone?: string
  status?: string
  status_label?: string
  status_text_color?: string
  status_background_color?: string
  full_price?: number
  discount_price?: number
  full_price_after_discount?: number
  order_type_label?: string
  tax_price?: number
  orderable: {
    hurry?: string
    hurry_price?: number
    exchange_price_online_payment?: number
    wage_price?: number
    price?: number
    currency?: string
    region?: string
    name?: string
    sku?: string
    image: string
    service?: {
      title?: string
      image?: string
    }
    subscription?: {
      title?: string
    }
    online_payment_has_form_inputs?: [any]
  }
  description?: string
  tracking_code?: string
  updated_at?: string
}
export interface OrderableType {
  name?: string
  sku?: string
  price?: string
  currency?: string
  region?: string
  service?: {
    title: string
  }
}

export type OrderInfoType = Record<
  string,
  | {
      title: string
      key: string
      value?: string
      statusTextColor?: string
      statusBgColor?: string
    }
  | undefined
>
export interface OrderInfoProps {
  orderId?: number
}

export interface DiscountProps {
  orderId?: number
}

export interface BillProps {
  orderId?: number
}
export interface UseDiscountViewModelProps {
  orderData: {
    discounts?: { code: string }[]
    id?: number
  }
}

export interface UseBillViewModelProps {
  id?: number
  order_type_label?: string
  full_price?: number
  discount_price?: number
  full_price_after_discount?: number
  orderable?: {
    image?: string
    service?: {
      image?: string
    }
  }
  description?: string
}

interface FormInput {
  name: string
  label: string
}

export interface OnlinePaymentItem {
  form_input: FormInput
  value: string
}
