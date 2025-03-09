import { useTranslations } from '../imports'
import { ListIcon } from 'ui/components/icons'

const WalletTableNoData = () => {
  const t = useTranslations()

  return (
    <div className="bg-white h-[499px] p-6 mt-[17px] rounded-md relative">
      <p className="text-lg font-semibold text-black">
        {t('transactionsList')}
      </p>
      <p className="flex justify-center items-center text-gray-500 text-lg w-full h-full absolute top-0 right-0">
        <ListIcon />
        {t('noTransaction')}
      </p>
    </div>
  )
}

export default WalletTableNoData
