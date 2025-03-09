export const getDataFech = async (url: string): Promise<any> => {
  const res = await fetch(`${process.env.BASE_URL}${url}`)
  const response = await res.json()
  return response
}

export const getQueryKey = (key: string): string[] => [key]
