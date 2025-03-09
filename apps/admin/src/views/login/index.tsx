'use client'

import React from 'react'
import View from './view'
import { useLoginViewModel } from './viewModel'

const Login = (): JSX.Element => {
  const { handleLogin, isLoading, initialValues, loginSchema } =
    useLoginViewModel()

  return (
    <View
      isLoading={isLoading}
      handleLogin={handleLogin}
      initialValues={initialValues}
      loginSchema={loginSchema}
    />
  )
}

export default Login
