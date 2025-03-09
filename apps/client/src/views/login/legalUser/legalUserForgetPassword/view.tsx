'use client'

import {
  FormikTextField,
  FormWrapper,
  HaveUser,
  OstiganButton,
  useForgetPasswordViewModel,
  useTranslations,
} from '../../imports'

const ForgetPasswordView = (): JSX.Element => {
  const { initialValues, validationSchema, handleSubmit, isFetching } =
    useForgetPasswordViewModel()
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-2">
      <FormWrapper
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormikTextField
          name="email"
          type="email"
          title={t('email')}
          placeholder={`${t('email')} ${t('placeholderText')}`}
        />
        <OstiganButton
          className="!mt-6 w-full"
          variant="contained"
          type="submit"
          isLoading={isFetching}
          disabled={isFetching}
          padding="6px 0"
        >
          {t('sendCode')}
        </OstiganButton>
      </FormWrapper>
      <HaveUser />
    </div>
  )
}

export default ForgetPasswordView
