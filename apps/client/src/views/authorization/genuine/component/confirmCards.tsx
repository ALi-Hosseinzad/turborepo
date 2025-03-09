import { useTranslations } from 'next-intl'
import type { ConfirmCardType } from '../imports'

const ConfirmCard: React.FC<ConfirmCardType> = ({
  backgroundColor,
  bgRounded,
  cardIcon,
  external,
  description,
  borderRadius,
  fadingCircle,
  confirmation,
}) => {
  const t = useTranslations()
  return (
    <div
      className={`basis-full relative my-2 max-h-[110px] min-h-[110px] min-w-80 max-w-[414px] md:flex md:basis-1/2 lg:basis-1/3 ${borderRadius}`}
    >
      <div className="absolute p-4  top-0 left-0">
        {confirmation ? confirmation : null}
      </div>
      <div
        className={`${backgroundColor} ${bgRounded} flex items-center   p-4 space-x-4 rounded-md`}
      >
        <div
          className={`flex justify-center items-center rounded-full w-16 h-16 opacity-75   ml-3 ${fadingCircle}`}
        >
          {cardIcon}
        </div>
        <div className="flex flex-col justify-center items-right">
          <h2 className="text-lg font-semibold">{t(external)}</h2>
          <p className="text-sm"> {t(description)}</p>
        </div>
      </div>
    </div>
  )
}

export default ConfirmCard
