import { FormikTextField } from 'ui'
import { useTranslations } from '../../imports'

const WalletTransferPostForm = () => {
  const t = useTranslations()

  return (
    <div className="mt-6 grid grid-flow-row gap-4 items-end">
      <FormikTextField
        name="amount"
        classnametitle="!text-base !font-medium"
        title={t('transferAmount')}
        placeholder={t('enterTransferAmount')}
        sizeInput="small"
        classNameContainer="col-span-5"
      />
    </div>
  )
}

export default WalletTransferPostForm
