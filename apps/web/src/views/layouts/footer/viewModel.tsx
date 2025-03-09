import { FOOTER_URL } from '@/constants/endPoints'
import { FOOTER } from '@/constants/queryKey'
import { useDataQuery } from '@/hooks/useDataQuery'

export const useFooterViewModel = (): any => {
  const footerQuery = useDataQuery({
    nameQueryKey: FOOTER,
    urlQueryFn: `${FOOTER_URL}/10`,
  })

  return { footerQuery }
}
