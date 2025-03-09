import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { DeleteIcon } from 'ui/components/icons'
import { Loading } from 'ui/components/loading/loading'
import { DeleteModal } from 'ui/components/modal/deleteModal'

const DeleteButton = (props: any): JSX.Element => {
  const { id, urlDeleteRequest, afterDeleteHandler, onErrorDelete } = props
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)
  const [open, setOpen] = useState(false)

  const t = useTranslations()

  const handleDelete = (id: any): void => {
    void deleteRequest(id)
  }

  const deleteRequest = async (id: any): Promise<any> => {
    setOpen(false)
    const token = Cookies.get('token')
    const baseUrl = process.env.BASE_URL
    setIsLoadingDelete(true)
    await axios
      .delete(`${baseUrl}v1/${urlDeleteRequest}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async () => {
        await afterDeleteHandler()
      })
      .catch((error: any) => {
        onErrorDelete?.(error)
        setIsLoadingDelete(false)
        throw error
      })
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <div>
      <Loading isLoading={isLoadingDelete} />
      <button
        type="button"
        value={id}
        className="relative"
        onClick={() => {
          setOpen(true)
        }}
      >
        <DeleteIcon
          bgColor="transparent"
          className={`cursor-pointer ${isLoadingDelete && 'opacity-50'}`}
        />
      </button>
      <DeleteModal
        headerTitle={t('areYouSure')}
        rejectTextButton={t('cancel')}
        acceptTextButton={t('delete')}
        open={open}
        handleClose={handleClose}
        onSuccess={() => {
          handleDelete(id)
        }}
      >
        <div className="mt-6 text-center">{t('areYouSureDelete')}</div>
      </DeleteModal>
    </div>
  )
}

export default DeleteButton
