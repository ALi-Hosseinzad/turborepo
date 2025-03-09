'use client'

import moment from 'jalali-moment'

const UseJalaliDate = (dateString: string): string => {
  const gregorianDate = new Date(dateString)
  const jalaliDate = moment(gregorianDate).format('jYYYY/jMM/jDD')
  return jalaliDate
}

export default UseJalaliDate
