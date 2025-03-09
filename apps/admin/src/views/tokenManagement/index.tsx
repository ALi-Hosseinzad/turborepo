'use client'

import {
  ADD,
  GIFT_CARD_TOKEN_URL,
  List,
  TOKEN_MANAGEMENT,
  useTokenManagementListViewModel,
  useTranslations,
} from './imports'

const TokenManagement = (): JSX.Element => {
  const { headInfo, bodyInfo } = useTokenManagementListViewModel()
  const t = useTranslations()
  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={GIFT_CARD_TOKEN_URL}
      queryKey="token-management-list"
      tableUrlDeleteRequest="admin/gift-card-token"
      tableEditNavigationLink={TOKEN_MANAGEMENT}
      tableAddNavigationLink={`${TOKEN_MANAGEMENT}/${ADD}`}
      tableAddBtnText={t('addNewToken')}
      tableLabel={t('tokensManagement')}
    />
  )
}

export default TokenManagement
