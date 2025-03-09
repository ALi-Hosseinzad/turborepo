'use client'

import type { FieldAttributes } from 'formik'
import { Field } from 'formik'
import type { FormikAutoCompleteType } from '../../../../ui/types'
import { OstiganAutoComplete } from './ostiganAutoComplete'

export const FormikAutoComplete: React.FC<FormikAutoCompleteType> = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldAttributes<any>) => {
        return (
          <OstiganAutoComplete
            {...props}
            value={field.value}
            setFieldValue={form.setFieldValue}
            error={
              form.touched[field.name] ? Boolean(form.errors[field.name]) : null
            }
            helperText={
              form.touched[field.name] ? form.errors[field.name] : null
            }
            onChange={(value) => {
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
