import {
  CarouselLayout,
  CarouselLayoutSkeleton,
  CurrencyCard,
  CurrencyCardSkeleton,
  SwiperSlide,
  useTranslations,
  useWindowDimensions,
} from '../import'

export const CurrencyView = ({ currencyList, isLoading, isError }) => {
  const { width } = useWindowDimensions()
  const t = useTranslations()
  const breakpoints = {
    0: {
      slidesPerView: 1.4,
    },
    425: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.9,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 2.2,
    },
    1280: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 4,
    },
  }
  return (
    <CarouselLayout
      title={t('exchangeRate')}
      isLoading={isLoading}
      isError={isError}
      hasArrowNavigation={width > 1024}
      delaytime="3000"
      breakpoints={breakpoints}
      skeletonLoading={
        <CarouselLayoutSkeleton
          className="!py-0"
          breakpoints={breakpoints as any}
        >
          <CurrencyCardSkeleton />
        </CarouselLayoutSkeleton>
      }
    >
      <div className="py-10 border border-red-400">
        {currencyList?.map((item, index) => (
          <SwiperSlide key={index}>
            <div key={index} className="pt-7 pb-2 cursor-pointer">
              <CurrencyCard currencyInfo={item} />
            </div>
          </SwiperSlide>
        ))}
      </div>
    </CarouselLayout>
  )
}
