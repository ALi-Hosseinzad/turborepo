import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from 'types/common'
import Tag from '../../../../views/tag'

const tagPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Tag />
}

export default tagPage
