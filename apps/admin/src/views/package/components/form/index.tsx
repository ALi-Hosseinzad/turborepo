import {
  CATEGORY_LIST_QUERY,
  CATEGORY_URL,
  CustomFormikAutoComplete,
  CustomFormikSelect,
  FormikRadio,
  FormikSelect,
  FormikSwitch,
  FormikTextEditor,
  FormikTextField,
  FormikUploader,
  FormLayout,
  TAG_LIST_QUERY,
  TAG_URL,
  UploadIcon,
  usePackageFormViewModel,
  useStatus,
  useTranslations,
  WAGE_LIST_QUERY,
  WAGE_URL,
} from '../../imports'

export const PackageForm = (props: any): JSX.Element => {
  const { validationSchema } = usePackageFormViewModel()
  const t = useTranslations()
  const { statusList } = useStatus()

  const {
    initialValues,
    titleHeader1,
    titleHeader2,
    isLoadingSubmit,
    onSubmit,
  } = props
  return (
    <FormLayout
      initialValues={initialValues}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      validationSchema={validationSchema}
      isLoading={isLoadingSubmit}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-2 gap-5 w-full">
        <FormikTextField
          name="title"
          title={t('packageName')}
          placeholder={t('packageName')}
          className="w-full"
        />
        <FormikTextField
          name="slug"
          title={t('slug')}
          placeholder={t('slug')}
          className="w-full"
        />
        <FormikTextField
          name="sku"
          title={t('sku')}
          placeholder="sku"
          className="w-full"
        />
        <CustomFormikAutoComplete
          name="category_ids"
          url={CATEGORY_URL}
          queryKey={CATEGORY_LIST_QUERY}
          label={t('category')}
          optionTitle="name"
          multiSelection
        />
        <FormikSelect
          name="status"
          placeholder={t('chooseStatus')}
          selectLabel={t('status')}
          optionValue="value"
          optionLabel="label"
          isLoading={false}
          listOptions={statusList}
        />
        <CustomFormikSelect
          name="wage_id"
          label={t('wage')}
          placeholder={t('chooseWage')}
          queryKey={WAGE_LIST_QUERY}
          url={WAGE_URL}
          optionLabel="amount"
          optionValue="id"
        />
        <FormikRadio
          name="discount_type"
          label={t('discountType')}
          labelClassName="mt-2"
          options={[
            { value: 'percent', label: t('percent') },
            { value: 'amount', label: t('decimal') },
          ]}
        />
        <FormikTextField
          name="amount"
          title={t('discountAmount')}
          placeholder={t('discountExample')}
          className="w-full"
        />
        <FormikSwitch
          // containerClass="col-span-2"
          name="is_credit_card"
          title={t('creditCard')}
        />

        <CustomFormikAutoComplete
          name="tag_ids"
          url={TAG_URL}
          queryKey={TAG_LIST_QUERY}
          label={t('tag')}
          optionTitle="name"
          multiSelection
        />
        <FormikTextEditor
          placeholder={`${t('description')}...`}
          name="description"
          textFeildLabel={t('description')}
        />
        <FormikUploader
          attachIcon={<UploadIcon />}
          name="image"
          isPositionCenter
          title={t('uploadImg')}
          limitationFileSizeText="25"
        />
      </div>
    </FormLayout>
  )
}
