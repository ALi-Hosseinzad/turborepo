'use client'

import type { LoginPropsType } from './imports'
import {
  FormikTextField,
  FormWrapper,
  LoginOstiganIcon,
  OstiganButton,
  React,
  useTranslations,
} from './imports'

const LoginView: React.FC<LoginPropsType> = ({
  handleLogin,
  isLoading,
  initialValues,
  loginSchema,
}) => {
  const t = useTranslations()

  return (
    <div className="md:w-2/3 sm:w-3/4 p-10 mx-auto mt-36 max-w-lg">
      <LoginOstiganIcon className="m-auto mb-12" />
      <span className=" text-primary-default text-right font-bold text-lg ">
        {t('loginOstigan')}
      </span>
      <FormWrapper
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {(formikProps: any) => {
          return (
            <div className="flex mt-3 flex-col flex-wrap">
              <FormikTextField
                className="!mb-5"
                type="phone"
                title={t('phone')}
                name="phone"
                placeholder={`${t('example')} : 09121111111 `}
              />
              <FormikTextField
                type="password"
                title={t('password')}
                name="password"
                placeholder={t('password')}
                className="!mb-7"
              />
              <OstiganButton
                type="submit"
                variant="contained"
                fullWidth
                isLoading={isLoading}
                disabled={!formikProps.isValid || isLoading}
              >
                {t('login')}
              </OstiganButton>
            </div>
          )
        }}
      </FormWrapper>
    </div>
  )
}

export default LoginView
