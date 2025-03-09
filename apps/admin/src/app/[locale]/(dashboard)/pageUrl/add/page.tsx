import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import PageUrlCreate from 'views/pageUrl/pageUrlCreate'
import type { PagePropsType } from 'types/common'

const AddPageUrlPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <PageUrlCreate />
}

export default AddPageUrlPage
