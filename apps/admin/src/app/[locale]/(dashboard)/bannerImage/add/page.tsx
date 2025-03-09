import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from 'types/common'
import BannerImageCreate from '../../../../../views/bannerImage/bannerImageCreate'

const AddBannerImagePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <BannerImageCreate />
}
export default AddBannerImagePage
