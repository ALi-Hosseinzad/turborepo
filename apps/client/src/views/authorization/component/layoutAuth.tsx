import React from 'react'
import { Skeleton } from '@mui/material'
import {
  FormWrapper,
  Header1,
  type LayoutAuthType,
  OstiganButton,
  useTranslations,
} from '../genuine/imports'

const LayoutAuth: React.FC<LayoutAuthType> = ({
  initialValues,
  validationSchema,
  handleSubmit,
  showWarning,
  textWarning,
  isPending,
  titleLayout,
  children,
  disabled = false,
  showOstiganButton = true,
  deactivateBtn = false,
  TextDeactivateBtn,
  disabledDeactivateBtn = false,
  handleDeactivate,
  isLoading = false,
}) => {
  const t = useTranslations()

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <>
          <div className="mt-12 p-9 bg-white">
            <div className="basis-full flex !items-center gap-2 w-full pt-2 ">
              {isLoading ? (
                <Skeleton animation="wave" width="20%" height={32} />
              ) : (
                <Header1
                  className="flex !items-center"
                  title={t(`${titleLayout}`)}
                >
                  {showWarning ? (
                    <>
                      :
                      <span className="text-warning px-4 !font-medium !text-sm !leading-8 text-warning-default">
                        {textWarning}
                      </span>
                    </>
                  ) : null}
                </Header1>
              )}
            </div>

            {children}
          </div>

          {showOstiganButton ? (
            <div className="mt-6 pb-3 mx-5 md:mx-1 flex justify-end">
              {isLoading ? (
                <Skeleton animation="wave" width="10%" height={60} />
              ) : (
                <>
                  {deactivateBtn ? (
                    <OstiganButton
                      disabled={
                        disabledDeactivateBtn
                          ? disabledDeactivateBtn
                          : isPending
                      }
                      isLoading={isPending}
                      className="my-6 !mx-5 text-red-800"
                      type="button"
                      variant="outlined"
                      styleType="error"
                      handleClick={handleDeactivate}
                    >
                      {t(`${TextDeactivateBtn}`)}
                    </OstiganButton>
                  ) : null}

                  <OstiganButton
                    disabled={
                      !formikProps.isValid || (disabled ? disabled : isPending)
                    }
                    isLoading={isPending}
                    className="my-6 !mx-2"
                    type="submit"
                    variant="contained"
                  >
                    {t('save')}
                  </OstiganButton>
                </>
              )}
            </div>
          ) : null}
        </>
      )}
    </FormWrapper>
  )
}

export default LayoutAuth
