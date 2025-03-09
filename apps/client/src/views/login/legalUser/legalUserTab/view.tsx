'use client'

import {
  EndAdornmentPassword,
  FormikTextField,
  FormWrapper,
  NotHaveUserAndForgetPass,
  OstiganButton,
  useLegalUserTabViewModel,
  useState,
  useTranslations,
} from '../../imports'

const LegalUserTabView = () => {
  const t = useTranslations()
  const { initialValues, validationSchema, handleSubmit, isPending } =
    useLegalUserTabViewModel()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="mt-6">
      <FormWrapper
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <FormikTextField
            name="email"
            type="email"
            title={t('email')}
            sizeInput="Small"
            placeholder={`${t('email')} ${t('placeholderText')}`}
          />
          <FormikTextField
            sizeInput="Small"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder={`${t('password')} ${t('placeholderText')}`}
            title={t('password')}
            InputProps={{
              endAdornment: (
                <EndAdornmentPassword
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              ),
            }}
          />
          <OstiganButton
            className="w-full"
            variant="contained"
            type="submit"
            isLoading={isPending}
            disabled={isPending}
          >
            {t('login')}
          </OstiganButton>
        </div>
      </FormWrapper>
      <NotHaveUserAndForgetPass />
    </div>
  )
}

export default LegalUserTabView
