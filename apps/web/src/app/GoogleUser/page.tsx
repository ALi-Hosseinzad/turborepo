interface Data {
  data: { name: string }[]
}

async function getData(): Promise<Data | null> {
  const res = await fetch(
    'https://develop.ostigan.com/api/v1/gift-card-package/36 ',
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page(): Promise<JSX.Element> {
  const data: Data | null = await getData()

  return <p>{data ? `Your data: ${data.data?.description}` : 'Loading...'}</p>
}
