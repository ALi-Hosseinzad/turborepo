import { Options } from './options'
import { Property } from './property'
import { UsePropertyListValue } from './propertyListValue'

export const DynamicListComponent: React.FC<any> = ({
  type,
  list,
  setInputList,
  disable,
}): any => {
  switch (type) {
    case 'select':
    case 'auto_complete':
    case 'checkbox':
    case 'radiobutton':
      return (
        <Options
          inputList={list}
          setInputList={setInputList}
          disable={disable}
        />
      )

    case 'range':
      return (
        <Property
          inputList={list}
          propertyList={UsePropertyListValue('range', list)}
          setInputList={setInputList}
          disable={disable}
        />
      )

    case 'textarea':
      return (
        <Property
          inputList={list}
          propertyList={UsePropertyListValue('textarea', list)}
          setInputList={setInputList}
          disable={disable}
        />
      )
  }
}
