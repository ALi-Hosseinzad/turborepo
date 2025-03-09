import type { BankCardType } from '../imports'
import { CreditCardIcon, Image, React, useFormatNumber } from '../imports'

export const BankCard = ({
  cardInfo,
  disabled = false,
}: BankCardType): JSX.Element => {
  const color = cardInfo?.bank_colors
  const cardNumber = useFormatNumber({
    numericString: cardInfo?.card_number,
    type: 'separateFromRight',
    symbol: '-',
    numberDivider: /.{1,4}/g,
  })

  return (
    <div className="relative">
      {disabled ? (
        <div
          className=" absolute bg-[#8D8D8D]/[0.5] inset-0 border rounded-xl"
          style={{
            maxWidth: '400px',
          }}
        />
      ) : null}
      <div
        className="rounded-xl flex flex-col justify-between border p-4 pb-8 h-72 xl:h-64 bg-yellow-500"
        style={{
          background: `linear-gradient(45deg,${color?.up}, ${color?.middle},${color?.down})`,
          maxWidth: '400px',
        }}
      >
        <div className="flex justify-between items-center">
          <Image
            src={cardInfo?.logo}
            width={40}
            height={40}
            alt={cardInfo?.bank_name}
          />

          {!cardInfo?.is_verify && cardInfo?.jibit_status ? (
            <span className="text-error-default bg-error-background flex justify-center items-center rounded-lg py-1 px-3 z-10">
              {cardInfo?.is_verify_label}
            </span>
          ) : null}
          {cardInfo?.is_verify && cardInfo?.jibit_status ? (
            <span className="text-success-default bg-tint-100 flex justify-center items-center rounded-lg py-1 px-3 z-10">
              {cardInfo?.is_verify_label}
            </span>
          ) : null}
          {cardInfo?.is_verify && !cardInfo?.jibit_status ? (
            <span className="text-warning-status bg-warning-background flex justify-center items-center rounded-lg py-1 px-3 z-10">
              {cardInfo?.is_verify_label}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <p className="text-normal-sm text-black overflow-hidden">
            {cardInfo?.name?.split('_').join(' ')}
          </p>
          <p className="text-normal-sm text-black overflow-hidden">
            {cardNumber}
          </p>
          <p className="text-medium-sm text-black pt-1 overflow-hidden">
            IR{cardInfo?.sheba_number}
          </p>
        </div>
        <CreditCardIcon className="mr-auto" />
      </div>
    </div>
  )
}
