import React from 'react'
import { useTranslations } from 'next-intl'
import WalletFormAddBalanceView from '@/views/wallet/components/walletDepositForm/view'
import { ModalHeader } from 'ui/components/modal/modalHeader'

export const AddBalanceModelView = ({
  initialValues,
  validationSchema,
  handleClose,
  handleSubmit,
  isAddBalanceLoading,
  isAddBalanceSuccess,
}) => {
  const t = useTranslations()
  return (
    <div>
      <ModalHeader
        handleClose={handleClose}
        headerTitle={t('addBalanceMessage')}
      />
      <div className="py-5 px-6">
        <WalletFormAddBalanceView
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          validationSchema={validationSchema}
          isAddBalanceLoading={isAddBalanceLoading}
          isAddBalanceSuccess={isAddBalanceSuccess}
        />
      </div>
    </div>
  )
}
