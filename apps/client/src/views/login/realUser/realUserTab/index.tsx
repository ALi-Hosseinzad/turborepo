'use client'

import {
  FormikTextField,
  FormWrapper,
  isEmptyObject,
  OstiganButton,
  useRealUserTabViewModel,
  useTranslations,
} from '../../imports'

const Login = (): JSX.Element => {
  const {
    handleSubmitPhone,
    isPending,
    isSuccess,
    validationSchema,
    handleChangePhone,
  } = useRealUserTabViewModel()
  const t = useTranslations()

  return (
    <FormWrapper
      initialValues={{ phone: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmitPhone}
    >
      {({ errors, setFieldValue }) => (
        <>
          <div className="my-6" style={{ direction: 'ltr' }}>
            <FormikTextField
              sizeInput="Small"
              name="phone"
              type="text"
              classnametitle="flex flex-row-reverse text-base mb-2"
              title={t('mobileNumber')}
              InputProps={{
                startAdornment: (
                  <div className="text-primary-default text-nowrap text-base ml-4">
                    +98 |
                  </div>
                ),
              }}
              inputProps={{ maxLength: 10 }}
              placeholder="91212121212"
              disabled={isPending}
              maxRows={10}
              onChange={(e: any) => handleChangePhone(e, setFieldValue)}
            />
          </div>
          <OstiganButton
            className="mt-6 w-full"
            type="submit"
            variant="contained"
            disabled={!isEmptyObject(errors) || isPending || isSuccess}
            isLoading={isPending || isSuccess}
            padding="6px 0"
          >
            {t('sendCode')}
          </OstiganButton>
        </>
      )}
    </FormWrapper>
  )
}

export default Login
