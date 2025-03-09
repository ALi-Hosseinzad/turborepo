import {
  AuthenticationResult,
  UndertakingView,
  useUndertakingViewModel,
} from '@/views/authorization/imports'

const Undertaking: React.FC = () => {
  const { dataUndertakingGet, isReject } = useUndertakingViewModel()

  return (
    <>
      <AuthenticationResult
        isReject={isReject}
        data={dataUndertakingGet?.authentication_result}
      />

      <UndertakingView />
    </>
  )
}

export default Undertaking
