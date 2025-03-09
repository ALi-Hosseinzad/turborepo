import { useSelector } from 'react-redux'
import { WALLET_REQUEST_INTERVAL_REFETCH_TIME } from '@/constants/constants'
import { WALLET_URL } from '@/constants/endPoints'
import { useAxiosQuery } from './useAxiosQuery'
import { type RootState } from '@/redux/store'

export const useGetWalletData = () => {
  const { user } = useSelector((state: RootState) => state.persist)

  const {
    data: walletData,
    refetch: refetchWalletRequest,
    isFetching: isFetchingWallet,
  } = useAxiosQuery({
    url: `${WALLET_URL}/${user.id}`,
    queryKey: ['wallet-count'],
    refetchInterval: WALLET_REQUEST_INTERVAL_REFETCH_TIME,
  })

  return { walletData, refetchWalletRequest, isFetchingWallet }
}
