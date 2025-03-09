'use client'

const UseWage = ({ price, exchangePrice, wage, type }) => {
  if (type == 'percent') {
    return (price * exchangePrice * wage) / 100
  }
  return wage
}

export default UseWage
