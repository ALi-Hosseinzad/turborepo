'use client'

import { Field } from 'formik'
import type { FieldAttributes } from 'formik'
import type { FormikSwitchType } from '../../../types/switch'
import { OstiganSwitch } from './ostiganSwitch'

export const FormikSwitch: React.FC<FormikSwitchType> = (props) => {
  return (
    <Field name={props.name}>
      {({ form, field }: FieldAttributes<any>) => {
        return (
          <OstiganSwitch
            {...props}
            checked={field.value}
            defaultChecked={props.defaultChecked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              form.setFieldValue(props.name, e.target.checked)
            }}
          />
        )
      }}
    </Field>
  )
}
