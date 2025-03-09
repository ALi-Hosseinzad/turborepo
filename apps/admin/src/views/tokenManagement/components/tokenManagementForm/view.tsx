import type { TokenManagementFormViewType } from '../../imports'
import {
  FormikAutoComplete,
  FormikSelect,
  FormikTextField,
  useTranslations,
} from '../../imports'

export const TokenManagementFormView = (
  props: TokenManagementFormViewType,
): JSX.Element => {
  const {
    dataProductsOption,
    isLoadingProduct,
    handleProductOption,
    dataPrice,
    isLoadingPrice,
    initialValues,
  } = props
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-4 w-full">
      <FormikAutoComplete
        listOption={dataProductsOption}
        optionTitle="name"
        name="product"
        placeholder={t('chooseOrtype')}
        autoCompleteLabel={t('chooseProduct')}
        isLoading={isLoadingProduct}
        numberMenuColumns={2}
        onChangeHandler={handleProductOption}
      />
      <div className="grid grid-cols-2 w-full gap-8">
        <FormikTextField name="token" title={t('token')} />
        <FormikSelect
          listOptions={dataPrice}
          defaultValue={initialValues.price}
          optionLabel="price"
          optionValue="price"
          name="price"
          placeholder={t('choose')}
          selectLabel={t('selectProductPrice')}
          disabled={dataPrice?.length === 0}
          isLoading={isLoadingPrice}
          addintionalData={t('euro')}
        />
      </div>
    </div>
  )
}
