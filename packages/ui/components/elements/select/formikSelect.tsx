'use client'

import { Field } from 'formik'
import type { FieldAttributes } from 'formik'
import type { FormikSelectType } from '../../../types/select'
import { OstiganSelect } from './ostiganSelect'

export const FormikSelect: React.FC<FormikSelectType> = (props) => {
  return (
    <Field name={props.name}>
      {({ form, field }: FieldAttributes<any>) => {
        return (
          <OstiganSelect
            {...props}
            setFieldValue={form.setFieldValue}
            value={field.value}
            error={
              form.touched[field.name]
                ? Boolean(form.errors[field.name])
                : false
            }
            helperText={
              form.touched[field.name] ? form.errors[field.name] : null
            }
            onChange={(value) => {
              // const removeDuplicates = value.filter((item, index) => {
              //   return (
              //     index ===
              //     value.findIndex(
              //       (o) => item?.[props.optionLabel] === o?.[props.optionLabel],
              //     )
              //   )
              // })

              form.setFieldValue(props.name, value)
              props.onChangeHandler && props.onChangeHandler?.(value)
            }}
            onBlur={field.onBlur}
          />
        )
      }}
    </Field>
  )
}
