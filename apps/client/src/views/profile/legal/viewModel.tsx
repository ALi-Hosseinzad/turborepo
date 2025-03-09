import type { BreadcrumbType } from '@/types/checkout'
import { UserPersist } from '@/views/authorization/imports'
import { PROFILE } from '@/constants/routes'
import type { TabUserItemType } from '../imports'
import {
  BankAccountLegalProfileView,
  BankInfoIcon,
  CompletedInfoView,
  DescriptionIcon,
  ProfileLegalView,
  UserSquareIcon,
  useTranslations,
} from '../imports'

export const useUserLegalViewModel = (): any => {
  const t = useTranslations()
  const { user } = UserPersist()

  const isLegal = user?.verify_state

  const tabLegalUserItems: TabUserItemType[] = [
    {
      key: 1,
      text: (
        <span className=" text-center !text-lg not-italic font-semibold">
          {t('OrganizationalInformation')}
        </span>
      ),
      icon: <UserSquareIcon />,
      disabled: !isLegal?.verify_profile,
    },
    {
      key: 2,
      text: (
        <span className=" text-center !text-lg not-italic font-semibold">
          {t('fifthLevelDescriptionLegal')}
        </span>
      ),
      icon: <DescriptionIcon />,
      disabled:
        !isLegal?.verify_article_of_association &&
        !isLegal?.verify_official_gazette &&
        !isLegal?.verify_signatory &&
        !isLegal?.verify_undertaking,
    },
    {
      key: 3,
      text: (
        <span className=" text-center !text-lg not-italic font-semibold">
          {t('bankInfo')}
        </span>
      ),
      icon: <BankInfoIcon />,
      disabled: !isLegal?.verify_bank_account,
    },
  ]

  const tabLegalUserPanelItems = [
    <ProfileLegalView key="1" />,
    <CompletedInfoView key="2" />,
    <BankAccountLegalProfileView key="3" />,
  ]
  const tabButtonsStyles = {
    borderRadius: '8px',
  }

  const getBreadCrumbs = (): BreadcrumbType[] => {
    return [
      {
        name: t('profile'),
        url: PROFILE,
      },
    ]
  }
  return {
    tabLegalUserItems,
    tabLegalUserPanelItems,
    tabButtonsStyles,
    getBreadCrumbs,
  }
}
