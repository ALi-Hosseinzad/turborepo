import {
  FormikSelect,
  FormikTextField,
  FormWrapper,
  OstiganButton,
  useTranslations,
  useWalletWithdrawFormViewModel,
  WalletWithdrawDescip,
} from '../../imports'

const WalletWithdrawForm = () => {
  const t = useTranslations()
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    selectOptions,
    isPending,
    isLoading,
  } = useWalletWithdrawFormViewModel()

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <>
          <FormikSelect
            listOptions={selectOptions}
            optionLabel="name"
            optionValue="id"
            isLoading={isLoading}
            size="Small"
            classnametitle="flex mb-2"
            name="bank_account_id"
            placeholder={t('chooseOneOfYourAcount')}
            selectLabel={t('chooseDestinationAccount')}
          />
          <FormikTextField
            name="amount"
            type="text"
            title={`${t('amount')} ${t('cashout')}`}
            placeholder={`${t('rial')} : 0`}
            sizeInput="small"
            classnametitle="flex !text-lg !font-medium !leading-9 mb-2 mt-4"
          />
          <WalletWithdrawDescip />
          <OstiganButton
            type="submit"
            variant="contained"
            className="flex !mt-8 "
            fullWidth
            isLoading={isPending}
          >
            {t('registerRequest')}
          </OstiganButton>
        </>
      )}
    </FormWrapper>
  )
}

export default WalletWithdrawForm
