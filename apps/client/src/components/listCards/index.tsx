import type { FC } from 'react'
import { InfoCard } from './infoCard/index'
import InfoCardSkeleton from './infoCard/infoCardSkeleton'
import { useListCardsViewModel } from './viewModel'

export const ListCards: FC<any> = ({
  bodyInfo,
  url,
  queryParams,
  queryKey,
  titleContent,
  titleClass,
}): JSX.Element => {
  const { data, page, isLoading, pageCount, onChangePage, isFetching } =
    useListCardsViewModel({
      url,
      queryKey,
      queryParams,
    })

  if (isLoading) {
    return <InfoCardSkeleton isLoading={isLoading} />
  }
  return (
    <InfoCard
      page={page}
      pageCount={pageCount}
      isLoading={isLoading}
      isFetching={isFetching}
      bodyInfo={bodyInfo(data?.data)}
      titleClass={titleClass}
      titleContent={titleContent}
      onChangePage={onChangePage}
    />
  )
}
