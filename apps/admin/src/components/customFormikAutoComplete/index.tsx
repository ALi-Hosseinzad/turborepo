import CustomFormikAutoCompleteView from './view'
import { useCustomFormikAutoComplete } from './viewModel'

const CustomFormikAutoComplete = (props: any): JSX.Element => {
  const { url, queryKey, name, label, optionTitle, multiSelection, enabled } =
    props
  const { data, isLoading } = useCustomFormikAutoComplete(
    url,
    queryKey,
    enabled,
  )

  return (
    <div className="w-full">
      <CustomFormikAutoCompleteView
        data={Array.isArray(data) ? data : data?.data}
        name={name}
        isLoading={isLoading}
        label={label}
        optionTitle={optionTitle}
        multiSelection={multiSelection}
      />
    </div>
  )
}

export default CustomFormikAutoComplete
