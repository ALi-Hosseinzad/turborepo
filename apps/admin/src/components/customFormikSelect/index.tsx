import React from 'react'
import { LabelField } from 'ui'
import type { FormikSelectPropsType } from 'types/common'
import CustomFormikSelectView from './view'
import { useSelectViewModel } from './viewModel'

const FormikSelect = (props: FormikSelectPropsType): JSX.Element => {
  const {
    name,
    label,
    url,
    queryKey,
    placeholder,
    optionLabel,
    optionValue,
    multiple,
    disabled,
    className,
    onChangeHandler,
  } = props
  const {
    items,
    defaultCurValue,
    isLoading,
    params,
    onScrollToLastItemHandler,
  } = useSelectViewModel(url, queryKey)

  return (
    <div className={`w-full ${className}`}>
      <LabelField title={label} />
      <CustomFormikSelectView
        items={items}
        disabled={disabled}
        defaultValue={defaultCurValue}
        name={name}
        isLoading={isLoading}
        placeholder={placeholder}
        params={params}
        optionLabel={optionLabel}
        multiple={multiple}
        optionValue={optionValue}
        onScrollToLastItemHandler={onScrollToLastItemHandler}
        onChangeHandler={onChangeHandler}
      />
    </div>
  )
}

export default FormikSelect
