import {
  BannerSkeleton,
  Carousel,
  GIFT_CARD,
  Image,
  Link,
  ONLINE_PAYMENT,
  SwiperSlide,
} from '../import'

export const BannerView = ({ bannerList, isLoading }) => {
  return (
    <Carousel
      hasArrowNavigation={false}
      hasPagination
      hasTouchMove
      loop
      slidesPerView={1}
      spaceBetween={50}
      delaytime="10000"
      speed={3000}
      isLoading={isLoading}
      skeletonLoading={<BannerSkeleton />}
    >
      {bannerList?.map(
        ({
          id,
          path,
          file_type_label: fileTypeLabel,
          href,
          gift_card_package_id: giftCardPackageId,
          service_id: serviceId,
        }) => {
          let route = '#'
          let isInternalLink = false
          if (href !== null) {
            route = href
          } else if (giftCardPackageId !== null) {
            route = `${GIFT_CARD}/${giftCardPackageId}`
            isInternalLink = true
          } else if (serviceId !== null) {
            route = `${ONLINE_PAYMENT}/${serviceId}`
            isInternalLink = true
          } else {
            route = '#'
          }

          return (
            <SwiperSlide key={id}>
              <div className=" cursor-pointer mb-6">
                <Link
                  rel="noopener noreferrer"
                  target={isInternalLink ? '_self' : '_blank'}
                  href={route as any}
                >
                  <div className="sm:h-64 lg:h-96 h-44 max-h-96 sm:max-h-64 lg:max-h-96">
                    <Image
                      src={path}
                      className="cursor-pointer rounded-lg"
                      alt={fileTypeLabel}
                      sizes="100%"
                      width={0}
                      priority
                      height={0}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          )
        },
      )}
    </Carousel>
  )
}
