'use client '

import { LevelsAuthorization, UserPersist } from '../imports'

const HeadAuthorizationView = (): JSX.Element => {
  const { user } = UserPersist()

  return <>{user ? <LevelsAuthorization user={user} /> : null}</>
}

export default HeadAuthorizationView
