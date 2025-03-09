import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { FormManagementCreate } from 'views/formManagement/formManagementCreate'
import type { PagePropsType } from 'types/common'

const AddNewFormManagementPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <FormManagementCreate />
}

export default AddNewFormManagementPage
