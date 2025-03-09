export interface SortConfigType {
  direction: string
  key: string
}

export interface TableProps {
  headInfo?: string[]
  bodyInfo?: any[]
  tableStyle?: string
  onClickRow?: any
}
export interface TableHeadPropsType {
  headInfo?: string[]
  tableStyle?: style
  requestSort?: (e: MouseEvent<HTMLButtonElement>) => void
  sortConfig?: SortConfigType
  urlDeleteRequest?: string
  showDetailUrl?: string
  editNavigationLink?: string
  headKeys?: string[]
}

export type PaginationType =
  | {
      page?: number | string
      pageCount?: number | string
      onChangePage?: (page: number | string) => void
    }
  | {
      page?: never
      pageCount?: never
      onChangePage?: never
    }

export interface DeleteType {
  onErrorDelete?: (e) => void
  urlDeleteRequest?: string
  afterDeleteHandler?: () => Promise<any>
}

interface MainTablePropsType {
  isLoading?: any
  addBtnText?: string
  editNavigationLink?: string
  addNavigationLink?: string
  onExcelAction?: () => void
  showDetailUrl?: string
  className?: string
  tableLabel?: string
  isFetching?: boolean
  titleClass?: string
  tableTitleContent?: string
}
export type TablePropsType = MainTablePropsType &
  TableProps &
  PaginationType &
  DeleteType

export type TableCustomPropsType = Pick<
  TablePropsType,
  'showDetailUrl',
  'onClickRow',
  'headInfo',
  'isLoading',
  'bodyInfo',
  'tableStyle',
  'urlDeleteRequest',
  'editNavigationLink',
  'afterDeleteHandler'
>

export type TableTitlePropsType = Pick<
  TablePropsType,
  | 'onExcelAction'
  | 'addBtnText'
  | 'addNavigationLink'
  | 'tableStyle'
  | 'tableTitleContent'
  | 'titleClass'
>

export type TableBodyPropsType = Omit<TableCustomPropsType, 'headInfo'> //have

export interface UseSortHookType {
  requestSort?: (e: MouseEvent<HTMLButtonElement>) => void
  sortConfig?: SortConfigType
  sortedItems?: string | number[]
}
