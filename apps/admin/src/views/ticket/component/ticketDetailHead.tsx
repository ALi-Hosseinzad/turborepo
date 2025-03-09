import { type TicketDetailDataType, useTranslations } from '../imports'

const TicketDetailHead = ({
  ticketDetailData,
}: TicketDetailDataType): JSX.Element => {
  const t = useTranslations()

  return (
    <div className="bg-white rounded-lg p-1">
      <div className="flex justify-between">
        <span>
          {t('ticketNumber')} {ticketDetailData?.id}
        </span>
        <span
          className={`text-[${ticketDetailData?.status_text_color}] bg-[${ticketDetailData?.status_background_color}] p-2 rounded-md`}
        >
          {ticketDetailData?.status_label}
        </span>
      </div>
      <ul className="flex gap-12 list-disc mr-5 mt-8 pb-8 ">
        <li>
          {t('part')} : {ticketDetailData?.subject?.title}
        </li>
        <li>
          {t('title')} : {ticketDetailData?.name}
        </li>
        <li>
          {t('priority')} : {ticketDetailData?.priority_label}
        </li>
        <li>
          {t('answeringPart')} :
          {ticketDetailData?.subject?.roles
            ?.map((item) => item.name)
            .toString()}
        </li>
      </ul>
    </div>
  )
}

export default TicketDetailHead
