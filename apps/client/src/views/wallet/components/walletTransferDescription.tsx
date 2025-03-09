import { useTranslations } from '../imports'

const WalletTransferDescription = () => {
  const t = useTranslations()

  const descriptions = [
    t('transferWithId'),
    t('transferWithQr'),
    t('transferWithWallet'),
    t('transferWithCall'),
  ]

  return (
    <div className="flex flex-col gap-y-3 bg-orange-default py-4 px-6">
      <p className="mb-2 font-semibold mr-[14px]">{t('transferWays')}</p>
      <ul>
        {descriptions.map((des: string) => (
          <li className="list-disc mb-3" key={des}>
            {des}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WalletTransferDescription
