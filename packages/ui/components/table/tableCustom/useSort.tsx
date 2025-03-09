import type { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useMemo, useState } from 'react'
import type { SortConfigType, UseSortHookType } from '../../../types'

/**
 * A hook to sort data of table
 * @param items - the list that will be sort
 * @param setData - to set sorted data
 * @param config - the config of sorting data it has direction ascending and descending and key which column to sortby
 * @returns  requestSort, sortConfig, sortedItems
 * requestSort: send sort request
 *  sortConfig:return current config of sort
 * sortedItems:the result of sorted items
 */

export const useSortableData = (
  items: any[],
  setData: Dispatch<SetStateAction<any[]>>,
  config: SortConfigType = {
    direction: 'ascending',
    key: '',
  },
): UseSortHookType => {
  const [sortConfig, setSortConfig] = useState<SortConfigType>(config)

  const sortedItems = useMemo((): string | number[] => {
    const copyItems: any = items && [...items]
    const sortedData = copyItems?.sort((a: any, b: any) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1
      }
      return 0
    })
    setData(sortedData)
    return copyItems
  }, [items, sortConfig, setData])

  /**
   * this func will set sortConfig
   * @param e - it is the value of head cell for example id
   * @returns -for example  \{key:'name', direction:'ascending'\}
   */

  const requestSort = (e: MouseEvent<HTMLButtonElement>): void => {
    const key = e.currentTarget.value
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { requestSort, sortConfig, sortedItems }
}
