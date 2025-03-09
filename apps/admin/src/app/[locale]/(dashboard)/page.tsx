import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Dashboards from 'views/dashboard'
import type { PagePropsType } from 'types/common'

const RootPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Dashboards />
}

export default RootPage
