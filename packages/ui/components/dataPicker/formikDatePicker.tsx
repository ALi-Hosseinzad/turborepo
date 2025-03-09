'use client'

import { Field } from 'formik'
import type { FieldAttributes } from 'formik'
import { OstiganDatePicker } from './ostiganDatePicker'

export const FormikDatePicker: React.FC<any> = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldAttributes<any>) => {
        return (
          <OstiganDatePicker
            {...props}
            value={field.value}
            setFieldValue={form.setFieldValue}
            error={
              form.touched[field.name] ? Boolean(form.errors[field.name]) : null
            }
            helperText={
              form.touched[field.name] ? form.errors[field.name] : null
            }
            onChange={(value: any) => {
              form.setFieldValue(props.name, value)
              props.onChangeHandler?.(value)
            }}
            onBlur={field.onBlur}
          />
        )
      }}
    </Field>
  )
}
