'use client'

import {
  Banner,
  Bookmarks,
  Currency,
  NewProducts,
  RecommendedProducts,
} from './import'

export const Dashboard = () => {
  return (
    <div className="felx flex-col">
      <Banner />
      <Currency />
      <NewProducts />
      <Bookmarks />
      <RecommendedProducts />
    </div>
  )
}
