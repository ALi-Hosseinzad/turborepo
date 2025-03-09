import type { BankCardLegalPropsType } from '../imports'
import { CreditCardIcon, DeleteIcon, Image, useTranslations } from '../imports'

const BankCardLegal: React.FC<BankCardLegalPropsType> = ({
  numberOfCards,
  cardInfo,
  handleBankCardDelete,
}) => {
  const color = cardInfo.bank_colors
  const t = useTranslations()

  // Function to determine the label class based on the verify label
  const getVerifyLabelClass = () => {
    if (cardInfo.is_verify_label === t('failed')) {
      return 'text-error'
    } else if (cardInfo.is_verify_label === t('waiting')) {
      return 'text-warning'
    }
    return 'text-[#01BC8D]'
  }

  // Conditional rendering for DeleteIcon
  const renderDeleteIcon = () => {
    if (numberOfCards > 1 && handleBankCardDelete) {
      return (
        <DeleteIcon
          className="cursor-pointer"
          onClick={() => handleBankCardDelete(cardInfo.id)}
        />
      )
    }
    return null
  }

  return (
    <div
      className="rounded-xl flex flex-col justify-between p-4 pb-8 h-72 xl:h-64"
      style={{
        background: `linear-gradient(45deg,${color?.up}, ${color?.middle},${color?.down})`,
      }}
    >
      <div className="flex justify-between items-center">
        <div className="relative w-10 h-10">
          <Image
            src={cardInfo?.logo}
            alt={t('addCard')}
            fill
            className="absolute"
          />
        </div>
        {renderDeleteIcon()}
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <p className="text-normal-sm text-black overflow-hidden">
          {cardInfo?.bank_name}
        </p>
        <p className="title-base text-black pt-3 overflow-hidden">
          {cardInfo?.card_number}
        </p>
        <p className="text-medium-sm text-black pt-1 overflow-hidden">
          IR{cardInfo?.sheba_number}
        </p>
      </div>
      <div className="flex">
        <span className={getVerifyLabelClass()}>
          {cardInfo?.is_verify_label}
        </span>
        <CreditCardIcon className="mr-auto" />
      </div>
    </div>
  )
}

export default BankCardLegal
