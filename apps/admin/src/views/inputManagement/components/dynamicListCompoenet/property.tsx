import React from 'react'
import { OstiganTextField } from 'ui'

export const Property = ({
  propertyList,
  inputList,
  setInputList,
  disable,
}): JSX.Element => {
  const handleChange = (event, index): void => {
    const { name, value } = event.target
    const onChangeValue = [...inputList]
    onChangeValue.push({ label: '', value: '' })
    onChangeValue[index].label = name
    onChangeValue[index].value = value
    onChangeValue.map((item, index) => {
      return item.value == '' ? onChangeValue.splice(index, 1) : null
    })
    setInputList(onChangeValue)
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div className="flex gap-2">
          {propertyList.map(
            ({ name, title, value, sizeInput, placeholder }, index) => {
              return (
                <OstiganTextField
                  name={name}
                  title={title}
                  value={value}
                  sizeInput={sizeInput}
                  placeholder={placeholder}
                  disabled={disable}
                  onChange={(event) => {
                    handleChange(event, index)
                  }}
                />
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}
