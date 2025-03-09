import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import RegionCreate from 'views/region/regionCreate'
import type { PagePropsType } from 'types/common'

const AddNewRegionPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <RegionCreate />
}

export default AddNewRegionPage
