'use client'

import {
  ADD,
  ADMIN,
  FAQ,
  FAQ_URL,
  List,
  useFaqListViewModel,
  useTranslations,
} from './imports'

const Faqs = (): JSX.Element => {
  const { headInfo, bodyInfo } = useFaqListViewModel()
  const t = useTranslations()

  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={FAQ_URL}
      queryKey="faqs"
      tableUrlDeleteRequest={`${ADMIN}${FAQ_URL}`}
      tableEditNavigationLink={FAQ}
      tableAddNavigationLink={`${FAQ}/${ADD}`}
      tableAddBtnText={t('addFaq')}
      tableLabel={t('faq')}
    />
  )
}

export default Faqs
