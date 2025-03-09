import {
  CategoryCreateFormView,
  useCategoryFormViewModel,
  useCategoryListViewModel,
} from '../../imports'

const CategoryCreateForm = (props: any): JSX.Element => {
  const { isLoading, titleHeader1, titleHeader2, initialValues, onSubmit } =
    props
  const {
    categoryTypesList,
    categories,
    onScrollToLastItemHandler,
    isLoadingCategoriesList,
    validationSchema,
  } = useCategoryFormViewModel()
  const { params }: any = useCategoryListViewModel()

  return (
    <CategoryCreateFormView
      categoryTypesList={categoryTypesList}
      categories={categories}
      isLoadingCategoriesList={isLoadingCategoriesList}
      validationSchema={validationSchema}
      isLoading={isLoading}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      initialValues={initialValues}
      params={params}
      onScrollToLastItemHandler={onScrollToLastItemHandler}
      onSubmit={onSubmit}
    />
  )
}

export default CategoryCreateForm
