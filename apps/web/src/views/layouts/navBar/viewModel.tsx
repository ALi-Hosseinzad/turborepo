import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/configs/httpService/axios/httpService'
import { NAVBAR_URL } from '@/constants/endPoints'

export const useNavbar = (): any => {
  const { data: navbarData } = useQuery({
    queryKey: ['navbar-data'],
    queryFn: () => axiosGet({ url: `${NAVBAR_URL}/7` }),
  })

  return { navbarData }
}
