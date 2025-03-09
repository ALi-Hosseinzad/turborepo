import { useState } from 'react'
import { useTranslations } from 'use-intl'
import { Loading, OstiganTable } from 'ui'
import { DeleteModal } from 'ui/components/modal/deleteModal'
import { useUsersInGroupListViewModel } from './viewModel'

export const UsersInGroup = ({ isLoadingEdit }): any => {
  const [openDeleteModal, setOpenDeleteModal] = useState({
    status: false,
    userId: '',
  })
  const {
    bodyInfo,
    isLoading,
    isLoadingDetach,
    isFetching,
    headInfo,
    refetchGroup,
    handleDetach,
  } = useUsersInGroupListViewModel(openDeleteModal, setOpenDeleteModal)
  const t = useTranslations()
  const refetchList = async (): Promise<any> => {
    await refetchGroup()
  }

  return (
    <>
      <Loading
        isLoading={isLoading || isFetching || isLoadingDetach || isLoadingEdit}
      />
      {bodyInfo?.length === 0 ? (
        <div>dont have any data</div>
      ) : (
        <div>
          <OstiganTable
            headInfo={headInfo}
            bodyInfo={bodyInfo}
            tableStyle="admin"
            isLoading={isLoading || isFetching}
            afterDeleteHandler={refetchList}
          />
          <DeleteModal
            headerTitle={t('changeAnsweringPart')}
            rejectTextButton={t('cancel')}
            acceptTextButton={t('confirm')}
            handleClose={() => {
              setOpenDeleteModal({ status: false, userId: '' })
            }}
            styleTypeSuccessBtn="success"
            open={openDeleteModal.status}
            isLoading={false}
            onSuccess={handleDetach}
          >
            <div className="flex justify-center items-center p-8">
              {t('areYouSure')}
            </div>
          </DeleteModal>
        </div>
      )}
    </>
  )
}
