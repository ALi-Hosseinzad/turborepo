import type { FormatNumber } from 'types/useFormatNumber'

const useFormatNumber = ({
  numericString,
  type,
  symbol = ',',
  numberDivider = /.{1,3}/g,
}: FormatNumber): string => {
  const handleSeparateFromRight = (): string => {
    const reversedString = numericString.split('').reverse().join('')
    const chunks = reversedString.match(numberDivider)
    const formattedString = chunks ? chunks.join(symbol) : reversedString
    return formattedString.split('').reverse().join('')
  }
  const handleSeparateFromLeft = (): string => {
    const chunks = numericString?.match(numberDivider)
    return chunks ? chunks.join(symbol) : numericString
  }

  switch (type) {
    case 'separateFromRight':
      return handleSeparateFromRight()

    case 'separateFromLeft':
      return handleSeparateFromLeft()

    default:
      return handleSeparateFromLeft()
  }
}
export default useFormatNumber
