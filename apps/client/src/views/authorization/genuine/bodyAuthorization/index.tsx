import { useCallback } from 'react'
import { Loading } from 'ui'
import { DASHBOARD } from '@/constants/routes'
import { useRouter } from '@/components/nextIntl/navigation'
import { UserPersist } from '../imports'
import { BankAccount } from './bankAccount'
import GuildInformation from './guild'
import MediaAuthorization from './mediaAuthorization'
import AuthLevelForm from './nationalCard'

const BodyAuthorization = () => {
  const router = useRouter()
  const { user } = UserPersist()
  const verifyState = user?.verify_state
  const renderConditionalComponent = useCallback(() => {
    if (!verifyState) return null

    const {
      national_card: nationalCard,
      bank_account: bankAccount,
      media_authorization: mediaAuthorization,
      guild,
    } = verifyState
    if (nationalCard && bankAccount && mediaAuthorization && guild) {
      router.push(DASHBOARD)
      return null
    }

    if (!nationalCard) {
      return <AuthLevelForm />
    }

    if (!bankAccount) {
      return <BankAccount />
    }

    if (!mediaAuthorization) {
      return <MediaAuthorization />
    }

    if (!guild) {
      return <GuildInformation />
    }
  }, [user, router])

  if (!user) {
    return <Loading isLoading />
  }

  return (
    <div className="flex flex-row">
      <div className="basis-full">{renderConditionalComponent()}</div>
    </div>
  )
}

export default BodyAuthorization
