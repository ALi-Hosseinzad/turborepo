import CustomFormikSelect from 'components/customFormikSelect'
import {
  CATEGORY_URL,
  FormikSelect,
  FormikTextEditor,
  FormikTextField,
  FormikUploader,
  FormLayout,
  useTranslations,
} from '../../imports'

const CategoryCreateForm = (props: any): JSX.Element => {
  const t = useTranslations()
  const {
    isLoading,
    titleHeader1,
    titleHeader2,
    initialValues,
    categoryTypesList,
    validationSchema,
    onSubmit,
  } = props

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      isLoading={isLoading}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-2 gap-6 w-full">
        <FormikTextField
          name="name"
          title={t('name')}
          placeholder={t('enterYourName')}
        />
        <FormikTextField
          name="slug"
          title={t('englishSlug')}
          placeholder={t('slug')}
        />
        <FormikSelect
          name="type"
          optionValue="value"
          optionLabel="label"
          selectLabel={t('categoryType')}
          placeholder={t('choose')}
          listOptions={categoryTypesList}
        />
        <CustomFormikSelect
          label={t('parentCategory')}
          name="parent_id"
          placeholder={t('chooseCategory')}
          queryKey="categories"
          url={CATEGORY_URL}
          optionLabel="name"
          optionValue="id"
        />
        <FormikUploader
          name="category_image"
          typeUploader="typeInputUploader"
        />
        <FormikTextEditor name="description" placeholder={t('description')} />
      </div>
    </FormLayout>
  )
}

export default CategoryCreateForm
