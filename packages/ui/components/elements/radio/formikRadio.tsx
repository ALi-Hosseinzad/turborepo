'use client'

import { Field } from 'formik'
import type { FieldAttributes } from 'formik'
import type { RadioFormikType } from '../../../types'
import { OstiganRadio } from './ostiganRadio'

//TODO:add defult value
export const FormikRadio: React.FC<RadioFormikType> = ({
  name,
  onChange,
  ...props
}) => {
  const handleChange = (form: any, value: any): void => {
    form.setFieldValue(name, JSON.parse(value))
    onChange?.(JSON.parse(value))
  }

  return (
    <Field name={name}>
      {({ form, field }: FieldAttributes<any>) => {
        const hasError = form.touched[name]
          ? Boolean(form?.errors[name])
          : false
        const helperText = form.touched[name] ? form?.errors[name] : null

        return (
          <OstiganRadio
            {...props}
            // setFieldValue={form.setFieldValue}
            defaultValue={JSON.stringify(field.value)}
            value={field.value}
            name={field.name}
            hasError={hasError}
            helperText={helperText}
            onChange={(value: any) => {
              handleChange(form, value)
            }}
          />
        )
      }}
    </Field>
  )
}
