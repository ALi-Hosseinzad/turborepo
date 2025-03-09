'use client'

import { UserCreateView, useUserCreateViewModel } from '../imports'

const UserCreate: React.FC = () => {
  const { initialValues, validationSchema, onSubmit, isPendingPostData } =
    useUserCreateViewModel()

  return (
    <UserCreateView
      initialValues={initialValues}
      validationSchema={validationSchema}
      isPendingPostData={isPendingPostData}
      onSubmit={onSubmit}
    />
  )
}

export default UserCreate
