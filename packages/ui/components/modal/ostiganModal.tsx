import Modal from '@mui/material/Modal'
import type { ModalType } from '../../types'

export const OstiganModal: React.FC<ModalType> = (props): JSX.Element => {
  const {
    children,
    contentStyle,
    borderRadius = '8px',
    border,
    boxShadow,
    padding,
    open,
    handleClose,
  } = props

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '89vw',
    maxWidth: '450px',
    backgroundColor: 'white',
    border,
    borderRadius,
    boxShadow,
    padding,
    direction: 'rtl',
    ...contentStyle,
  }

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <div style={style as object}>{children}</div>
    </Modal>
  )
}
