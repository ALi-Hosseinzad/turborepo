import { cookies as nextCookies } from 'next/headers'

export default async function useFetch({ url, cache }: any) {
  const token = nextCookies().get('token')?.value

  const res = await fetch(`${process.env.BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    cache,
  })

  if (!res.ok) {
    const resStringified = JSON.stringify(res)
    let response
    if (
      Object.keys(resStringified).length === 0 &&
      resStringified.constructor === Object
    ) {
      const errorResponse = await res.json()
      const errorResponseText = errorResponse.message
      response = {
        statusCode: res.status,
        statusText: errorResponseText,
      }
    } else {
      response = {
        statusCode: res.status,
        statusText: res.statusText,
      }
    }
    return response
  }
  return res.json()
}
