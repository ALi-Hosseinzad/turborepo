'use client'

import React, { useEffect, useState } from 'react'

interface Data {
  description: any
  data: { name: string }[]
}

export default function Page(): JSX.Element {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://develop.ostigan.com/api/v1/gift-card-package/36 ',
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result: Data = await response.json()
        setData(result)
      } catch (error) {
        /* empty */
      }
    }

    void fetchData()
  }, [])

  return <p>{data ? `Your data: ${data?.data?.description}` : 'Loading...'}</p>
}
