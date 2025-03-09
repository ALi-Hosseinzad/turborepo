export const queryStringEndpoint = (params: Record<string, string>): string => {
  for (const key in params) {
    if (params[key] === '') {
      delete params[key]
    }
  }
  const queryString = new URLSearchParams(params).toString()
  const queryStringFormat = queryString !== '' ? `?${queryString}` : ''
  return queryStringFormat
}
