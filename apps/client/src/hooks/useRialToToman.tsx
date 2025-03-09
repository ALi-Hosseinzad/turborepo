'use client'

export const UseRialToToman = (number) => {
  return Number(number.replaceAll(',', '')) / 10
}

export default UseRialToToman
