import { AuthenticationResult } from '@/views/authorization/imports'
import type { AuthLevelFormPropsType } from '../../imports'
import AuthLevelFormView from './view'
import { UseNationalCardViewModel } from './viewModel'

const AuthLevelForm: React.FC<AuthLevelFormPropsType> = ({ disableAuth }) => {
  const { dataNationalCardGet, isReject } = UseNationalCardViewModel()

  return (
    <>
      <AuthenticationResult
        isReject={Boolean(isReject)}
        data={dataNationalCardGet?.authentication_result}
      />

      <AuthLevelFormView disableAuth={disableAuth} />
    </>
  )
}

export default AuthLevelForm
