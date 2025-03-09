import { UserPersist } from '@/views/authorization/imports'
import type { TabUserItemType } from '../imports'
import {
  BankAccountProfileView,
  BankInfoIcon,
  GuildViewProfile,
  IdentificationIcon,
  IdentificationInfoView,
  PersonalInfoView,
  UserGuildIcon,
  UserSquareIcon,
  useTranslations,
} from '../imports'

export const useUserGenuineViewModel = () => {
  const t = useTranslations()
  const { user } = UserPersist()

  const isLegal = user?.verify_state

  const tabUserItems: TabUserItemType[] = [
    {
      key: 1,
      text: (
        <span className="text-center !text-lg not-italic font-semibold">
          {t('personalInfo')}
        </span>
      ),
      icon: <UserSquareIcon />,
    },
    {
      key: 2,
      text: (
        <span className="text-center !text-lg not-italic font-semibold">
          {t('nationalInf')}
        </span>
      ),
      icon: <IdentificationIcon />,
      disabled: !isLegal?.national_card,
    },
    {
      key: 3,
      text: (
        <span className="text-center !text-lg not-italic font-semibold">
          {t('bankInfo')}
        </span>
      ),
      icon: <BankInfoIcon />,
      disabled: !isLegal?.bank_account,
    },
    {
      key: 4,
      text: (
        <span className="text-center !text-lg not-italic font-semibold">
          {t('guildInformation')}
        </span>
      ),
      icon: <UserGuildIcon />,
      disabled: !isLegal?.guild,
    },
  ]

  const tabUserPanelItems = [
    <PersonalInfoView key="1" />,
    <IdentificationInfoView key="2" />,
    <BankAccountProfileView key="3" />,
    <GuildViewProfile key="4" />,
  ]
  const tabButtonsStyles = {
    borderRadius: '8px',
  }
  return {
    tabUserItems,
    tabUserPanelItems,
    tabButtonsStyles,
  }
}
