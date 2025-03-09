import type { LableFieldType } from '../../../../types'

export const LabelField: React.FC<LableFieldType> = ({
  title,
  htmlFor,
  disabled,
  className,
}): JSX.Element => {
  return (
    <label
      className={`${className} ${
        disabled ? 'text-trueGray-500' : 'text-trueGray-700'
      } text-sm md:text-base font-semibold`}
      htmlFor={htmlFor}
    >
      {title}
    </label>
  )
}
