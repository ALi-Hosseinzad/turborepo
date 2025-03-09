import { useTranslations } from '../../imports'

const WalletTransferShowData = ({
  data,
  amount,
}: {
  data: any
  amount?: string | number
}) => {
  const t = useTranslations()
  const blockClassName = 'flex justify-between'

  return (
    <>
      {data ? (
        <div className="flex flex-col gap-y-5 mt-6 bg-trueGray-100 px-4 py-3">
          <div className={blockClassName}>
            <span>{`${t('ownerAccountName')}:`}</span>
            <span className="font-medium">{data?.name}</span>
          </div>
          <div className={blockClassName}>
            <span>{`${t('accountNumber')}:`}</span>
            <span className="font-medium">{data?.wallet_number}</span>
          </div>
          {amount ? (
            <div className={blockClassName}>
              <span>{`${t('transferAmount')}:`}</span>
              <span className="font-medium">
                {amount}
                {t('rial')}
              </span>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  )
}

export default WalletTransferShowData
