import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { FormManagementEdit } from 'views/formManagement/formManagementEdit'
import type { PagePropsType } from 'types/common'

const EditFormManagementPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <FormManagementEdit />
}

export default EditFormManagementPage
