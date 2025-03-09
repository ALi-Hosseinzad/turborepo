import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import BannerManagementEdit from 'views/bannerManagement/bannerManagementEdit'
import type { PagePropsType } from 'types/common'

const EditBannerManagementPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <BannerManagementEdit />
}

export default EditBannerManagementPage
