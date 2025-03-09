import type { UserStatusModalType } from 'types/user'
import { CloseIcon, OstiganModal, React, useTranslations } from '../imports'

// TODO:Mehri
export const UserStatusModal = (props: UserStatusModalType): JSX.Element => {
  const { userData, showModal, setShowModal, id } = props
  const t = useTranslations()
  const { nationalCardData, bankCardData, userLevel } = userData

  return (
    <OstiganModal
      open={showModal}
      handleClose={() => {
        setShowModal({ ...showModal, [id]: false })
      }}
    >
      <div>
        <div className="flex items-center rounded-t-lg bg-trueGray-200 p-4">
          <CloseIcon
            className="cursor-pointer"
            onClick={() => {
              setShowModal({ ...showModal, [id]: false })
            }}
          />
          <span className="mx-auto text-xl font-semibold text-darkTypo">
            {t('userHasVerified')}
          </span>
        </div>

        <div className="p-4 h-48">
          <p className="title-sm">کاربر سطح {userLevel} می باشد.</p>
          <span className="title-sm"> {t('nationalCard')}: </span>
          {nationalCardData?.id ? (
            <span
              className={`${nationalCardData.is_verify_label == t('rejected') ? 'text-error-default' : ''} 
           ${nationalCardData.is_verify_label == t('accepted') ? 'text-primary-default' : ''} 
           ${nationalCardData.is_verify_label == t('pendding') ? 'text-warning-default' : ''}`}
            >
              {userData?.nationalCardData?.is_verify_label}
            </span>
          ) : (
            <span>{t('nationalCardIsNotSubmited')}</span>
          )}

          <div className="flex gap-2">
            <p className="title-sm">{t('bankCard')} </p>
            {bankCardData.length > 0 ? (
              <div className="flex flex-col pt-2">
                {bankCardData.map((item) => (
                  <div
                    key={item.id}
                    className={`flex gap-1 ${item.is_verify_label == t('rejected') ? 'text-error-default' : ''} 
                   ${item.is_verify_label == t('accepted') ? 'text-primary-default' : ''} 
                   ${item.is_verify_label == t('pendding') ? 'text-warning-default' : ''}`}
                  >
                    <p>{t('aBankCard')}</p>
                    <p>{item.is_verify_label}</p>
                  </div>
                ))}
              </div>
            ) : (
              <span className="pt-2">{t('bankCardIsNotSubmited')}</span>
            )}
          </div>
        </div>
      </div>
    </OstiganModal>
  )
}
