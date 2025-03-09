import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { InputManagementCreate } from 'views/inputManagement/inputManagementCreate'
import type { PagePropsType } from 'types/common'

const AddNewInputPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <InputManagementCreate />
}

export default AddNewInputPage
