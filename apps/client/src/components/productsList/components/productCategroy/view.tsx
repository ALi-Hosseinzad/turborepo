import { Carousel, SwiperSlide, TextImageCard } from '../../imports'
import type { ProductsCategoryViewType } from '../../imports'
import ProductsCategorySkeleton from '../other/prodcutCategorySkeleton'

export const ProductsCategoryView = (props: ProductsCategoryViewType): any => {
  const {
    dataCategoryList,
    clientWindowHeight,
    setDataProductFilter,
    filterProductHandler,
    dataProductAll,
    isLoading,
  } = props
  return (
    <div
      className={`px-0 lg:px-48 ${
        clientWindowHeight
          ? 'fixed top-16 w-full bg-customWhite z-40  pb-0'
          : 'sm:pb-10 -mt-8 pb-10'
      }`}
    >
      <Carousel
        hasPagination={false}
        hasTouchMove
        hasArrowNavigation={false}
        isLoading={isLoading}
        breakpoints={{
          1280: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        skeletonLoading={<ProductsCategorySkeleton isLoading={isLoading} />}
      >
        <div>
          {dataCategoryList ? (
            <SwiperSlide>
              <div className="flex justify-center w-max cursor-pointer pb-3">
                <TextImageCard
                  filterList={{ name: 'همه', image: '/svg/allCategory.svg' }}
                  clientWindowHeight={clientWindowHeight}
                  onClick={() => setDataProductFilter(dataProductAll)}
                />
              </div>
            </SwiperSlide>
          ) : null}
          {dataCategoryList?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center w-max cursor-pointer pb-3">
                <TextImageCard
                  key={item.id}
                  filterList={item}
                  clientWindowHeight={clientWindowHeight}
                  onClick={() => {
                    filterProductHandler(item.id)
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Carousel>
    </div>
  )
}
