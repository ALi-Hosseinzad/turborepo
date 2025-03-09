import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { OstiganButton } from 'ui'
import type { DynamicListType } from 'types/inputManagement'
import { DynamicListComponent } from '../dynamicListCompoenet/dynamicListComponent'

export const DynamicList = (props: DynamicListType): JSX.Element => {
  const { onChangeHandler, list, type } = props
  const t = useTranslations()
  const [inputList, setInputList] = useState(list)
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    if (list) {
      setInputList(list)
    } else {
      setInputList([])
    }
  }, [list])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <DynamicListComponent
          type={type}
          list={inputList}
          setInputList={setInputList}
          disable={disable}
        />
      </div>
      <div className="flex gap-2 absolute bottom-0 left-0 p-2">
        <OstiganButton
          variant="contained"
          type="button"
          fontSize="15px"
          padding="5px 10px"
          disabled={disable}
          handleClick={() => {
            onChangeHandler(inputList)
            setDisable(true)
          }}
        >
          {t('save')}
        </OstiganButton>
        <OstiganButton
          variant="outlined"
          fontSize="15px"
          type="button"
          padding="5px 10px"
          disabled={!disable}
          handleClick={() => {
            setDisable(false)
          }}
        >
          {t('edit')}
        </OstiganButton>
      </div>
    </div>
  )
}
