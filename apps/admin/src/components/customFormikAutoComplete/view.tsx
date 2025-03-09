import { useTranslations } from 'next-intl'
import { FormikAutoComplete } from 'ui'
import type { CustomAutoCompleteViewPropsType } from 'types/common'

const CustomFormikAutoCompleteView = (
  props: CustomAutoCompleteViewPropsType,
): JSX.Element => {
  const { data, name, label, isLoading, optionTitle, multiSelection } = props
  const t = useTranslations()

  return (
    <FormikAutoComplete
      {...props}
      listOption={data}
      optionTitle={optionTitle}
      name={name}
      placeholder={t('chooseOrtype')}
      autoCompleteLabel={label}
      isLoading={isLoading}
      multiSelection={multiSelection}
      numberMenuColumns={4}
    />
  )
}

export default CustomFormikAutoCompleteView
