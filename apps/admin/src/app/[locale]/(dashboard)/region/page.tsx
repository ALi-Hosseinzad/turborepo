import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Regions from 'views/region'
import type { PagePropsType } from 'types/common'

const RegionPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Regions />
}

export default RegionPage
