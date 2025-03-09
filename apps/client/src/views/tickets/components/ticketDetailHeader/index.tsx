'use client'

import {
  ArrowToSideLeftIcon,
  TICKETS,
  useRouter,
  useTranslations,
} from '../../imports'

const TicketDetailHeader = ({
  title,
  statusColor,
  statusBg,
  statusLabel,
  department,
}) => {
  const router = useRouter()
  const t = useTranslations()

  return (
    <div className="flex justify-between items-center bg-white rounded-lg lg:px-6 px-3">
      <div className="flex gap-9 items-center">
        <div className="flex flex-col gap-1 sm:gap-2 py-2">
          <div className="flex gap-2 items-center">
            <p className="text-normal-xs md:text-normal-base">
              {t('department')}:
            </p>
            <p className="text-medium-xs md:text-medium-base">{department}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-normal-xs md:text-normal-base">{t('title')}:</p>
            <p className="text-medium-xs md:text-medium-base">{title}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-1 sm:gap-3 items-center">
        <div className="border-l border-trueGray-300 px-2 sm:px-4">
          <div
            className="text-normal-xs sm:text-normal-sm rounded-md py-1 px-2 my-4"
            style={{ color: statusColor, backgroundColor: statusBg }}
          >
            {statusLabel}
          </div>
        </div>
        <ArrowToSideLeftIcon
          color="black"
          className="w-6 h-6 cursor-pointer"
          onClick={() => router.push(TICKETS)}
        />
      </div>
    </div>
  )
}

export default TicketDetailHeader
