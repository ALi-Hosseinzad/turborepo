export interface FormatNumber {
  numericString: string
  type: 'separateFromRight' | 'separateFromLeft'
  symbol: string
  numberDivider?: RegExp
}
