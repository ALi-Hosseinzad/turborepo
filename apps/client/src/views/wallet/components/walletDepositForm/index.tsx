import WalletFormAddBalanceView from './view'
import { useWalletDepositFormViewModel } from './viewModel'

const WalletDepositForm = () => {
  const { initialValues, handleSubmit, validationSchema, isPending } =
    useWalletDepositFormViewModel()

  return (
    <WalletFormAddBalanceView
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validationSchema={validationSchema}
      isPending={isPending}
    />
  )
}

export default WalletDepositForm
