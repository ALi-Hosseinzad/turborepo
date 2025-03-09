'use client'

import { HeadAuthorizationView } from '../genuine/imports'
import BodyAuthorizationLegal from './bodyAuthorization'

const AuthorizationLegal = () => {
  return (
    <>
      <HeadAuthorizationView />
      <BodyAuthorizationLegal />
    </>
  )
}

export default AuthorizationLegal
