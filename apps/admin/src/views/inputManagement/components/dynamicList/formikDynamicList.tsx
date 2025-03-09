import type { FieldAttributes } from 'formik'
import { Field } from 'formik'
import { DynamicList } from './dynamicList'

export const FormikDynamicList = (props: any): JSX.Element => {
  return (
    <Field name={props.name}>
      {({ form, field }: FieldAttributes<any>) => {
        return (
          <DynamicList
            {...props}
            value={field.value}
            error={
              form.touched[field.name]
                ? Boolean(form.errors[field.name])
                : false
            }
            helperText={
              form.touched[field.name] ? form.errors[field.name] : null
            }
            onChangeHandler={(value) => {
              form.setFieldValue(props.name, value)
            }}
            onBlur={field.onBlur}
          />
        )
      }}
    </Field>
  )
}
