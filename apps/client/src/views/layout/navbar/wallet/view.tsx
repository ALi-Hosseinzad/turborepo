import {
  UseTomanToRial,
  useTranslations,
  WalletIcon,
  type WalletMenuViewProps,
} from '../import'

const WalletMenuView: React.FC<WalletMenuViewProps> = ({ userData }) => {
  const t = useTranslations()

  return (
    <div className="hidden md:flex">
      <div className="flex flex-row text-darkTypo justify-center items-center border-l-[0.5px]">
        <div className="mx-2">
          <span className="text-normal-sm">
            {userData?.balance ? UseTomanToRial(userData.balance) : 0}
          </span>
          <span className="text-normal-xs"> {t('rial')}</span>
        </div>
      </div>
      <WalletIcon
        className="w-6 h-6 mr-2 cursor-pointer"
        color="black"
        onClick={() => {
          // Typically handle click or do nothing
        }}
      />
    </div>
  )
}

export default WalletMenuView
