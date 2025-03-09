import { AuthenticationResult } from '@/views/authorization/imports'
import MediaAuthorizationView from './view'
import { UseMediaAuthorizationViewModel } from './viewModel'

const MediaAuthorization: React.FC = () => {
  const { dataMediaGet, isReject } = UseMediaAuthorizationViewModel()
  return (
    <>
      <AuthenticationResult
        isReject={Boolean(isReject)}
        data={dataMediaGet?.authentication_result}
      />

      <MediaAuthorizationView />
    </>
  )
}

export default MediaAuthorization
