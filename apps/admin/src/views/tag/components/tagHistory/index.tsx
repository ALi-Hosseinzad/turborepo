'use client'

import { TagHistoryView } from './view'
import { useTagHistoryViewModel } from './viewModel'

export const TagHistory = (): JSX.Element => {
  const { headInfo, bodyInfo, params, pageCount, onChangePage, isLoading } =
    useTagHistoryViewModel()
  return (
    <TagHistoryView
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      params={params}
      pageCount={pageCount}
      isLoading={isLoading}
      onChangePage={onChangePage}
    />
  )
}
