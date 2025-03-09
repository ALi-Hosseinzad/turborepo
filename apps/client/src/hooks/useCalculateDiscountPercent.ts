const useCalculateDiscountPercent = (
  amount: any,
  type: any,
  fullPrice: any,
): number | string => {
  if (type === 'percent') {
    return amount
  }
  return ((amount / fullPrice) * 100).toFixed(2)
}

export default useCalculateDiscountPercent
