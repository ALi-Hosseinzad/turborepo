import {
  FormikAutoComplete,
  FormikRadio,
  FormikSelect,
  FormikTextField,
} from '../../imports'

export const InputView = ({ inputInfo, property }) => {
  const { id, type, label, placeholder, option } = inputInfo

  switch (type) {
    case 'text':
      return (
        <FormikTextField
          name={id}
          title={label}
          placeholder={placeholder}
          {...property}
        />
      )

    case 'select':
      return (
        <FormikSelect
          name={id}
          listOptions={option}
          selectLabel={label}
          placeholder={placeholder}
          {...property}
        />
      )
    case 'auto_complete':
      return (
        <FormikAutoComplete
          name={id}
          listOption={option}
          optionTitle="label"
          autoCompleteLabel={label}
          placeholder={placeholder}
          {...property}
        />
      )
    case 'radiobutton':
      return (
        <FormikRadio name={id} options={option} label={label} {...property} />
      )

    case 'textarea':
      return (
        <FormikTextField
          name={id}
          title={label}
          placeholder={placeholder}
          multiline
          {...property}
        />
      )
    default:
      return (
        <FormikTextField
          name="default-text"
          title="default"
          placeholder="default"
          {...property}
        />
      )
  }
}
