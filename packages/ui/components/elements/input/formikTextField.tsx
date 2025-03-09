import { Field, useField } from 'formik'
import type { OstiganTextFieldType } from '../../../../ui/types/ostiganTextField'
import { OstiganTextField } from './ostiganTextField'

export const FormikTextField: React.FC<OstiganTextFieldType> = (props) => {
  const { name, showErrorText = true } = props

  const [field, meta, helpers] = useField(name)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    void helpers?.setValue(value)
    props.onChange?.(event)
  }

  return (
    <Field name={name}>
      {() => (
        <OstiganTextField
          {...props}
          value={props?.value || field.value}
          error={meta.touched ? Boolean(meta.error) : null}
          helperText={showErrorText && meta && meta.touched ? meta.error : ''}
          onChange={handleChange}
          onBlur={field.onBlur}
        />
      )}
    </Field>
  )
}
