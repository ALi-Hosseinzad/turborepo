import {
  AuthenticationResult,
  SignatoryOwnerView,
  useSignatoryOwnerViewModel,
} from '@/views/authorization/imports'

const SignatoryOwner: React.FC = () => {
  const { allAuthResults } = useSignatoryOwnerViewModel()
  return (
    <>
      <AuthenticationResult
        isReject={allAuthResults?.length !== 0}
        data={allAuthResults}
      />

      <SignatoryOwnerView />
    </>
  )
}

export default SignatoryOwner
