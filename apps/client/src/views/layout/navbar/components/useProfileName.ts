import { type UserNameType, useTranslations } from '../import'

export default function UseProfileName(userData: UserNameType): string {
  const t = useTranslations()
  let profileName = ''
  if (userData?.is_legal) {
    profileName = userData?.company?.company_name
      ? userData?.company?.company_name?.split('_').join(' ')
      : t('ostiganUser')
  } else {
    profileName = userData?.name
      ? userData?.name?.split('_').join(' ')
      : t('ostiganUser')
  }
  return profileName
}
