import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import BannerImage from 'views/bannerImage'
import type { PagePropsType } from 'types/common'

const BannerImagePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <BannerImage />
}

export default BannerImagePage
