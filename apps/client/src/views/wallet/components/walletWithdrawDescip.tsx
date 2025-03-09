import { AlarmIcon, CaveatIcon, useTranslations } from '../imports'

const WalletWithdrawDescip = () => {
  const t = useTranslations()
  const curStyle = 'text-lg font-medium'

  return (
    <>
      <div className="border-b border-b-grayWhite pb-8">
        <div className="flex justify-between mt-8">
          <span className={curStyle}>موجودی قابل برداشت روزانه</span>
          <span className={curStyle}>52.000 تومان</span>
        </div>
        <div className="flex justify-between mt-8">
          <span className={curStyle}>کارمزد برداشت</span>
          <span className={curStyle}>0 {t('toman')}</span>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex mb-2">
          <AlarmIcon className="ml-2" />
          <span className={curStyle}>زمان حدودی تسویه</span>
        </div>
        <span className="text-base">
          وجه واریزی تا ساعت .. روز کاری جاری واریز میگردد.
        </span>
      </div>
      <div className="bg-orange-light p-3 mt-4">
        <div className="flex">
          <CaveatIcon />
          <span className="mr-2">نکات مهم قبل از برداشت</span>
        </div>
        <ul className="list-disc mr-4 mt-2">
          <li>کارمزد برداشت برای عملیات بانکی می باشد.</li>
          <li className="mt-3">برای اطلاع از زمان دقیق تسویه تیکت بزنید.</li>
        </ul>
      </div>
    </>
  )
}

export default WalletWithdrawDescip
