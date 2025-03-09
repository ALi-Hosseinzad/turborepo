import { useState } from 'react'
import moment from 'jalali-moment'
import { ClickAwayListener } from '@mui/base/ClickAwayListener'
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup'
import { OstiganButton } from 'ui'
import NoNotification from '@/views/notifications/components/noNotification'
import {
  BellIcon,
  CustomBadge,
  useRouter,
  useSelector,
  useTranslations,
} from '../import'
import { type RootState } from '@/redux/store'

function NotificationMenuView({ userData }) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  const t = useTranslations()
  const { notifications } = useSelector((state: RootState) => state.persist)
  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget)
  }

  const handleOutsideClick = (): void => {
    setAnchor(null)
  }
  const open = Boolean(anchor)
  const id = open ? 'simple-popup' : undefined

  const calculateDaysDifference = (jalaliDate: string) => {
    const [year, month, day] = jalaliDate.split(' ')[0].split('-')
    const formattedDate = `${year}/${month}/${day}`
    const currentDate = moment(formattedDate, 'jYYYY/jM/jD').format('YYYY/M/D')
    const dateDifference =
      new Date().getTime() - new Date(currentDate).getTime()
    return Math.floor(dateDifference / 86400000)
  }

  return (
    <div className="hidden md:flex">
      <CustomBadge
        invisible={!userData?.notification_is_unread}
        icon={
          <BellIcon
            aria-describedby={id}
            className="w-6 h-6 cursor-pointer text-darkTypo"
            onClick={handleClick}
          />
        }
      />
      <ClickAwayListener onClickAway={handleOutsideClick}>
        <BasePopup
          id={id}
          open={open}
          anchor={anchor}
          className="mt-3 !z-[10000]"
          placement="bottom-end"
        >
          <div className="!shadow-box w-96 overflow-hidden bg-white p-3 rounded-md">
            <div className="flex justify-between items-center border-b border-tint-500 py-3">
              <div className="flex items-center">
                <span className="ml-2">{t('notifications')}</span>
                <span className="bg-primary-default w-2 h-2 rounded-full text-center text-white p-4 flex justify-center items-center">
                  {notifications.length}
                </span>
              </div>
              <OstiganButton
                variant="outlined"
                type="button"
                fontSize="15px"
                padding="5px 10px"
                handleClick={() => {
                  router.push('/notifications')
                  setAnchor(null)
                }}
              >
                {t('showAll')}
              </OstiganButton>
            </div>
            {notifications && notifications.length > 0 ? (
              notifications.map((notification) => {
                const daysDifference = calculateDaysDifference(
                  notification.updated_at,
                )

                return (
                  <div
                    className="flex border-b border-b-trueGray-300 px-4 py-3"
                    key={notification.id}
                  >
                    <CustomBadge
                      icon={
                        <img
                          className="rounded-full bg-customWhite w-10 h-10"
                          alt="icon"
                          src="/svg/ostigan.svg"
                        />
                      }
                      invisible={notification.read_status}
                    />
                    <div className="mr-3">
                      <p className="text-lg font-semibold text-black mb-1">
                        {notification.title}
                      </p>
                      <p className="w-[322px] whitespace-nowrap text-ellipsis overflow-hidden">
                        {notification.description}
                      </p>
                    </div>
                    <p className="text-xs text-nowrap mr-auto font-bold">{`${daysDifference} ${t('prevDay')}`}</p>
                  </div>
                )
              })
            ) : (
              <NoNotification isTopNav />
            )}
          </div>
        </BasePopup>
      </ClickAwayListener>
    </div>
  )
}

export default NotificationMenuView
