import { type UserData, useTranslations } from '../import'

function UseProfileLevel(userData: UserData): string {
  const t = useTranslations()

  const isLegal = userData?.is_legal
  const verifyState = userData?.verify_state

  if (isLegal) {
    const isFullyVerified = [
      verifyState?.verify_article_of_association,
      verifyState?.verify_bank_account,
      verifyState?.verify_official_gazette,
      verifyState?.verify_profile,
      verifyState?.verify_signatory,
      verifyState?.verify_undertaking,
    ].every(Boolean)

    return isFullyVerified ? t('verifiedUser') : t('unVerifiedUser')
  }

  if (!verifyState?.national_card) {
    return t('levelZero')
  }
  if (verifyState?.national_card && !verifyState?.bank_account) {
    return t('levelOne')
  }
  if (
    verifyState?.national_card &&
    verifyState?.bank_account &&
    !verifyState?.media_authorization
  ) {
    return t('levelTwo')
  }
  if (
    verifyState?.national_card &&
    verifyState?.bank_account &&
    verifyState?.media_authorization &&
    !verifyState?.guild
  ) {
    return t('levelThree')
  }
  if (
    verifyState?.national_card &&
    verifyState?.bank_account &&
    verifyState?.media_authorization &&
    verifyState?.guild
  ) {
    return t('levelFour')
  }

  return ''
}

export default UseProfileLevel
