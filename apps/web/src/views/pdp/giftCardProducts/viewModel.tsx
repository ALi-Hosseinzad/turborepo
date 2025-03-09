// import type { QueryListType } from '@/types/common'
// import { axiosGet, useEffect, useQuery, USER_URL, useState } from '../imports'
// import type { User } from '../imports'
// import { queryStringEndpoint } from '@/utils/queryStringEndpoint'

// Todo >>> For Exampele
export const useGiftCardProductsViewModel = (): any => {
  // const [users, setUsers] = useState<User[]>([])
  // const [params, setParams] = useState<QueryListType>({
  //   sort: '',
  //   direction: '',
  //   perPage: '10',
  //   search: '',
  //   page: '1',
  // })

  // const { data, isLoading } = useQuery({
  //   queryKey: ['user', params.page],
  //   queryFn: () =>
  //     axiosGet({
  //       url: `${USER_URL}${queryStringEndpoint(params)}`,
  //     }),
  // })

  // useEffect(() => {
  //   if (data?.data) {
  //     const newUsers = data?.data.map(
  //       ({ id, phone, email, verify_state: verifyState, name: full }) => {
  //         const [firstName, familyName] = full ? full.split('_') : [null, null]
  //         return {
  //           id,
  //           firstName: firstName === null ? full : firstName,
  //           familyName: familyName === null ? full : familyName,
  //           phone,
  //           email,
  //           verifyState: (() => {
  //             if (verifyState === 0) {
  //               return (
  //                 <div className="flex justify-center items-center ">
  //                   <div className="w-24 h-8 flex justify-center items-center bg-[#E9FAEE] text-[#2CA562] rounded-sm">
  //                     تایید شده
  //                   </div>
  //                 </div>
  //               )
  //             } else if (verifyState === 1) {
  //               return (
  //                 <div className="flex justify-center items-center ">
  //                   <div className="w-24 h-8 flex justify-center items-center bg-[#FFF6E9] text-[#FFA63E] rounded-sm">
  //                     در حال بررسی
  //                   </div>
  //                 </div>
  //               )
  //             }
  //             return (
  //               <div className="flex justify-center items-center ">
  //                 <div className="w-24 h-8 flex justify-center items-center bg-[#ecbfc4] text-[#F5455B]  rounded-sm">
  //                   تایید نشده{' '}
  //                 </div>
  //               </div>
  //             )
  //           })(),
  //         }
  //       },
  //     )
  //     setUsers(newUsers)
  //   }
  // }, [data])

  // const onChangePage = (page: string): void => {
  //   setParams((prev) => ({ ...prev, page }))
  // }
  // const pageCount = data?.pagination?.total_pages
  return {
    // users,
    // params,
    // isLoading,
    // onChangePage,
    // pageCount,
  }
}
