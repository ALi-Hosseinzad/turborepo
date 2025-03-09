import { BannerView, useBannerViewModel } from '../import'

export const Banner = () => {
  const { bannerList, isLoading } = useBannerViewModel()

  return <BannerView bannerList={bannerList} isLoading={isLoading} />
}
