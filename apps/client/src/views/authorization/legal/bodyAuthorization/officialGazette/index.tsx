import React from 'react'
import { AuthenticationResult } from '@/views/authorization/component/authenticationResult'
import ProfileView from './view'
import { UseProfileViewModel } from './viewModel'

export const OfficialGazette: React.FC = () => {
  const {
    dataProfileGet,
    isReject,
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
    isSuccessProfileGet,
    isVerify,
    guidelinesTextKeys,
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
        guidelinesTextKeys={guidelinesTextKeys}
      />
    </>
  )
}

export default OfficialGazette
