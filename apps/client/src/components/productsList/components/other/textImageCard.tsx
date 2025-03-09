'use client'

import React from 'react'
import Image from 'next/image'

interface TextImageCardType {
  filterList: Record<string, any>
  onClick: () => void
  clientWindowHeight: boolean
}

export const TextImageCard = ({
  filterList,
  onClick,
  clientWindowHeight,
}: TextImageCardType): JSX.Element => {
  return (
    <button
      type="button"
      className={`flex items-center cursor-pointer px-4
      ${clientWindowHeight ? 'justify-center border rounded-full gap-1 py-2' : 'flex-col'}
      `}
      onClick={onClick}
    >
      <div
        className={
          clientWindowHeight ? 'relative w-8 h-8' : 'relative w-16 h-16'
        }
      >
        <Image
          src={filterList?.image}
          className={
            clientWindowHeight
              ? 'h-[10h] rounded-lg bg-customWhite'
              : 'rounded-lg bg-customWhite'
          }
          alt="استیگان"
          fill
        />
      </div>
      <p className="title-base">
        {filterList?.name?.replace('گیفت کارت‌های', '')}
      </p>
    </button>
  )
}
