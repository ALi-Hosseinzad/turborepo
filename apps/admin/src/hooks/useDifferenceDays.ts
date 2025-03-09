'use client'

const UseDifferenceDays = (diffDay: Date): number => {
  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, '0')

  const hours = String(currentDate.getHours()).padStart(2, '0')
  const minutes = String(currentDate.getMinutes()).padStart(2, '0')
  const seconds = String(currentDate.getSeconds()).padStart(2, '0')

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  const datas = diffDay
  if (diffDay) {
    const date1: any = new Date(formattedDate)
    const date2: any = new Date(datas)
    const differenceMs = date2.getTime() - date1.getTime()

    // Convert milliseconds to days
    const differenceDays = differenceMs / (1000 * 60 * 60 * 24)
    const differenceDaysRound = Math.round(differenceDays)

    return differenceDaysRound
  }
  return NaN
}

export default UseDifferenceDays
