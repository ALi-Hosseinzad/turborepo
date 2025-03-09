const UsePrice = ({ price, exchangePrice, hurryPrice }) => {
  return price * exchangePrice + hurryPrice
}

export default UsePrice

// const usePrice = (total, wageAmount, wageType, valuesHurry, hurryPrice) => {
//   if (wageType === 'amount') {
//     if (valuesHurry) {
//       return wageAmount + total + hurryPrice
//     }
//     return wageAmount + total
//   } else if (wageType === 'percent') {
//     if (valuesHurry) {
//       return total + total * (wageAmount / 100) + hurryPrice
//     }
//     return total + total * (wageAmount / 100)
//   }
// }

// export default usePrice
