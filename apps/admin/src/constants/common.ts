import type { QueryListType } from 'types/common'

export const INDEX_PARAMS: QueryListType = {
  search: '',
  perPage: '10',
  sort: '',
  // direction: 'ASC' as DirectionType,
  page: '1',
}

export const handleDate = (date): string => {
  return date.split(' ')[0].replaceAll('-', '/')
}
