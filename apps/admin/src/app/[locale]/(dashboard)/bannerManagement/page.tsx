import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import BannerManagement from 'views/bannerManagement'
import type { PagePropsType } from 'types/common'

const BannerManagementPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <BannerManagement />
}

export default BannerManagementPage
