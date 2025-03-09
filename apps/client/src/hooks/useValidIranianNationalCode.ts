import { useState } from 'react'

function useValidIranianNationalCode() {
  const [isValid, setIsValid] = useState(false)

  const checkValidity = (input) => {
    if (!/^\d{10}$/.test(input)) {
      setIsValid(false)
      return
    }
    const check = Number(input[9])
    const sum =
      input
        .split('')
        .slice(0, 9)
        .reduce((acc, x, i) => acc + Number(x) * (10 - i), 0) % 11
    setIsValid(sum < 2 ? check === sum : check + sum === 11)
  }

  return [isValid, checkValidity]
}

export default useValidIranianNationalCode
