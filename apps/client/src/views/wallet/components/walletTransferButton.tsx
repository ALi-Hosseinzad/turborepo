import { OstiganButton } from 'ui'
import { useTranslations } from '../imports'

const WalletTransferButton = ({ isLoading }) => {
  const t = useTranslations()

  return (
    <div className="mt-6">
      <OstiganButton
        className="h-10 whitespace-nowrap "
        variant="contained"
        fontSize="16px"
        fullWidth
        isLoading={isLoading}
        type="submit"
      >
        {t('nextStep')}
      </OstiganButton>
    </div>
  )
}

export default WalletTransferButton
