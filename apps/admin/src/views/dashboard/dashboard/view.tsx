'use client'

import {
  OstiganLogoWithNameIconWhite,
  UseTomanToRial,
  useTranslations,
} from '../imports'

const DashboardView = (props): JSX.Element => {
  const { dataOrder, dataUser, dataGiftCardPakage, bodyInfo } = props

  const t = useTranslations()

  return (
    <>
      <div className="flex flex-row cursor-pointer gap-9 mt-10">
        <div className="flex flex-col justify-center  items-center bg-gradient-to-r from-[#9de6d2] to-[#69d2b4] hover:from-[#c2f0e3] hover:to-[#9de6d2] box-shadow: 0px 4px 16px rgba(1,188,141,1), 0px 8px 24px rgba(1,188,136,1), 0px 16px 56px rgba(1,188,136,1) basis-1/4 h- shadow hover:shadow-lg">
          <div className="mt-2 text-white	">{t('orderLeangth')}</div>
          <div className="mt-2 text-white	">
            {dataOrder} {t('number')}
          </div>
        </div>

        <div className="flex flex-col justify-center  items-center bg-gradient-to-r from-[#c2f0e3] to-[#9de6d2] hover:from-[#c2f0e3] hover:to-[#9de6d2] box-shadow: 0px 4px 16px rgba(1,188,141,1), 0px 8px 24px rgba(1,188,136,1), 0px 16px 56px rgba(1,188,136,1) basis-1/4 h-40 shadow hover:shadow-lg">
          <div className="mt-2 text-white	">{t('priceOrder')}</div>
          <div className="mt-2 text-white	">
            {UseTomanToRial(bodyInfo)} {t('rial')}
          </div>
        </div>

        <div className="flex flex-col justify-center  items-center bg-gradient-to-r from-[#9de6d2] to-[#c2f0e3]  hover:from-[#c2f0e3] hover:to-[#9de6d2] box-shadow: 0px 4px 16px rgba(1,188,141,1), 0px 8px 24px rgba(1,188,136,1), 0px 16px 56px rgba(1,188,136,1) basis-1/4 h-40 shadow hover:shadow-lg">
          <div className="mt-2 text-white	">{t('constGiftCart')}</div>
          <div className="mt-2 text-white	">
            {dataGiftCardPakage} {t('number')}
          </div>
        </div>

        <div className="flex flex-col justify-center  items-center bg-gradient-to-r from-[#69d2b4] to-[#9de6d2] hover:from-[#c2f0e3] hover:to-[#9de6d2] box-shadow: 0px 4px 16px rgba(1,188,141,1), 0px 8px 24px rgba(1,188,136,1), 0px 16px 56px rgba(1,188,136,1) basis-1/4 h- shadow hover:shadow-lg">
          <div className="mt-2 text-white	">{t('allUsers')}</div>
          <div className="mt-2 text-white	">
            {dataUser} {t('number')}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[50vh] px-8 opacity-25">
        <OstiganLogoWithNameIconWhite className=" w-96 h-80  stroke-[#c2f0e3] " />
      </div>
    </>
  )
}

export default DashboardView
