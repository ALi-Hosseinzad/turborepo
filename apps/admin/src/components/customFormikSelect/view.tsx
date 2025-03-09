import { FormikSelect } from 'ui'

const CustomFormikSelectView = ({
  items,
  name,
  isLoading,
  params,
  onScrollToLastItemHandler,
  placeholder,
  optionLabel,
  optionValue,
  multiple,
  disabled,
  onChangeHandler,
}: any): JSX.Element => {
  return (
    <FormikSelect
      placeholder={placeholder}
      disabled={disabled}
      listOptions={items}
      optionLabel={optionLabel}
      optionValue={optionValue}
      name={name}
      isLoading={isLoading}
      sxPaper={{ height: `${Number(params.perPage) * 20}px` }}
      multiple={multiple}
      onScrollToLastItem={onScrollToLastItemHandler}
      onChangeHandler={onChangeHandler}
    />
  )
}

export default CustomFormikSelectView
