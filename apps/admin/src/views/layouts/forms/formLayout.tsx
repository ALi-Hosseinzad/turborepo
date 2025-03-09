import React from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { FormWrapper, Header2, OstiganButton } from 'ui'
import type { FormLayoutType } from 'types/layout'

export const FormLayout: React.FC<FormLayoutType> = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  titleHeader1,
  titleHeader2,
  hasCancleButton = true,
  disabled,
  dontShowCancelBtn,
  isLoading,
}) => {
  const router = useRouter()
  const t = useTranslations()

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps: any) => {
        return (
          <>
            <Header2 title={titleHeader1 as string} />
            <div className="bg-white rounded-lg p-8">
              <div className="flex flex-col">
                <Header2 title={titleHeader2 as string} />
                <div className="w-full flex flex-col items-end">
                  {typeof children === 'function'
                    ? children(formikProps)
                    : children}
                </div>
                <div className="flex gap-4 pt-24 mr-auto">
                  <OstiganButton
                    type="submit"
                    variant="contained"
                    fullWidth
                    // disabled={
                    //   !(
                    //     formikProps.isValid &&
                    //     formikProps.dirty &&
                    //     !formikProps.isSubmitting
                    //   )
                    // }
                    isLoading={isLoading}
                  >
                    {t('accept')}
                  </OstiganButton>
                  {dontShowCancelBtn || (
                    <OstiganButton
                      type="button"
                      styleType={hasCancleButton ? 'success' : 'error'}
                      variant="outlined"
                      fullWidth
                      disabled={disabled}
                      handleClick={() => {
                        router.back()
                      }}
                    >
                      {hasCancleButton ? t('cancel') : t('reject')}
                    </OstiganButton>
                  )}
                </div>
              </div>
            </div>
          </>
        )
      }}
    </FormWrapper>
  )
}
