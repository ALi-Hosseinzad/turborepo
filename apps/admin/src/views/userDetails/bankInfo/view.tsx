import type { BankInfoViewType } from '../imports'
import {
  BANK_ACCOUNT_URL,
  BankCard,
  BankInfoIcon,
  FormUserDetailsLayout,
  Header2,
  NoData,
  useTranslations,
} from '../imports'

export const BankInfoView = (props: BankInfoViewType): JSX.Element => {
  const {
    verifiedBankCard,
    unVerifiedBankCard,
    needAdminverifiedBankCard,
    bankCardNumber,
  } = props
  const t = useTranslations()

  return (
    <>
      {Number(bankCardNumber) > 0 ? (
        <div className="flex flex-col">
          <Header2 title={t('bankInfo')} className="mx-8 pt-8" />
          {verifiedBankCard?.length > 0 && (
            <div
              className={`grid grid-cols-3 gap-4 border-trueGray-400 w-full pb-8 px-8 ${
                unVerifiedBankCard?.length > 0 ? 'border-b' : ''
              }`}
            >
              {verifiedBankCard?.map((item) => (
                <BankCard key={item.id} cardInfo={item} />
              ))}
            </div>
          )}
          {unVerifiedBankCard?.length > 0 && (
            <div
              className={`grid grid-cols-3 gap-4 border-trueGray-400 w-full py-8 px-8
        ${unVerifiedBankCard?.length > 0 ? 'border-b' : ''}`}
            >
              {unVerifiedBankCard?.map((item) => (
                <BankCard key={item.id} cardInfo={item} />
              ))}
            </div>
          )}

          {needAdminverifiedBankCard?.length > 0 && (
            <div className="flex flex-col gap-4 bg-customWhite w-full">
              {needAdminverifiedBankCard?.map((item) => (
                <FormUserDetailsLayout
                  key={item.id}
                  id={item.id}
                  url={BANK_ACCOUNT_URL}
                >
                  <div className="grid grid-cols-3 gap-4">
                    <BankCard key={item.id} cardInfo={item} />
                  </div>
                </FormUserDetailsLayout>
              ))}
            </div>
          )}
        </div>
      ) : (
        <NoData
          icon={<BankInfoIcon className="w-10 h-10" />}
          text={t('thereIsNoBankCard')}
        />
      )}
    </>
  )
}
