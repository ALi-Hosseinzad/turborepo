import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { InputManagementEdit } from 'views/inputManagement/inputManagementEdit'
import type { PagePropsType } from 'types/common'

const AddEditInputPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <InputManagementEdit />
}

export default AddEditInputPage
