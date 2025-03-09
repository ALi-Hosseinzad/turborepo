import type { ConfirmModalTypeDelete } from '../../types'
import { OstiganButton } from '../elements/button/ostiganButton'
import { ModalHeader } from './modalHeader'
import { OstiganModal } from './ostiganModal'

export const DeleteModal = (props: ConfirmModalTypeDelete): JSX.Element => {
  const {
    children,
    headerTitle,
    rejectTextButton,
    acceptTextButton,
    open,
    handleClose,
    isLoading,
    onSuccess,
    styleTypeSuccessBtn,
  } = props

  return (
    <OstiganModal open={open} handleClose={handleClose}>
      <div>
        <ModalHeader handleClose={handleClose} headerTitle={headerTitle} />
        <div className="flex flex-col justify-center px-8 pb-6">
          <div>{children}</div>
          <div className="flex gap-3 mt-6">
            <OstiganButton
              styleType={styleTypeSuccessBtn || 'error'}
              type="submit"
              variant="contained"
              fontSize="16px"
              padding="8px 16px"
              fullWidth
              isLoading={isLoading}
              disabled={isLoading}
              handleClick={onSuccess}
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
    </OstiganModal>
  )
}
