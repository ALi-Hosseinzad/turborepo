import type { CarouselLayoutType } from '../import'
import { Carousel } from '../import'

export const CarouselLayout = ({
  children,
  isLoading,
  isError,
  title,
  delaytime,
  disable,
  skeletonLoading,
  hasArrowNavigation = true,
  isAutoplay = true,
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
}: CarouselLayoutType) => {
  return (
    <>
      {disable ? null : (
        <div className="py-7">
          {isLoading || isError ? (
            skeletonLoading || <p>Loading...</p>
          ) : (
            <div className="flex flex-col">
              <div className="relative">
                <div className="absolute">
                  <p className="title-base sm:title-lg lg:title-2xl">{title}</p>
                </div>
              </div>
              <div className="">
                <Carousel
                  spaceBetween={20}
                  isLoading={isLoading}
                  hasTouchMove
                  isError={isError}
                  isAutoplay={isAutoplay}
                  hasArrowNavigation={hasArrowNavigation}
                  delaytime={delaytime}
                  skeletonLoading={skeletonLoading}
                  breakpoints={breakpoints}
                >
                  <div className="mt-2">{children}</div>
                </Carousel>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
