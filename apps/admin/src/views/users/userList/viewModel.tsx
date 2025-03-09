'use client'

import {
  ADD,
  BankInfoIcon,
  IdentificationIcon,
  List,
  USER_URL,
  USERS,
  UserSquareIcon,
  UserStatusModal,
  useState,
  useTranslations,
} from '../imports'
import type { UseListViewModelType } from '../imports'

// TODO:MEHRI
export const useUserListViewModel = (): UseListViewModelType => {
  const t = useTranslations()
  const [showModal, setShowModal] = useState<any>(false)
  const [userData, setUserData] = useState<any>({
    nationalCardData: [],
    bankCardData: [],
    userLevel: '',
  })

  const tabItems = [
    { key: 1, text: t('realUser'), icon: <UserSquareIcon /> },
    { key: 2, text: t('guildUser'), icon: <IdentificationIcon /> },
    { key: 3, text: t('legalUser'), icon: <BankInfoIcon /> },
  ]

  const headInfo = [
    t('id'),
    t('firstName'),
    t('lastName'),
    t('phone'),
    t('email'),
    t('status'),
    t('has_verified'),
  ]
  const headInfoLegal = [
    t('id'),
    t('companyName'),
    t('phone'),
    t('email'),
    t('status'),
    t('has_verified'),
  ]

  const handleVerifyState = (nationalCard, bankAccount): any => {
    if (nationalCard?.id) {
      if (nationalCard?.jibit_status == false) {
        return { status: 'pending', text: t('nationalCardPendding') }
      }
    }

    if (bankAccount?.length > 0) {
      const pendingBankCard = bankAccount.some((item) => item == 'pending')
      if (pendingBankCard) {
        return { status: 'pending', text: t('bankCardPendding') }
      }
    }

    return { status: 'noAction', text: t('noAction') }
  }

  const handleStatusHtml = (
    nationalCard: object[],
    bankAccount: object[],
    verifyState: string | number,
    id: string | number,
  ): any => {
    const verifiedStatus = handleVerifyState(nationalCard, bankAccount)
    return (
      <>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className={`min-w-28 flex justify-center items-center rounded-lg cursor-pointer py-2 px-4
        ${verifiedStatus.status == 'noAction' ? 'bg-tint-200 text-darkTypo' : ''} 
        ${verifiedStatus.status == 'pending' ? 'bg-warning-background text-warning-default' : ''}
        `}
            onClick={() => {
              setShowModal({ ...showModal, [id]: true })
              setUserData({
                bankCardData: bankAccount,
                nationalCardData: nationalCard,
                userLevel: verifyState,
              })
            }}
          >
            {verifiedStatus.text}
          </button>
        </div>

        {!showModal[id] || (
          <UserStatusModal
            id={id}
            userData={userData}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </>
    )
  }

  const handleBodyInfo = (dataList): any[] => {
    if (dataList?.length) {
      if (!dataList[0]?.is_legal) {
        return dataList?.map(
          ({
            id,
            phone,
            email,
            name: full,
            national_card: nationalCard,
            bank_account: bankAccount,
            verify_state: verifyState,
          }) => {
            const [firstName, familyName] = full
              ? full.split('_')
              : [null, null]
            let level = ''
            if (verifyState == 0) {
              level = t('zero')
            } else if (verifyState == 1) {
              level = t('one')
            } else {
              level = t('two')
            }
            return {
              id,
              firstName: firstName === null ? full : firstName,
              familyName: familyName === null ? full : familyName,
              phone,
              email,
              verifyState: `${t('userLevel')}${level}`,
              status: handleStatusHtml(nationalCard, bankAccount, level, id),
            }
          },
        )
      }
      return dataList?.map(
        ({
          id,
          company,
          email,
          phone,
          national_card: nationalCard,
          bank_account: bankAccount,
          verify_state: verifyState,
        }) => {
          let level = ''
          if (verifyState == 0) {
            level = t('zero')
          } else if (verifyState == 1) {
            level = t('one')
          } else {
            level = t('two')
          }
          return {
            id,
            companyName: company?.company_name,
            phone,
            email,
            verifyState: `${t('userLevel')}${level}`,
            status: handleStatusHtml(nationalCard, bankAccount, level, id),
          }
        },
      )
    }

    return []
  }

  const tabPanelItems = [
    <List
      key="1"
      bodyInfo={handleBodyInfo}
      headInfo={headInfo}
      url={USER_URL}
      queryParams={{}}
      queryKey="user-list"
      tableUrlDeleteRequest="admin/user"
      tableEditNavigationLink={USERS}
      tableAddNavigationLink={`${USERS}/${ADD}`}
      tableAddBtnText={t('createUser')}
    />,
    <List
      key="2"
      bodyInfo={handleBodyInfo}
      headInfo={headInfo}
      url={USER_URL}
      queryParams={{ filter: 'is_guild', filter_value: 1 }}
      queryKey="guild-user-list"
      tableUrlDeleteRequest="admin/user"
      tableEditNavigationLink={USERS}
      tableAddNavigationLink={`${USERS}/${ADD}`}
      tableAddBtnText={t('createUser')}
    />,
    <List
      key="3"
      bodyInfo={handleBodyInfo}
      headInfo={headInfoLegal}
      url={USER_URL}
      queryParams={{ filter: 'is_legal', filter_value: 1 }}
      queryKey="legal-user-list"
      tableUrlDeleteRequest="admin/user"
      tableEditNavigationLink={USERS}
      tableAddNavigationLink={`${USERS}/${ADD}`}
      tableAddBtnText={t('createUser')}
    />,
  ]

  return {
    userData,
    showModal,
    setShowModal,
    tabItems,
    tabPanelItems,
  }
}
