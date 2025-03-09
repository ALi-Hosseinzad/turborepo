import {
  FormikCheckbox,
  FormikTextField,
  FormWrapper,
  OstiganButton,
  UseTomanToRial,
  useTranslations,
  WalletPricesBlock,
} from '../../imports'

const WalletFormAddBalanceView = ({
  initialValues,
  handleSubmit,
  validationSchema,
  isPending = false,
  isAddBalanceLoading = false,
  isAddBalanceSuccess = false,
}) => {
  const t = useTranslations()
  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps: any) => {
        const { values, setFieldValue } = formikProps
        return (
          <div>
            <FormikTextField
              name="amount"
              type="text"
              sizeInput="Small"
              title={t('depositAmount')}
              classnametitle="flex text-lg font-medium mb-5"
              placeholder={`${t('example')}: 200.000 ${t('rial')}`}
            />
            <WalletPricesBlock setFieldValue={setFieldValue} />
            <div className="flex justify-between mt-7 ">
              <span>{t('finalPayment')}</span>
              <span>
                {UseTomanToRial(values.amount)}
                {t('rial')}
              </span>
            </div>
            <FormikCheckbox
              name="accept_law"
              label={t('acceptLaw')}
              checkboxClassName="mr-[-15px] mt-9"
            />
            <OstiganButton
              type="submit"
              variant="contained"
              fontSize="16px"
              className="w-full mt-3"
              disabled={
                isAddBalanceLoading ||
                isAddBalanceSuccess ||
                !values.accept_law ||
                values.amount <= 0
              }
              isLoading={
                isAddBalanceLoading || isAddBalanceSuccess || isPending
              }
            >
              {t('moveTopaymentGateway')}
            </OstiganButton>
          </div>
        )
      }}
    </FormWrapper>
  )
}

export default WalletFormAddBalanceView
