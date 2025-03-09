const UseTimeConvertor = (iso8601) => {
  const timestamp = Date.parse(iso8601)
  const date = new Date(timestamp)
  const persianDate = date.toLocaleDateString('fa-IR')
  const persianTime = date.toLocaleTimeString('fa-IR')
  return `${persianTime}-${persianDate}`
}

export default UseTimeConvertor
