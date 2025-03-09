import {
  CarouselLayout,
  CarouselLayoutSkeleton,
  RecommendedCardSkeleton,
  RecommendedProductCard,
  SwiperSlide,
  useTranslations,
} from '../import'

export const RecommendedProductsView = ({
  recommendedProductsList,
  isLoading,
  isError,
  haldleProductClick,
}) => {
  const t = useTranslations()
  return (
    <CarouselLayout
      title={t('specialOffers')}
      isLoading={isLoading}
      isError={isError}
      delaytime="4000"
      skeletonLoading={
        <CarouselLayoutSkeleton>
          <RecommendedCardSkeleton />
        </CarouselLayoutSkeleton>
      }
    >
      {recommendedProductsList?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="cursor-pointer">
              <RecommendedProductCard
                data={item}
                haldleProductClick={haldleProductClick}
                hasFlag
                hasForverit={false}
              />
            </div>
          </SwiperSlide>
        )
      })}
    </CarouselLayout>
  )
}
