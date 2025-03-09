import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import FaqEdit from 'views/faq/faqEdit'
import type { PagePropsType } from 'types/common'

const FaqEditPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <FaqEdit />
}

export default FaqEditPage
