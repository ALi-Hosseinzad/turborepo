import { Field, type FieldAttributes } from 'formik'
import type { TextEditorFormikType } from '../../../types/textEditor'
import { OstiganTextEditor } from './ostiganTextEditor'

export const FormikTextEditor: React.FC<TextEditorFormikType> = (
  props,
): JSX.Element => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldAttributes<any>) => {
        return (
          <OstiganTextEditor
            {...props}
            value={field.value}
            error={
              form.touched[field.name] ? Boolean(form.errors[field.name]) : null
            }
            helperText={
              form.touched[field.name] ? form.errors[field.name] : null
            }
            handleChange={(value) => {
              form.setFieldValue(`${props.name}`, value)
            }}
          />
        )
      }}
    </Field>
  )
}
