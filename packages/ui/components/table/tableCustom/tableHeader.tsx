import { TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslations } from 'next-intl'
import type { TableHeadPropsType } from '../../../types'
import { ArrowToSideDownIcon, ArrowToSideTopIcon } from 'ui/components/icons'

export const TableCustomHead: React.FC<TableHeadPropsType> = ({
  headInfo,
  tableStyle,
  requestSort,
  sortConfig,
  urlDeleteRequest,
  showDetailUrl,
  editNavigationLink,
  headKeys,
}): React.ReactElement => {
  const t = useTranslations()

  return (
    <TableHead>
      <TableRow className="bg-white">
        {headInfo?.map((headCell: string, i: number) => (
          <TableCell
            key={headCell}
            align="center"
            sx={{
              borderBottom:
                tableStyle === 'admin'
                  ? '0!important'
                  : '1px solid var(--trueGray-300)!important',
            }}
          >
            <button
              type="button"
              value={headKeys?.[i]}
              className="flex items-center justify-center m-auto "
              onClick={requestSort}
            >
              <div
                className={`${
                  sortConfig?.key === headKeys?.[i] ? 'flex' : 'hidden'
                } items-center justify-center m-auto `}
              >
                {sortConfig?.key === headKeys?.[i] &&
                sortConfig?.direction === 'ascending' ? (
                  <ArrowToSideDownIcon />
                ) : (
                  <ArrowToSideTopIcon />
                )}
              </div>
              <span className="text-darkTypo text-base font-semibold text-nowrap">
                {headCell}
              </span>
            </button>
          </TableCell>
        ))}
        {urlDeleteRequest || editNavigationLink || showDetailUrl ? (
          <TableCell
            align="center"
            className="px-2 py-5 text-center"
            sx={{ borderBottom: `${tableStyle === 'admin' && '0!important'}` }}
          >
            <span className="text-darkTypo text-base font-semibold">
              {t('action')}
            </span>
          </TableCell>
        ) : null}
      </TableRow>
    </TableHead>
  )
}
