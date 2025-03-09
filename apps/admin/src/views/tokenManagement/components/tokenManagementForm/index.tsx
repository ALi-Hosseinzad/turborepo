'use client'

import type { TokenManagementFormType } from '../../imports'
import {
  FormLayout,
  Loading,
  TokenManagementFormView,
  useTokenManagementFormViewModel,
  useTranslations,
} from '../../imports'

export const TokenManagementForm = (
  props: TokenManagementFormType,
): JSX.Element => {
  const {
    initialValues,
    setInitialValues,
    onSubmit,
    isLoading,
    disabled,
    titleHeader1,
  } = props

  const t = useTranslations()
  const {
    validationSchema,
    dataProductsOption,
    isLoadingProduct,
    handleOnChangeProductOption,
    dataPriceOption,
    isLoadingPrice,
  } = useTokenManagementFormViewModel(initialValues, setInitialValues)

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={t('tokenInfo')}
      isLoading={isLoading}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      <TokenManagementFormView
        initialValues={initialValues}
        dataProductsOption={dataProductsOption}
        isLoadingProduct={isLoadingProduct}
        handleProductOption={handleOnChangeProductOption}
        dataPrice={dataPriceOption}
        isLoadingPrice={isLoadingPrice}
      />
      <Loading isLoading={isLoading} />
    </FormLayout>
  )
}
