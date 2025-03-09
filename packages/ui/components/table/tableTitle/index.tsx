import type { FC } from 'react'
import { useTranslations } from 'use-intl'
import { useRouter } from 'next/navigation'
import type { TableTitlePropsType } from '../../../types'
import { OstiganButton } from '../../elements/button/ostiganButton'
import { PlusCircleIcon } from '../../icons'

// import SearchInput from './searchInput'

export const TableTitle: FC<TableTitlePropsType> = ({
  addBtnText,
  onExcelAction,
  addNavigationLink,
  tableStyle,
  tableTitleContent,
  titleClass,
}): React.ReactElement => {
  const t = useTranslations()
  const router = useRouter()

  const click = (): string => {
    return 'negar'
  }

  const handleClickAdd = (): void => {
    router.push(addNavigationLink as string)
  }

  return (
    <div className="flex flex-row justify-between py-6 px-4 bg-white rounded-t-lg">
      {tableStyle !== 'admin' || (
        <>
          {/* <SearchInput /> */}
          <div className="flex flex-row gap-x-1 mr-auto">
            {!onExcelAction || (
              <OstiganButton
                type="button"
                styleType="success"
                handleClick={click}
                variant="outlined"
                fontSize="16px"
                className="h-[52px]"
              >
                {t('importExcel')}
              </OstiganButton>
            )}
            {!addNavigationLink || (
              <OstiganButton
                type="button"
                styleType="success"
                handleClick={handleClickAdd}
                variant="contained"
                fontSize="16px"
                className="h-[52px]"
                startIcon={<PlusCircleIcon className="w-5 h-5" color="white" />}
              >
                {addBtnText}
              </OstiganButton>
            )}
          </div>
        </>
      )}
      {tableStyle !== 'client' || (
        <div className="flex sm:flex-row flex-col-reverse sm:justify-between w-full items-center">
          <p className={titleClass}>{tableTitleContent}</p>
          <div className="max-w-sm:w-full mr-auto">
            {!addNavigationLink || (
              <OstiganButton
                type="button"
                styleType="success"
                handleClick={handleClickAdd}
                variant="contained"
                fontSize="16px"
                className="h-[52px]"
                startIcon={<PlusCircleIcon className="w-5 h-5" color="white" />}
              >
                {addBtnText}
              </OstiganButton>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
