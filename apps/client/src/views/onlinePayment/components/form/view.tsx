import {
  FormikRadio,
  FormikSelect,
  FormikTextField,
  InputAdornment,
  InputView,
  useTranslations,
} from '../../imports'

export const OnlinePaymentFormView = ({
  inputsForm,
  subscriptions,
  regions,
  rangePrice,
}) => {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-4 py-6 w-full">
      {inputsForm
        ?.sort((a, b) => {
          return a?.priority - b?.priority
        })
        ?.map((item) => {
          let propertyList: Record<string, any> | undefined
          if (item.property) {
            propertyList = item.property?.reduce((acc, key) => {
              if (key.label != null) {
                acc[key?.label] = key?.value
                return acc
              }
              return acc
            }, {})
          }
          return (
            <div>
              <InputView inputInfo={item} property={propertyList} />
            </div>
          )
        })}

      <div className="flex flex-col gap-4">
        {subscriptions?.length ? (
          <div className="pt-4">
            <FormikRadio
              name="subscriptions"
              options={subscriptions}
              optionLabel="label"
              // optionValue="description"
              defaultValue={subscriptions[0]}
              label={t('subscriptions')}
              showRadioIcon={false}
              activeBackgroundColor="var(--primary-background)"
            />
          </div>
        ) : (
          <div>
            <FormikTextField
              name="rangePrice"
              title={t('amount')}
              defaultValue={
                rangePrice?.minPrice === rangePrice?.maxPrice
                  ? rangePrice?.maxPrice
                  : null
              }
              disabled={rangePrice?.minPrice === rangePrice?.maxPrice}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    {rangePrice?.minPrice === rangePrice?.maxPrice ||
                    regions?.length == 1
                      ? regions?.[0]?.currency?.name
                      : ''}
                  </InputAdornment>
                ),
              }}
            />
            <p className="text-xs pt-0">
              مبلغ وارد شده باید بین {rangePrice?.minPrice} و
              {rangePrice?.maxPrice} باشد
            </p>

            {regions?.length > 1 ? (
              <FormikSelect
                name="region"
                selectLabel={t('currencyType')}
                listOptions={regions}
                optionLabel="currencyType"
                optionValue="slug"
                placeholder={t('choose')}
              />
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
