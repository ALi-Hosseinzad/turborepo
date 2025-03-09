'use client'

import React from 'react'
import Image from 'next/image'
import MyImg from '../../publicDelete/img.png'
import { ArrowToSideLeftIcon } from 'ui/components/icons'

const CardNews = (): JSX.Element => {
  return (
    <div className="group relative flex justify-center">
      <div className="w-[493px] h-[305px] rounded-lg overflow-hidden">
        <Image
          src={MyImg}
          alt="alt-img"
          className="group-hover:scale-125 w-full h-full transition-all duration-1000"
        />
      </div>
      <div className="absolute bg-primary-default text-white px-2 py-[18px] rounded-b-lg left-8">
        <span className="text-white font-medium text-sm ">آموزشی</span>
      </div>
      <div className="absolute bg-white top-[230px] group-hover:top-[181px] transition-all duration-1000 mx-8 p-4 rounded-lg">
        <div className="flex flex-row justify-between">
          <span className="text-lg font-medium">لورم ایپسوم متن ساختگی</span>
          <span className="text-base font-normal text-trueGray-600">
            1402/02/18
          </span>
        </div>
        <p className="mt-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون ...
        </p>
        <div className="flex justify-end">
          <span className="text-primary-default font-medium text-base ml-1">
            ادامه مطالب
          </span>
          <ArrowToSideLeftIcon color="#01bc8d" />
        </div>
      </div>
    </div>
  )
}

export default CardNews
