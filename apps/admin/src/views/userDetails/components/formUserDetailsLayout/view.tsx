import type { FormUserDetailsLayoutType } from '../../imports'
import {
  ConfirmModal,
  FormikSelect,
  Header2,
  OstiganButton,
  useTranslations,
} from '../../imports'

export const FormUserDetailsLayoutView = (
  props: FormUserDetailsLayoutType,
): JSX.Element => {
  const {
    children,
    isLoading,
    dataConfirmOptions,
    isLoadingConfirmOptions,
    isLoadingPostConfirmOptions,
    initialValuesConfirmOptions,
    validationSchemaConfirmOptions,
    handleConfirm,
    handleOpen,
    handleClose,
    showConfirmModal,
    titleHeader2,
    hasButton = true,
    disabledButton,
    id,
    url,
  } = props
  const t = useTranslations()

  return (
    <div className="relative bg-white rounded-lg p-8">
      <div className="flex flex-col">
        {titleHeader2 ? <Header2 title={titleHeader2} /> : null}
        <div className="w-full flex flex-col">{children}</div>
        {hasButton ? (
          <>
            <div className="grid grid-cols-2 gap-4 pt-12 mr-auto">
              <OstiganButton
                type="button"
                variant="contained"
                fullWidth
                disabled={isLoading || disabledButton}
                handleClick={() => {
                  handleOpen('accept')
                }}
              >
                {t('accept')}
              </OstiganButton>
              <OstiganButton
                type="button"
                styleType="error"
                variant="outlined"
                fullWidth
                disabled={isLoading || disabledButton}
                padding="6px 25px"
                handleClick={() => {
                  handleOpen('reject')
                }}
              >
                {t('reject')}
              </OstiganButton>
            </div>
            <ConfirmModal
              open={showConfirmModal.accept}
              handleClose={handleClose}
              headerTitle={t('nationalInf')}
              rejectTextButton={t('review')}
              acceptTextButton={t('doAccept')}
              initialValues={initialValuesConfirmOptions}
              isLoading={isLoadingPostConfirmOptions}
              onSubmit={async () => {
                await handleConfirm({ id, url, isVerify: 1 })
              }}
            >
              <p className="text-center py-8">{t('confirmDataQuestion')}</p>
            </ConfirmModal>
            <ConfirmModal
              open={showConfirmModal.reject}
              handleClose={handleClose}
              headerTitle={t('nationalInf')}
              rejectTextButton={t('return')}
              acceptTextButton={t('accept')}
              isLoading={isLoadingPostConfirmOptions}
              initialValues={initialValuesConfirmOptions}
              validationSchema={validationSchemaConfirmOptions}
              onSubmit={async (values: any) => {
                await handleConfirm({ id, url, isVerify: 0, values })
              }}
            >
              <div className="flex flex-col gap-3 w-full py-10">
                <p>{t('disapprovalReason')}</p>

                <FormikSelect
                  listOptions={dataConfirmOptions}
                  optionLabel="description"
                  optionValue="description"
                  name="reason"
                  placeholder={t('disapprovalReason')}
                  isLoading={isLoadingConfirmOptions}
                  addExteraOption
                />
              </div>
            </ConfirmModal>
          </>
        ) : null}
      </div>
    </div>
  )
}
