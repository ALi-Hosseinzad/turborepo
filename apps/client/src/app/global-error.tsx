'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'
import Error from 'next/error'

export default function GlobalError({ error }: { error: any }): JSX.Element {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="fa">
      <body>
        <Error statusCode={error} />
      </body>
    </html>
  )
}
