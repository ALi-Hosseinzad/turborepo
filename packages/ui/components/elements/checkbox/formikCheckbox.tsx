'use client'

import { Field } from 'formik'
import type { FieldAttributes } from 'formik'
import type { FormikCheckboxType } from '../../../../ui/types'
import { OstiganCheckbox } from './ostiganCheckbox'

export const FormikCheckbox: React.FC<FormikCheckboxType> = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldAttributes<any>) => {
        return (
          <OstiganCheckbox
            {...props}
            name={field.name}
            error={form.errors[field.name]}
            value={field?.value || false}
            onChange={(value: any) => {
              form.setFieldValue(props.name, value)
            }}
          />
        )
      }}
    </Field>
  )
}
