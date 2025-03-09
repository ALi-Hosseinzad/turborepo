import {
  CustomFormikSelect,
  FORM_INPUT_URL,
  FormikSelect,
  FormikSelectActive,
  FormikTextField,
  FormPreview,
  useFormikContext,
  useTranslations,
} from '../../imports'

export const FormManagementFormView = ({
  isSuccessPostForm,
  initialinputData,
}): JSX.Element => {
  const t = useTranslations()
  const { setFieldValue, values } = useFormikContext()

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-5 w-full gap-6">
        <div className="col-span-3 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <FormikTextField name="formName" title={t('formName')} />

            <div className="w-1/2">
              <FormikSelectActive name="status" />
            </div>

            <CustomFormikSelect
              url={FORM_INPUT_URL}
              optionLabel="label"
              optionValue="name"
              name="inputType"
              placeholder={t('choose')}
              label={t('inputType')}
              queryKey="form-list"
              onChangeHandler={() => {
                void setFieldValue('required', '')
              }}
            />
            <div className="w-1/2">
              <FormikSelect
                listOptions={[
                  { value: 'required', label: 'ضروری' },
                  { value: 'optional', label: 'اختیاری' },
                ]}
                optionLabel="label"
                optionValue="label"
                name="required"
                placeholder={t('choose')}
                selectLabel={t('status')}
                onChangeHandler={() => {
                  void setFieldValue('inputType', {
                    ...values?.inputType,
                    required: values?.required?.value,
                  })
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2">
          <FormPreview
            isSuccessPostForm={isSuccessPostForm}
            initialinputData={initialinputData}
          />
        </div>
      </div>
    </div>
  )
}
