import { handleLocalStorage } from 'utils/localStorage'
import { useTranslations } from 'next-intl'
import { FormikSelect } from 'ui'

export const FormikSelectStatus = ({ name }: { name: string }): JSX.Element => {
  const t = useTranslations()
  const enums = handleLocalStorage({ type: 'getLocalStorage', key: 'enums' })

  const statusList =
    enums?.GiftCard?.gift_card_product?.gift_card_product_status

  return (
    <FormikSelect
      listOptions={statusList}
      optionLabel="label"
      optionValue="value"
      name={name}
      placeholder={t('choose')}
      selectLabel={t('status')}
      isLoading={false}
    />
  )
}
