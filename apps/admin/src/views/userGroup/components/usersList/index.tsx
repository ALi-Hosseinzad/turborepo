'use client'

import { List, USER_URL } from '../../imports'
import { useUserListViewModel } from './viewModel'

const UserGroups = (props): JSX.Element => {
  const { formikProps, isSuccessCreate } = props
  const { bodyInfo, headInfo } = useUserListViewModel(
    formikProps,
    isSuccessCreate,
  )

  return (
    <>
      {!bodyInfo || (
        <List
          bodyInfo={bodyInfo}
          headInfo={headInfo}
          url={USER_URL}
          queryKey="users"
        />
      )}
    </>
  )
}

export default UserGroups
