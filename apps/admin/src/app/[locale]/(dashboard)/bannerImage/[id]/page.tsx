import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import BannerImageEdit from 'views/bannerImage/bannerImageEdit'
import type { PagePropsType } from 'types/common'

const AddBannerImagePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <BannerImageEdit />
}
export default AddBannerImagePage
