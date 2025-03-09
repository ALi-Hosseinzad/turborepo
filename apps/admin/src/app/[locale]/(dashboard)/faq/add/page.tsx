import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import FaqCreate from 'views/faq/faqCreate'
import type { PagePropsType } from 'types/common'

const FaqCreatePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <FaqCreate />
}

export default FaqCreatePage
