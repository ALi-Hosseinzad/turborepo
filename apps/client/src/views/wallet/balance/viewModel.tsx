import type { RootState } from '../imports'
import {
  AddBalanceIcon,
  CashoutIcon,
  TransferIcon,
  useSelector,
  useTranslations,
} from '../imports'

export const useBalanceViewModel = () => {
  const t = useTranslations()
  const { wallet } = useSelector((state: RootState) => state.persist)

  const walletTabs = [
    { name: t('addBalance'), Icon: AddBalanceIcon, value: 'addBalance' },
    { name: t('cashout'), Icon: CashoutIcon, value: 'cashout' },
    { name: t('transfer'), Icon: TransferIcon, value: 'transfer' },
  ].map(({ name, Icon, value }) => {
    return {
      name: (
        <div className="flex items-center gap-2">
          <Icon />
          <p>{name}</p>
        </div>
      ),
      value,
    }
  })

  return { walletInfo: wallet, walletTabs }
}
