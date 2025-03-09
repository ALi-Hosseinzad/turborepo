import GenerateMetadata from 'utils/generateMetadata'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import DashbordLayout from 'views/layouts/dashboardLayout/dashboardLayout'

export const metadata = GenerateMetadata({ title: '' }, { withSuffix: false })
export default function Layout({
  children,
  params: locale,
}: any): React.ReactElement {
  unstable(locale)

  return <DashbordLayout Children={children} />
}
