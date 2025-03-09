import type { InputManagementFormViewType } from '../../imports'
import {
  FormikDynamicList,
  FormikRadio,
  FormikSelect,
  FormikSelectActive,
  FormikTextField,
  useFormikContext,
  useTranslations,
} from '../../imports'

export const InputManagementFormView = (
  props: InputManagementFormViewType,
): JSX.Element => {
  const {
    datainputTypeOption,
    dataRegexOption,
    handleSelectedOption,
    selectedOption,
    initialInputType,
    options,
    property,
    formTypeOptions,
  } = props
  const t = useTranslations()
  const { setFieldValue } = useFormikContext()
  const listOption = selectedOption?.name == 'option' ? options : []

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-3 w-full gap-8">
        <FormikTextField name="name" title={t('name')} />
        <FormikTextField name="label" title={t('title')} />
        <FormikTextField name="subLabel" title={t('subTitle')} />
        <FormikTextField name="placeholder" title={t('placeholder')} />
        <FormikSelectActive name="status" />
        <FormikRadio
          name="formType"
          label={t('deviceType')}
          activeBackgroundColor="var(--primary-background)"
          options={formTypeOptions}
        />
        <FormikSelect
          listOptions={datainputTypeOption}
          optionLabel="value"
          optionValue="value"
          name="inputType"
          placeholder={t('choose')}
          selectLabel={t('inputType')}
          onChangeHandler={(value): void => {
            handleSelectedOption(value, setFieldValue)
          }}
        />
        <FormikSelect
          listOptions={dataRegexOption}
          optionLabel="label"
          optionValue="label"
          name="helperText"
          placeholder={t('choose')}
          selectLabel={t('ErrorType')}
        />
      </div>

      <div
        className={`w-full relative border boreder-gray-200 rounded-b-lg transition-all duration-1000 overflow-hidden mt-2 ${
          selectedOption?.status || initialInputType
            ? 'opacity-100 min-h-40 py-4'
            : 'opacity-0 h-0'
        }`}
      >
        <div className="w-full relative min-h-40 pr-2">
          <FormikDynamicList
            name={selectedOption?.name}
            type={selectedOption?.type}
            list={selectedOption?.name == 'property' ? property : listOption}
          />
        </div>
      </div>
    </div>
  )
}
