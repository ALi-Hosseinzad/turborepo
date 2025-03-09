import React from 'react'
import { useSelector } from 'react-redux'
import { useQrCodeItemViewModel } from '../../imports'
import { ShareModal } from '../shareModal'
import { UserQrCodeview } from './view'
import type { RootState } from '@/redux/store'

export const UserQrCode = () => {
  const { wallet } = useSelector((state: RootState) => state.persist)
  const { showModel, setShowModal } = useQrCodeItemViewModel()

  return (
    <>
      <UserQrCodeview
        wallet={wallet}
        showModel={showModel}
        setShowModal={setShowModal}
      />
      {showModel.share ? (
        <ShareModal
          href={wallet.qr_code}
          open={showModel.share}
          handleClose={() => {
            setShowModal({ ...showModel, share: false, id: wallet.user_id })
          }}
        />
      ) : null}
    </>
  )
}
