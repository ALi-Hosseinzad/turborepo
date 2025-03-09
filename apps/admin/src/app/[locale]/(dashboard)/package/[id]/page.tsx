import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { PackageEdit } from 'views/package/packageEdit'
import type { PagePropsType } from 'types/common'

const EditPackagesPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <PackageEdit />
}

export default EditPackagesPage
