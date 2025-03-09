import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { FormManagement } from 'views/formManagement'
import type { PagePropsType } from 'types/common'

const FormManagementsPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <FormManagement />
}

export default FormManagementsPage
