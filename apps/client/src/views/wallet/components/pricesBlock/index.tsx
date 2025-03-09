import React from 'react'
import { type MouseEvent } from 'react'
import { useTranslations } from '../../imports'

const WalletPricesBlock = ({ setFieldValue }) => {
  const t = useTranslations()
  const prices = [
    { label: '500,000', value: 50000 },
    { label: '200,000', value: 20000 },
    { label: '300,000', value: 30000 },
    { label: '1,000,000', value: 100000 },
    { label: '2,000,000', value: 200000 },
    { label: '3,000,000', value: 300000 },
  ]

  const handleChoosePrice = (e: MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.value
    setFieldValue('amount', text)
  }

  return (
    <div className="flex flex-wrap gap-y-2 mt-4 justify-between border-b border-b-grayWhite pb-5 text-nowrap">
      {prices.map((price: any) => (
        <button
          key={price.value}
          value={price.value}
          type="button"
          className="flex justify-center items-center border border-trueGray-400 py-3 rounded-md w-[32%] md:w-[50%] lg:w-[32%]
           text-trueGray-500 text-xs md:text-base"
          onClick={handleChoosePrice}
        >
          {price.label}
          {t('riali')}
        </button>
      ))}
    </div>
  )
}

export default WalletPricesBlock
