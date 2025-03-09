import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from 'types/common'
import BannerManagementCreate from '../../../../../views/bannerManagement/bannerManagementCreate'

const AddBannerManagementPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <BannerManagementCreate />
}

export default AddBannerManagementPage
