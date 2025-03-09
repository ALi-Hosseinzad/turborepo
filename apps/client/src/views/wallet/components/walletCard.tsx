import { useTranslations } from 'next-intl'
import UseTomanToRial from '@/hooks/useTomanToRial'
import { WalletCardIcon, WalletIcon } from 'ui/components/icons'

export const WalletCard = ({ walletNumber, balance }) => {
  const t = useTranslations()

  return (
    <div className=" flex justify-center text-customWhite">
      <div className="relative flex justify-center">
        <WalletCardIcon className="w-full h-full xl:w-full xl:h-[300px]" />
        <div className="absolute inset-0 flex flex-col justify-between lg:justify-center gap-2 p-6 pt-6 md:p-5 md:px-8 md:gap-2 lg:p-8 lg:pb-4 lg:gap-2 xl:px-6 xl:pl-8 xl:gap-6 xl:pb-8 2xl:gap-10 2xl:pb-8">
          <div className="flex items-center">
            <WalletIcon className="lg:w-8 lg:h-8 w-6 h-6 ml-2" color="white" />
            <p className="text-[10px] lg:text-base">{t('walletRial')}</p>
          </div>

          <p className="flex justify-between font-IRANSansX  md:title-sm lg:text-[22px]  sm:text-[25px] xs:text-[20px] font-semibold text-center text-white w-full max-w-[348px] mx-auto">
            {walletNumber?.split('')?.map((num: number) => <span>{num}</span>)}
          </p>

          <div className="flex justify-between items-center">
            <p className="text-[10px] lg:text-base">موجودی</p>
            <div className="flex !items-center gap-2">
              <span>{UseTomanToRial(balance)}</span>
              <span> {t('rial')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
