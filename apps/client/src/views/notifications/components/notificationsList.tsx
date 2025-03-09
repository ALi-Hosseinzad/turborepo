import CustomBadge from '@/libs/MUI/customBadge'

const NotificationsList = ({ notifications }) => {
  return (
    <div className="bg-white p-6 rounded-md">
      {notifications.map((item: any) => {
        return (
          <div className="flex border-b border-b-trueGray-300 p-4">
            <CustomBadge
              icon={
                <img
                  className="rounded-full bg-customWhite w-10 h-10"
                  alt="icon"
                  src={notifications?.attachment || '/svg/ostigan.svg'}
                />
              }
              invisible={item.read_status}
            />
            <div className="mr-3">
              <p className="text-lg font-semibold text-black mb-1">
                {item.title}
              </p>
              <p>{item.description}</p>
            </div>
            <p className="text-base mr-auto">{item.updated_at}</p>
          </div>
        )
      })}
    </div>
  )
}

export default NotificationsList
