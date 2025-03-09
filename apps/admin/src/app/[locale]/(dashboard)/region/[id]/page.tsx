import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import RegionEdit from 'views/region/regionEdit'
import type { PagePropsType } from 'types/common'

const EditRegionPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <RegionEdit />
}

export default EditRegionPage
