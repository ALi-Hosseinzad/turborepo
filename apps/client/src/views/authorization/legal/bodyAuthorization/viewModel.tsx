import {
  ArticleOfAssociation,
  BankAccount,
  DASHBOARD,
  Loading,
  OfficialGazette,
  Profile,
  SignatoryOwner,
  Undertaking,
  useCallback,
  useRouter,
  UserPersist,
} from '../../imports'

const BodyAuthorizationLegalViewModel = () => {
  const router = useRouter()
  const { user } = UserPersist()
  const verifyState = user?.verify_state

  const renderConditionalComponent = useCallback(() => {
    if (!verifyState) return null

    const {
      verify_article_of_association: articleOfAssociation,
      verify_bank_account: bankAccount,
      verify_official_gazette: officialGazette,
      verify_profile: profile,
      verify_signatory: signatory,
      verify_undertaking: undertaking,
    } = verifyState

    if (bankAccount) {
      router.push(DASHBOARD)
      return null
    }

    if (!profile) {
      return <Profile />
    }

    if (!officialGazette) {
      return <OfficialGazette />
    }

    if (!articleOfAssociation) {
      return <ArticleOfAssociation />
    }

    if (!signatory) {
      return <SignatoryOwner />
    }
    if (!undertaking) {
      return <Undertaking />
    }

    if (!bankAccount) {
      return <BankAccount />
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

export default BodyAuthorizationLegalViewModel
