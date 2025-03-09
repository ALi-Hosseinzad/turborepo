'use client'

import {
  EndAdornmentPassword,
  FormikTextField,
  FormWrapper,
  OstiganButton,
  useState,
  useTranslations,
} from '../../imports'

const LegalUserChangePasswordView = ({
  initialValues,
  handleSubmit,
  validationSchema,
  isPending,
}): any => {
  const t = useTranslations()
  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setShowRePassword] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <FormWrapper
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
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
          classnametitle="flex !mt-6"
          title={`${t('repeat')} ${t('password')}`}
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
          className="!mt-6 w-full"
          variant="contained"
          type="submit"
          isLoading={isPending}
          disabled={isPending}
          padding="6px 0"
        >
          {`${t('change')} ${t('password')}`}
        </OstiganButton>
      </FormWrapper>
    </div>
  )
}

export default LegalUserChangePasswordView
