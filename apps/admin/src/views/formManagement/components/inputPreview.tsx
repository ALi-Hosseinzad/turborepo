import { OstiganUploader } from 'ui'
import {
  OstiganAutoComplete,
  OstiganCheckbox,
  OstiganRadio,
  OstiganSelect,
  OstiganTextField,
} from '../imports'
import { OstiganDatePicker } from 'ui/components/dataPicker/ostiganDatePicker'

export const InputPreview = ({ inputData }): JSX.Element => {
  const {
    type,
    name,
    label,
    placeholder,
    required,
    option,
    sub_label: subLabel,
  } = inputData

  switch (type) {
    case 'text':
    case 'password':
    case 'email':
      return (
        <div className="flex flex-col gap-1">
          <OstiganTextField
            name={name}
            type={type}
            title={required ? `${label}*` : label}
            placeholder={placeholder}
          />
          {subLabel ? <p className="text-xs">{subLabel}</p> : null}
        </div>
      )
    case 'textarea':
      return (
        <div className="flex flex-col gap-1">
          <OstiganTextField
            name={name}
            type={type}
            title={required ? `${label}*` : label}
            placeholder={placeholder}
            multiline
            rows={5}
          />
          {subLabel ? <p className="text-xs">{subLabel}</p> : null}
        </div>
      )
    case 'select':
      return (
        <div className="flex flex-col gap-1">
          <OstiganSelect
            name={name}
            listOptions={option}
            optionLabel="label"
            optionValue="value"
            selectLabel={required ? `${label}*` : label}
            placeholder={placeholder}
            value={undefined}
          />
          {subLabel ? <p className="text-xs">{subLabel}</p> : null}
        </div>
      )
    case 'auto_complete':
      return (
        <div className="flex flex-col gap-1">
          <OstiganAutoComplete
            name={name}
            listOption={option}
            optionTitle="label"
            autoCompleteLabel={required ? `${label}*` : label}
            placeholder={placeholder}
            value={undefined}
          />
          {subLabel ? <p className="text-xs">{subLabel}</p> : null}
        </div>
      )
    case 'radiobutton':
      return (
        <div className="flex flex-col gap-1">
          <OstiganRadio
            name={name}
            label={required ? `${label}*` : label}
            value={name}
            options={option}
          />
          {subLabel ? <p className="text-xs">{subLabel}</p> : null}
        </div>
      )
    case 'checkbox':
      return (
        <div className="flex flex-col gap-1">
          <OstiganCheckbox name={name} label={required ? `${label}*` : label} />
          {subLabel ? <p className="text-xs">{subLabel}</p> : null}
        </div>
      )
    case 'datepicker':
      return (
        <div className="flex flex-col gap-1">
          <OstiganDatePicker
            name={name}
            title={required ? `${label}*` : label}
          />
          {subLabel ? <p className="text-xs">{subLabel}</p> : null}
        </div>
      )
    case 'file':
      return (
        <div className="flex flex-col gap-1">
          <OstiganUploader
            name={name}
            title={required ? `${label}*` : label}
            placeholder={placeholder}
            typeUploader="typeInputUploader"
          />
          {subLabel ? <p className="text-xs">{subLabel}</p> : null}
        </div>
      )
    default:
      return (
        <OstiganTextField
          title={required ? `${label}*` : label}
          placeholder={placeholder}
          name={name}
        />
      )
  }
}
