import {
  AddBalanceModelView,
  OstiganModal,
  useAddBalanceModalViewModel,
} from '../../import'

export const AddBalanceFormModal = ({ handleClose, open, initialValues }) => {
  const {
    handleSubmit,
    validationSchema,
    isAddBalanceLoading,
    isAddBalanceSuccess,
  } = useAddBalanceModalViewModel(initialValues)
  return (
    <OstiganModal open={open} handleClose={handleClose}>
      <AddBalanceModelView
        validationSchema={validationSchema}
        initialValues={initialValues}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        isAddBalanceLoading={isAddBalanceLoading}
        isAddBalanceSuccess={isAddBalanceSuccess}
      />
    </OstiganModal>
  )
}
