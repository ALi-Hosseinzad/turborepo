import { NATIONAL_CARD_INFO_URL, useAxiosQuery } from '../imports'

export const useHeadAuthorizationViewModel = () => {
  const {
    data: dataNationCardInfo,
    refetch: refetchNationCardInfo,
    isLoading: isLoadingNationCardInfo,
  } = useAxiosQuery({
    url: NATIONAL_CARD_INFO_URL,
    queryKey: ['NATIONAL_CARD_INFO'],
  })

  return {
    dataNationCardInfo,
    refetchNationCardInfo,
    isLoadingNationCardInfo,
  }
}
