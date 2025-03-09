'use client'

import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Table } from '@mui/material'
import type { TableCustomPropsType } from '../../../types'
import { TableCustomBody } from './tableBody'
import { TableCustomHead } from './tableHeader'
import { useSortableData } from './useSort'

export const TableCustom: FC<TableCustomPropsType> = ({
  isLoading,
  bodyInfo,
  headInfo,
  tableStyle,
  urlDeleteRequest,
  editNavigationLink,
  afterDeleteHandler,
  showDetailUrl,
  onClickRow,
  onErrorDelete,
}) => {
  const [data, setData] = useState(bodyInfo)
  const { requestSort, sortConfig } = useSortableData(bodyInfo, setData)
  const ref = useRef<HTMLInputElement>(null)
  const [cellWidth, setCellWidth] = useState<any>('0px')

  useEffect(() => {
    const tableWidth = ref?.current?.offsetWidth || 0
    setCellWidth(`${(tableWidth / headInfo.length).toFixed()}px`)
  }, [])

  return (
    <div ref={ref}>
      <Table className="w-full">
        <TableCustomHead
          headInfo={headInfo}
          tableStyle={tableStyle}
          requestSort={requestSort}
          sortConfig={sortConfig}
          urlDeleteRequest={urlDeleteRequest}
          showDetailUrl={showDetailUrl}
          editNavigationLink={editNavigationLink}
          headKeys={bodyInfo?.length ? Object.keys(bodyInfo?.[0]) : headInfo}
        />
        <TableCustomBody
          isLoading={isLoading}
          headInfo={headInfo}
          cellWidth={cellWidth}
          bodyInfo={data}
          tableStyle={tableStyle}
          editNavigationLink={editNavigationLink}
          urlDeleteRequest={urlDeleteRequest}
          afterDeleteHandler={afterDeleteHandler}
          showDetailUrl={showDetailUrl}
          onClickRow={onClickRow}
          onErrorDelete={onErrorDelete}
        />
      </Table>
    </div>
  )
}
