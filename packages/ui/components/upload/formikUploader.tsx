'use client'

import { Field } from 'formik'
import type { FieldAttributes } from 'formik'
import type { FormikFileUploaderPropsType } from '../../types'
import { OstiganUploader } from './ostiganUploader'

export const FormikUploader: React.FC<FormikFileUploaderPropsType> = (
  props,
) => {
  const { multiple } = props

  return (
    <Field name={props.name}>
      {({ field, form }: FieldAttributes<any>) => {
        return (
          <OstiganUploader
            {...props}
            value={field.value}
            errors={form.touched[field.name] ? form.errors[field.name] : null}
            defaultImage={form.initialValues?.[field?.name]}
            handelDeleteflle={() => {
              form.setFieldValue(props.name, null)
            }}
            onChange={(values: any) => {
              const curValue = multiple ? values : values[0]
              form.setFieldValue(props.name, curValue)
              props?.onChange?.(curValue)
            }}
            onBlur={field?.onBlur}
          />
        )
      }}
    </Field>
  )
}
