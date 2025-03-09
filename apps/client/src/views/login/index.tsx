'use client'

import {
  AuthLayout,
  AuthTab,
  type RootState,
  useAuthViewModel,
  useSelector,
} from './imports'

const Login = (): any => {
  const { getAuthTitle, CurrentAuthComponent } = useAuthViewModel()
  const { curStep } = useSelector((state: RootState) => state.auth)

  return (
    <AuthLayout title={getAuthTitle()}>
      {curStep === 'initStep' ? <AuthTab /> : <CurrentAuthComponent />}
    </AuthLayout>
  )
}

export default Login
