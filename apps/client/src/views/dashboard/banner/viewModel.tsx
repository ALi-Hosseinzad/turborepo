import {
  BANNER_URL,
  useAxiosQuery,
  useEffect,
  useState,
  useWindowDimensions,
} from '../import'

export const useBannerViewModel = () => {
  const { width } = useWindowDimensions()

  const [bannerList, setBannerList] = useState<Record<string, any>[]>([])
  const { data, isSuccess, isLoading } = useAxiosQuery({
    url: `${BANNER_URL}?platform_type=site`,
    queryKey: ['banner'],
  })

  const handleBannerList = (breakPoint) => {
    data[0]?.banner_images?.filter(
      ({
        href,
        banner_responsive: bannerResponsive,
        gift_card_package_id: giftCardPackageId,
        service_id: serviceId,
      }) => {
        return bannerResponsive != null
          ? bannerResponsive?.filter(
              ({ id, width: bannerWidth, image: path }) => {
                return bannerWidth == breakPoint
                  ? setBannerList((prev) => [
                      ...prev,
                      {
                        id,
                        width,
                        path,
                        href,
                        giftCardPackageId,
                        serviceId,
                      },
                    ])
                  : null
              },
            )
          : null
      },
    )
  }

  useEffect(() => {
    if (isSuccess) {
      if (width > 768) {
        setBannerList(data[0]?.banner_images)
      } else {
        setBannerList([])
        if (width <= 768 && width > 425) {
          handleBannerList(768)
        } else {
          handleBannerList(768)
        }
      }
    }
  }, [data, width])

  return { bannerList, isLoading }
}
