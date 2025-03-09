'use client'

import {
  AlertIcon,
  FormikTextField,
  FormWrapper,
  OstiganButton,
  useRealUserVerificationViewModel,
  useTranslations,
} from '../../imports'

const RealUserVerification = (): JSX.Element => {
  const {
    initialValues,
    handleSubmit,
    validationSchema,
    isPending,
    isSuccess,
  } = useRealUserVerificationViewModel()
  const t = useTranslations()

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => {
        return (
          <div className="flex flex-col gap-10 mx-2">
            <FormikTextField
              name="firstname"
              type="text"
              title={t('firstName')}
              placeholder="مثال:علی"
              size="small"
            />
            <FormikTextField
              name="lastname"
              type="text"
              title={t('lastName')}
              placeholder="مثال:احمدی"
            />
            <FormikTextField
              name="email"
              type="text"
              title={t('email')}
              placeholder="مثال:Example@gmail.com"
            />
            <div className="text-normal-xs text-yellow-500 flex gap-1">
              <AlertIcon />
              <p>{t('matchNameAndNationalNumber')}</p>
            </div>
            <OstiganButton
              className="mt-6"
              type="submit"
              variant="contained"
              fullWidth
              padding="6px 0"
              disabled={isPending || isSuccess}
              isLoading={isPending || isSuccess}
            >
              {t('loginOstigan')}
            </OstiganButton>
          </div>
        )
      }}
    </FormWrapper>
  )
}

export default RealUserVerification
