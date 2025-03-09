import { OstiganButton, OstiganTextField } from 'ui'
import { DeleteIcon, PlusIcon } from 'ui/components/icons'

export const Options = ({ inputList, setInputList, disable }): JSX.Element => {
  const handleAddInput = (): void => {
    setInputList([...inputList, { value: '', label: '' }])
  }

  const handleChange = (event, index): void => {
    const { name, value } = event.target
    const onChangeValue = [...inputList]
    onChangeValue[index][name] = value
    setInputList(onChangeValue)
  }

  const handleDeleteInput = (index): void => {
    const newArray = [...inputList]
    newArray.splice(index, 1)
    setInputList(newArray)
  }

  return (
    <div className="flex flex-col gap-2">
      {inputList?.map((item, index) => (
        <div className="flex gap-2" key={item}>
          <div className="flex gap-2">
            <OstiganTextField
              name="value"
              value={item.value}
              sizeInput="Small"
              placeholder="value"
              disabled={disable}
              onChange={(event) => {
                handleChange(event, index)
              }}
            />
            <OstiganTextField
              name="label"
              value={item.label}
              sizeInput="Small"
              placeholder="label"
              disabled={disable}
              onChange={(event) => {
                handleChange(event, index)
              }}
            />
          </div>
          <div className="flex gap-2 max-h-10">
            {inputList.length > 1 && (
              <OstiganButton
                styleType="error"
                variant="outlined"
                type="button"
                padding="0"
                disabled={disable}
                handleClick={() => {
                  handleDeleteInput(index)
                }}
              >
                <DeleteIcon color={disable ? 'gray' : 'var(--error-default)'} />
              </OstiganButton>
            )}
            {index === inputList.length - 1 && (
              <OstiganButton
                styleType="success"
                variant="outlined"
                type="button"
                padding="0"
                disabled={inputList[index].value == '' || disable}
                handleClick={() => {
                  handleAddInput()
                }}
              >
                <PlusIcon
                  color={
                    inputList[index].value == '' || disable ? 'gray' : 'green'
                  }
                />
              </OstiganButton>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
