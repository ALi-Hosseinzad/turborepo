'use client'

import React from 'react'
import {
  AparatIcon,
  FooterPathIcon,
  InstagramIcon,
  OstiganLogoWithNameIconWhite,
  TelegramIcon,
  YoutubeIcon,
} from 'ui/components/icons'

export const FooterView = ({ data }): JSX.Element => {
  return (
    <div className="relative bg-primary-default text-trueGray-100 h-auto pt-8  pb-32 px-32 mt-[137px]">
      <div className="border-b border-trueGray-400">
        {/* <Image src={data?.logo} width={100} height={100} alt="ostigan" /> */}
        <OstiganLogoWithNameIconWhite />
        <p className="py-4">{data?.description}</p>
      </div>
      <div className="flex justify-between">
        {data?.footer_items?.map((item) => (
          <div
            key={item.id}
            className={` ${
              item?.title === 'ارتباط با ما' ? 'col-span-3' : 'col-span-2'
            }`}
          >
            <p className="title-lg text-trueGray-100 pt-8 pb-6">
              {item?.title}
            </p>
            <div className="flex flex-col gap-4">
              {item?.children?.map((itemArr) => {
                const Icon = `${itemArr?.icon}`

                return (
                  <div
                    className="flex gap-2 items-center z-50"
                    key={itemArr.id}
                  >
                    {Icon != null ? <Icon /> : null}
                    <p>{itemArr?.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0">
        <FooterPathIcon />
      </div>

      <p className="absolute bottom-5">
        تمامی حقوق برای شرکت مهرایان آلفا محفوظ است.
      </p>

      <div className="flex gap-3 absolute bottom-5 left-32">
        <InstagramIcon />
        <TelegramIcon />
        <AparatIcon />
        <YoutubeIcon />
      </div>
    </div>
  )
}
