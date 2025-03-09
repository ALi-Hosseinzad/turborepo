import {
  type RootState,
  TicketMessageBox,
  UserAdminCircleIcon,
  UserCircleIcon,
  useSelector,
} from '../../imports'

const TicketDetaiList = ({ sortTickets }) => {
  const { user: userInfo } = useSelector((state: RootState) => state.persist)

  return (
    <div className="no-scrollbar rounded-lg px-2 py-2 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col gap-6 py-5 mx-10 sm:mx-20 h-[50vh]">
        {sortTickets?.map((item: any, i: any, arr: any) => {
          return item.user_id_from === userInfo?.id ? (
            <div className="relative" key={i}>
              {item.user_id_from != arr[i - 1]?.user_id_from && (
                <div className="absolute -top-6 -right-10 sm:-right-16 ml-auto">
                  <UserCircleIcon className="sm:w-12 sm:h-12 w-8 h-8" />
                </div>
              )}
              <TicketMessageBox
                message={item?.description}
                attachment={item?.attachment}
              />
            </div>
          ) : (
            <div className="relative">
              {item.user_id_from != arr[i - 1]?.user_id_from && (
                <div className="absolute -top-6 -left-10 sm:-left-16 mr-auto">
                  <UserAdminCircleIcon className="sm:w-12 sm:h-12 w-8 h-8" />
                </div>
              )}
              <TicketMessageBox
                message={item.description}
                attachment={item.attachment}
                isAdmin
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TicketDetaiList
