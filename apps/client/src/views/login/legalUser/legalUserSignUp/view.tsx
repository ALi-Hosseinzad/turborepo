'use client'

import {
  EndAdornmentPassword,
  FormikTextField,
  FormWrapper,
  HaveUser,
  OstiganButton,
  useLegalUserSignUpViewModel,
  useState,
  useTranslations,
} from '../../imports'

const LegalUserSignUpView = (): any => {
  const t = useTranslations()
  const { initialValues, validationSchema, handleSubmit, isPending } =
    useLegalUserSignUpViewModel()
  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setShowRePassword] = useState(false)

  return (
    <>
      <FormWrapper
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <FormikTextField
            name="company_name"
            sizeInput="Small"
            title={t('userName')}
            placeholder={`${t('userName')} ${t('placeholderText')}`}
          />
          <FormikTextField
            name="email"
            type="email"
            title={t('email')}
            sizeInput="Small"
            placeholder={`${t('email')} ${t('placeholderText')}`}
          />
          <FormikTextField
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder={`${t('password')} ${t('placeholderText')}`}
            title={t('password')}
            sizeInput="Small"
            InputProps={{
              endAdornment: (
                <EndAdornmentPassword
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              ),
            }}
          />
          <FormikTextField
            name="password_confirmation"
            sizeInput="Small"
            title={t('password')}
            placeholder={`${t('password')} ${t('placeholderText')}`}
            type={showRePassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <EndAdornmentPassword
                  showPassword={showRePassword}
                  setShowPassword={setShowRePassword}
                />
              ),
            }}
          />
          <OstiganButton
            className="!mt-4 w-full"
            variant="contained"
            type="submit"
            isLoading={isPending}
            disabled={isPending}
            padding="6px 0"
          >
            {t('submit')}
          </OstiganButton>
        </div>
      </FormWrapper>
      <HaveUser />
    </>
  )
}

export default LegalUserSignUpView
