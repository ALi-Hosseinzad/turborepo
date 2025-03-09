import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/configs/httpService/axios/httpService'
import { NAVBAR_URL } from '@/constants/endPoints'

export const useMegaMenuViewModel = (): any => {
  const { data: megaMenuData } = useQuery({
    queryKey: ['navbar-data'],
    queryFn: () => axiosGet({ url: NAVBAR_URL }),
  })

  const menuItems = [
    { name: 'خانه' },
    {
      name: 'خدمات',
      children: [
        {
          name: 'one',
          children: [
            {
              name: 'one-1',
              children: [{ name: 'one-1-1' }],
            },
            {
              name: 'one-2',
              children: [{ name: 'one-2-1' }],
            },
          ],
        },
        {
          name: 'two',
          children: [
            {
              name: 'two-1',
              children: [{ name: 'two-1-1' }],
            },
          ],
        },
        {
          name: 'three',
          children: [
            {
              name: 'three-1',
              children: [{ name: 'three-1-1' }],
            },
          ],
        },
      ],
    },
    { name: 'بلاگ' },
  ]

  return { megaMenuData, menuItems }
}
