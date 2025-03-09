'use client'

import { useDataQuery } from '@/hooks/useDataQuery'

const GiftCardProductsView = (): JSX.Element => {
  const usersQuery = useDataQuery({
    nameQueryKey: 'users',
    urlQueryFn: 'gift-card-package/36',
  })

  return (
    <div>
      <p>{usersQuery?.data?.description}</p>
      o-o
    </div>
  )
}

export default GiftCardProductsView
