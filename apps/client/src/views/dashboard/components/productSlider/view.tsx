'use client'

import { ProductBox } from '@/components/cards/productBox'
import { useRouter } from '@/components/nextIntl/navigation'
import {
  CarouselLayout,
  CarouselLayoutSkeleton,
  ProductCardSkeleton,
  ShowMoreDrawer,
  SwiperSlide,
  useWindowDimensions,
} from '../../import'

const breakpoints = {
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
}
export const ProductSliderView = ({
  productsList,
  isLoading,
  isError,
  handleSliceArray,

  title,
  queryKeyForRefetch,
}) => {
  const { width } = useWindowDimensions()
  const getCardNumberInRow = (width) => {
    return width > 600 ? 2 : 1
  }
  const cardNumberInRow = getCardNumberInRow(width)
  const router = useRouter()

  const handleClick = (item) => {
    const matchType = item?.type === 'gift_card' ? 'giftCard' : 'onlinePayment'
    router.push(`/${matchType}/${item?.id}`)
  }
  return (
    <>
      {width > 768 ? (
        <CarouselLayout
          title={title}
          isLoading={isLoading}
          isError={isError}
          breakpoints={breakpoints}
          disable={!isLoading && !isError && !productsList?.length}
          delaytime="5000"
          skeletonLoading={
            <CarouselLayoutSkeleton breakpoints={breakpoints} className="">
              <ProductCardSkeleton />
            </CarouselLayoutSkeleton>
          }
        >
          {productsList?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  role="button"
                  className="cursor-pointer"
                  tabIndex={index}
                  onClick={() => handleClick(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                    }
                  }}
                >
                  <ProductBox
                    data={item}
                    queryKeyForRefetch={queryKeyForRefetch}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </CarouselLayout>
      ) : (
        <ShowMoreDrawer
          headerComponent={
            <p className="title-base sm:title-lg md:title-xl lg:title-3xl">
              {title}
            </p>
          }
          initialCard={handleSliceArray({
            productsList,
            start: 0,
            stop: cardNumberInRow,
          })}
          moreCard={handleSliceArray({
            productsList,
            start: cardNumberInRow,
          })}
          showMoreBtn={productsList?.length > cardNumberInRow}
        />
      )}
    </>
  )
}
