import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { TagEdit } from 'views/tag/tagEdit'
import type { PagePropsType } from 'types/common'

const EditTagPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <TagEdit />
}

export default EditTagPage
