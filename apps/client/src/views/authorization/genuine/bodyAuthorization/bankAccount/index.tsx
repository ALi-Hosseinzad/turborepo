import {
  AuthenticationResult,
  useBankAccountViewModel,
} from '@/views/authorization/imports'
import { BankAccountView } from './view'

export const BankAccount = () => {
  const { allAuthResults } = useBankAccountViewModel()
  return (
    <>
      <AuthenticationResult
        isReject={allAuthResults?.length !== 0}
        data={allAuthResults}
      />
      <BankAccountView />
    </>
  )
}
