'use client'

import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { CarouselLayout } from '@/views/dashboard/import'

export const CarouselLayoutSkeleton = ({
  children,
  className = '',
  breakpoints = {
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
    1751: {
      slidesPerView: 4,
    },
  },
}) => {
  return (
    <div className={className}>
      <CarouselLayout
        breakpoints={breakpoints}
        hasArrowNavigation={false}
        isAutoplay={false}
      >
        {[0, 1, 2, 3].map((item) => (
          <SwiperSlide key={item}>
            <div>{children}</div>
          </SwiperSlide>
        ))}
      </CarouselLayout>
    </div>
  )
}
