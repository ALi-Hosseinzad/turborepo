import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from 'types/common'

const DashboardPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <div>Mohammad</div>
}

export default DashboardPage
