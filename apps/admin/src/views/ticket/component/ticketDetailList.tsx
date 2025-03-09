'use client'

import { Image, type TicketDetailDataType, UserCircleIcon } from '../imports'

const TicketDetailList = (props: TicketDetailDataType): JSX.Element => {
  const { ticketDetailData } = props

  const showTicket = (ticket: any): any => {
    return (
      <div>
        <div className="flex gap-3">
          <div className="mb-3">
            {!ticket?.user_id_from_info?.avatar ? (
              <Image
                src={ticket?.user_id_from_info?.avatar}
                alt="avatar"
                width={200}
                height={200}
              />
            ) : (
              <UserCircleIcon />
            )}
          </div>
          <div className="flex flex-col items-start w-4/5 bg-[#EBFCF7] p-6 rounded-3xl rounded-tr-none text-right my-4">
            <span>{ticket?.slug}</span>
            {ticket.attachment ? (
              <Image
                src={ticket?.attachment}
                alt="avatar"
                width={200}
                height={200}
              />
            ) : null}
          </div>
        </div>
        {ticket?.children?.length
          ? ticket.children.map((tick, index) => (
              <div key={tick.id}>
                <div className="flex flex-row-reverse gap-3">
                  <div className="w-[40px] h-[40px]">
                    {index === 0 && (
                      <>
                        {!ticket?.user_id_from_info?.avatar ? (
                          <Image
                            src={ticket?.user_id_from_info?.avatar}
                            alt="avatar"
                            fill
                          />
                        ) : (
                          <UserCircleIcon />
                        )}
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 items-end w-4/5 bg-[#F6F6F6] p-6 text-left mr-auto rounded-3xl rounded-tl-none my-4">
                    <span> {tick.slug}</span>
                    {tick.attachment ? (
                      <Image
                        src={tick?.attachment}
                        alt="avatar"
                        width={200}
                        height={200}
                      />
                    ) : null}
                  </div>
                </div>
                {tick?.children?.length
                  ? tick.children.map((item) => showTicket(item))
                  : null}
              </div>
            ))
          : null}
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-white rounded-lg mt-8 p-8 gap-y-13">
      {ticketDetailData ? showTicket(ticketDetailData) : null}
    </div>
  )
}

export default TicketDetailList
