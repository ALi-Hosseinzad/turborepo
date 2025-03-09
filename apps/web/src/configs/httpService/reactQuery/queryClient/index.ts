import { cache } from 'react'
import { QueryClient } from '@tanstack/react-query'

const STALE_TIME = 1000 * 60 * 5 // 5 minutes

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME,
    },
    mutations: {
      onError: () =>
        // error: Error
        {
          /** You can use toast or notification here */
        },
    },
  },
}

export const getQueryClient = cache(() => new QueryClient(queryClientConfig))

// import { cache } from 'react'
// import { QueryClient } from '@tanstack/query-core'

// const GetQueryClient = cache(() => new QueryClient())
// export default GetQueryClient
