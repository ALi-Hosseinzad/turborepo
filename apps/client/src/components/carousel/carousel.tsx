'use client'

import React from 'react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import type { CarouselType } from '@/types/carousel'
import './stylele.css'
import 'swiper/css'

export const Carousel = (props: CarouselType): JSX.Element => {
  const {
    children,
    slidesPerView = 1,
    breakpoints,
    hasArrowNavigation = false,
    hasPagination = false,
    hasTouchMove = false,
    isAutoplay = true,
    loop = false,
    spaceBetween = 40,
    speed = 2000,
    delaytime = '2000',
    isLoading,
    isError,
    skeletonLoading,
  } = props

  const autoplayConfig = isAutoplay
    ? {
        delay: parseInt(delaytime, 10),
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }
    : false

  return (
    <>
      {isLoading || isError ? (
        skeletonLoading || <p>Loading...</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={hasArrowNavigation}
          pagination={hasPagination ? { clickable: true } : false}
          allowTouchMove={hasTouchMove}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          speed={speed}
          loop={loop}
          breakpoints={breakpoints}
          draggable
          autoplay={autoplayConfig}
        >
          {children}
        </Swiper>
      )}
    </>
  )
}
