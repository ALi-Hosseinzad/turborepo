import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { TagCreate } from 'views/tag/tagCreate'
import type { PagePropsType } from 'types/common'

const AddTagPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <TagCreate />
}

export default AddTagPage
