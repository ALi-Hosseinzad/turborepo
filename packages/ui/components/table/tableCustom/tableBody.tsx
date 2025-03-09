import { useTranslations } from 'use-intl'
import Link from 'next/link'
import { CircularProgress, TableBody, TableCell, TableRow } from '@mui/material'
import { useLocale } from 'next-intl'
import type { TableBodyPropsType } from '../../../types'
import { AdminEditIcon } from 'ui/components/icons'
import DeleteButton from './deleteButton'

export const TableCustomBody = ({
  isLoading,
  bodyInfo,
  headInfo,
  tableStyle,
  editNavigationLink,
  urlDeleteRequest,
  afterDeleteHandler,
  showDetailUrl,
  onErrorDelete,
  cellWidth,
  onClickRow,
}: TableBodyPropsType): JSX.Element => {
  const t = useTranslations()
  const locale = useLocale()
  type Row = {
    id: number
  } & Record<Exclude<string, 'id'>, any>

  return (
    <TableBody>
      {isLoading ? (
        <TableRow
          className={tableStyle === 'admin' ? 'bg-shade-100' : 'bg-gray-200'}
        >
          <TableCell colSpan={headInfo.length + 2} className="overflow-hidden">
            {/* TODO:handleWith tailwind */}
            <div className="flex !items-center w-full px-5 overflow-hidden text-[16px]">
              <CircularProgress size={20} className="mx-5" />
              {t('loading')}...
            </div>
          </TableCell>
        </TableRow>
      ) : (
        <>
          {bodyInfo?.map((row: Row) => {
            return (
              <TableRow
                hover={tableStyle === 'client'}
                className={`${onClickRow ? 'cursor-pointer' : ''} ${
                  tableStyle === 'admin'
                    ? 'even:bg-white odd:bg-customWhite'
                    : 'bg-white'
                }`}
                key={Math.random()}
                onClick={() => {
                  onClickRow?.(row.id)
                }}
              >
                {Object.values(row).map((item: string) => {
                  return (
                    <TableCell
                      align="center"
                      key={Math.random()}
                      sx={{ borderBottom: '0!important' }}
                      // TODO:change to tailwind
                    >
                      <div
                        className={`text-[14px] text-darkTypo justify-center m-auto line-clamp-3 min-w-[4px] max-w-[${cellWidth}]`}
                      >
                        {item}
                      </div>
                    </TableCell>
                  )
                })}
                {!(urlDeleteRequest || editNavigationLink || showDetailUrl) || (
                  <TableCell align="left" sx={{ borderBottom: '0!important' }}>
                    <div className="flex items-center justify-center">
                      {!urlDeleteRequest || (
                        <DeleteButton
                          id={row.id.toString()}
                          urlDeleteRequest={urlDeleteRequest}
                          afterDeleteHandler={afterDeleteHandler}
                          onErrorDelete={onErrorDelete}
                        />
                      )}
                      {!editNavigationLink || (
                        <Link
                          href={`/${locale}/${editNavigationLink}/${row.id}`}
                        >
                          <AdminEditIcon
                            id={row.id.toString()}
                            className="cursor-pointer"
                          />
                        </Link>
                      )}
                      {!showDetailUrl || (
                        <Link
                          href={`/${locale}/${showDetailUrl}/${row.id}`}
                          className="underline text-primary-default text-sm"
                        >
                          {t('showDetail')}
                        </Link>
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            )
          })}
        </>
      )}
    </TableBody>
  )
}
