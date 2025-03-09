'use client'

import {
  LegalUserChangePasswordView,
  useLegalUserChangePasswordViewModel,
} from '../../imports'

const LegalUserChangePassword = (): any => {
  const { initialValues, validationSchema, handleSubmit, isPending } =
    useLegalUserChangePasswordViewModel()

  return (
    <LegalUserChangePasswordView
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validationSchema={validationSchema}
      isPending={isPending}
    />
  )
}

export default LegalUserChangePassword
