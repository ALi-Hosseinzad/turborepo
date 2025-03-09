import { ShareModalView, useShareModalViewModel } from '../../imports'

export const ShareModal = ({ open, handleClose, href }) => {
  const { modalData, shareHandler } = useShareModalViewModel(handleClose)
  return (
    <ShareModalView
      open={open}
      handleClose={handleClose}
      modalData={modalData}
      shareHandler={shareHandler}
      href={href}
    />
  )
}
