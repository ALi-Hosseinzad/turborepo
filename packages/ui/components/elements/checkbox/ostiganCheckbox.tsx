import { Checkbox } from '@mui/material'
import type { CheckboxType } from '../../../types/checkbox'
import { HelperText } from '../label'

export const OstiganCheckbox = (props: CheckboxType): JSX.Element => {
  const {
    name,
    onChange,
    label,
    value,
    error,
    checkboxClassName = '',
    color = 'var(--trueGray-600)',
    checkedColor = 'var(--primary-default)',
  } = props

  return (
    <div className={checkboxClassName}>
      <Checkbox
        key={label}
        style={{ marginRight: 2 }}
        name={name}
        checked={value}
        sx={{
          color,
          borderRadius: '10px',
          '&.Mui-checked': {
            color: checkedColor,
          },
        }}
        onChange={(_e) => {
          const value = _e.target.checked
          onChange && onChange(value)
        }}
      />
      {label ? label : null}
      <p className="mb-3">
        {error ? <HelperText className="mr-6 mb-2">{error}</HelperText> : null}
      </p>
    </div>
  )
}
