import type { ConfirmModalType } from '../../types'
import { OstiganButton } from '../elements/button/ostiganButton'
import { FormWrapper } from '../formik/formWrapper'
import { ModalHeader } from './modalHeader'
import { OstiganModal } from './ostiganModal'

export const ConfirmModal = (props: ConfirmModalType): JSX.Element => {
  const {
    children,
    headerTitle,
    rejectTextButton,
    acceptTextButton,
    open,
    initialValues,
    validationSchema,
    handleClose,
    onSubmit,
    isLoading,
  } = props

  return (
    <OstiganModal open={open} handleClose={handleClose}>
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
                headerTitle={headerTitle}
              />

              <div className="flex flex-col justify-center px-8 pb-6">
                <div>{children}</div>
                <div className="flex gap-3">
                  <OstiganButton
                    type="submit"
                    variant="contained"
                    fontSize="16px"
                    padding="8px 16px"
                    fullWidth
                    isLoading={isLoading}
                    disabled={isLoading}
                  >
                    {acceptTextButton}
                  </OstiganButton>
                  <OstiganButton
                    type="button"
                    styleType="success"
                    variant="outlined"
                    fontSize="16px"
                    padding="8px 16px"
                    fullWidth
                    disabled={isLoading}
                    handleClick={handleClose}
                  >
                    {rejectTextButton}
                  </OstiganButton>
                </div>
              </div>
            </div>
          )
        }}
      </FormWrapper>
    </OstiganModal>
  )
}
