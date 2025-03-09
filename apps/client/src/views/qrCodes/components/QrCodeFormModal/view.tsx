import React from 'react'
import { useTranslations } from 'next-intl'
import { FormikTextField, FormWrapper, Loading, OstiganButton } from 'ui'
import { ModalHeader } from 'ui/components/modal/modalHeader'

export const QrCodeFormModalView = ({
  initialValues,
  validationSchema,
  handleClose,
  isLoadingGetData,
  isPendingPostData,
  onSubmit,
}) => {
  const t = useTranslations()
  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <div>
            <ModalHeader
              handleClose={handleClose}
              headerTitle={t('addNewQrCode')}
            />

            <div className="flex flex-col justify-center px-8 pb-6">
              <div className="flex flex-col gap-10 py-8">
                <Loading isLoading={isLoadingGetData} />
                <FormikTextField
                  name="title"
                  title={t('enterYourTitle')}
                  disabled={isPendingPostData}
                />
                <FormikTextField
                  name="price"
                  title={t('QrCodePrice')}
                  disabled={isPendingPostData}
                />
                <FormikTextField
                  name="description"
                  title={t('description')}
                  multiline
                  rows={5}
                  disabled={isPendingPostData}
                />
              </div>
              <div className="flex gap-3">
                <OstiganButton
                  type="submit"
                  variant="contained"
                  fontSize="16px"
                  padding="8px 16px"
                  fullWidth
                  isLoading={isPendingPostData}
                  disabled={isPendingPostData || isLoadingGetData}
                >
                  {t('save')}
                </OstiganButton>
              </div>
            </div>
          </div>
        )
      }}
    </FormWrapper>
  )
}
