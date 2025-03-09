import type { FC } from 'react'
import Switch from '@mui/material/Switch'
import type { SwitchType } from '../../../types'
import { LabelField } from '../label'

export const OstiganSwitch: FC<SwitchType> = ({
  checked,
  onChange,
  defaultChecked,
  containerClass,
  color = 'primary',
  disabled,
  title,
}) => {
  return (
    <div className={`${containerClass} h-full items-center`}>
      {!title || (
        <div className="mb-4">
          <LabelField htmlFor="name" title={title} disabled={disabled} />
        </div>
      )}
      <Switch
        disabled={disabled}
        defaultChecked={defaultChecked}
        checked={checked}
        color={color}
        onChange={onChange}
      />
    </div>
  )
}
