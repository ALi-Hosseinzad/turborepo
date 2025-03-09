import React from 'react'
import { CategoryCard } from '../components/cardCategory'

export const GiftCardCategoryView = ({ data }): JSX.Element => {
  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-8 gap-4">
        {data?.map((item) => (
          <div key={item.id} className="col-span-2">
            <CategoryCard data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
