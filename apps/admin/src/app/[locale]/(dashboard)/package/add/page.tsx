import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { PackageCreate } from 'views/package/packageCreate'
import type { PagePropsType } from 'types/common'

const AddNewPackagePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <PackageCreate />
}

export default AddNewPackagePage
