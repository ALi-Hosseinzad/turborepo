import type { RootState } from '../../imports'
import {
  useFormikContext,
  UsePrice,
  useSelector,
  UseTomanToRial,
  UseWage,
} from '../../imports'

export const usePreInvoiceViewModel = () => {
  const { user } = useSelector((state: RootState) => state.persist)
  const userInfo = {
    phone: user?.phone,
    email: user?.email,
  }
  const { values } = useFormikContext()
  const { subscriptions, region, rangePrice, wage, hurryPrice, fastPayment } =
    values as any
  const wages = UseWage({
    price: subscriptions?.price ? subscriptions?.price : rangePrice,
    exchangePrice: region?.currency?.exchange_money_active || 1,
    wage: wage?.amount,
    type: wage?.type,
  })

  const totalPrice = subscriptions?.price
    ? UsePrice({
        price: subscriptions?.price,
        exchangePrice: region?.currency?.exchange_money_active,
        hurryPrice: fastPayment ? hurryPrice : 0,
      })
    : UsePrice({
        price: rangePrice,
        exchangePrice: region?.currency?.exchange_money_active || 1,
        hurryPrice: fastPayment ? hurryPrice : 0,
      })

  const daylyPrice = {
    currency: region?.currency ? region?.currency?.name : 'ارز',
    price: region?.currency
      ? UseTomanToRial(region?.currency?.exchange_money_active)
      : 0,
  }

  const priceInfo = {
    totalPrice: UseTomanToRial(totalPrice + wages),
    servicePrice: UseTomanToRial(totalPrice - (fastPayment ? hurryPrice : 0)),
    hurryPrice: UseTomanToRial(fastPayment ? hurryPrice : 0),
    wage: UseTomanToRial(wages),
    daylyPrice,
  }

  return {
    userInfo,
    priceInfo,
  }
}
