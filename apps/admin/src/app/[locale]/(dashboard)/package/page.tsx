import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Packages from 'views/package'
import type { PagePropsType } from 'types/common'

const PackagesPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Packages />
}

export default PackagesPage
