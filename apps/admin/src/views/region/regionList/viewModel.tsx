'use client'

import {
  axiosPost,
  Image,
  OstiganSwitch,
  REGION_LIST_QUERY,
  REGION_URL,
  type UseListRegionViewModelType,
  useMutation,
  useQueryClient,
  useTranslations,
} from '../imports'

export const useRegionViewModel = (): UseListRegionViewModelType => {
  const t = useTranslations()
  const queryClient = useQueryClient()
  const { mutateAsync, isPending: isLoadingChangeStatus } = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) => {
      return axiosPost({
        url: `${REGION_URL}/${id}`,
        body: { status },
      })
    },
  })

  const headInfo = [
    t('id'),
    t('firstName'),
    t('flag'),
    t('currency'),
    t('slug'),
    `${t('change')} ${t('status')} `,
  ]

  const handleFlagHtml = (slugurl: string): JSX.Element => {
    return (
      <div className="flex w-full justify-center items-center">
        <Image
          src={slugurl}
          width={32}
          height={24}
          alt="Picture of the author"
        />
      </div>
    )
  }

  const bodyInfo = (curData: any): any[] => {
    return curData?.map(({ id, name, flag, currency, slug, status }) => {
      return {
        id,
        name,
        flag: handleFlagHtml(flag),
        currency: currency?.name,
        slug,
        statusLabel: (
          <OstiganSwitch
            checked={status === 'active'}
            onChange={() => {
              const curStatus = status === 'disable' ? 'active' : 'disable'
              mutateAsync({ status: curStatus, id }).then(() => {
                queryClient.invalidateQueries({
                  queryKey: [REGION_LIST_QUERY],
                })
              })
            }}
          />
        ),
      }
    })
  }

  return {
    bodyInfo,
    isLoadingChangeStatus,
    headInfo,
  }
}
