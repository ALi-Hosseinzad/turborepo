import type { ProfileLegalPropsType } from '@/views/authorization/imports'
import {
  AuthenticationResult,
  ProfileView,
  UseProfileViewModel,
} from '@/views/authorization/imports'

export const Profile: React.FC<ProfileLegalPropsType> = ({ disableAuth }) => {
  const {
    dataProfileGet,
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
    isSuccessProfileGet,
    isVerify,
    isReject,
  } = UseProfileViewModel()

  return (
    <>
      <AuthenticationResult
        isReject={isReject}
        data={dataProfileGet?.authentication_result}
      />

      <ProfileView
        dataProfileGet={dataProfileGet}
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
        isPending={isPending}
        isSuccessProfileGet={isSuccessProfileGet}
        isVerify={isVerify}
        disableAuth={disableAuth}
      />
    </>
  )
}
