import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import PageUrlEdit from 'views/pageUrl/pageUrlEdit'
import type { PagePropsType } from 'types/common'

const EditPageUrlPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <PageUrlEdit />
}

export default EditPageUrlPage
