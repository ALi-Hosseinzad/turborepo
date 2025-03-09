import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'
import { type RootState } from '@/redux/store'

export const UseAccess = () => {
  const t = useTranslations()
  const { user: userData } = useSelector((state: RootState) => state.persist)
  const isLegal = userData?.is_legal
  const verifyState = userData?.verify_state

  const defaultPermissions = {
    authAccess: {
      value: false,
      message: t('authAlert'),
    },
    orderSubmitAccess: {
      value: false,
      message: t('orderSubmitAccessMessage'),
    },
    walletDepositAccess: {
      value: false,
      message: t('walletDepositAccessMessage'),
    },
    walletWithdrawAccess: {
      value: false,
      message: t('walletDepositAccessMessage'),
    },
    walletTransferAccess: {
      value: false,
      message: t('walletDepositAccessMessage'),
    },
  }

  const permissions = { ...defaultPermissions }

  if (isLegal) {
    const isFullyVerified = [
      'verify_article_of_association',
      'verify_bank_account',
      'verify_official_gazette',
      'verify_profile',
      'verify_signatory',
      'verify_undertaking',
    ].every((key) => verifyState?.[key])

    if (isFullyVerified) {
      Object.keys(permissions).forEach((key) => {
        permissions[key].value = true
      })
    } else {
      Object.keys(permissions).forEach((key) => {
        if (!key.includes('authAccess')) {
          permissions[key].message = t('AuthAccessMessage')
        }
      })
    }
  } else {
    const {
      national_card: nationalCard,
      bank_account: bankAccount,
      media_authorization: mediaAuthorization,
    } = verifyState || {}

    if (nationalCard && bankAccount) {
      permissions.orderSubmitAccess.value = true
      permissions.walletDepositAccess.value = true

      if (mediaAuthorization) {
        permissions.authAccess.value = true
        permissions.walletWithdrawAccess.value = true
        permissions.walletTransferAccess.value = true
      }
    }
  }

  return { permissions }
}
