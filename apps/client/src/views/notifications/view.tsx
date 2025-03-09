'use client'

import {
  NoNotification,
  NotificationListSkeleton,
  NotificationsList,
  TablePagination,
} from './imports'

const NotificationsView = ({ notifications, setPage, isFetching }) => {
  if (isFetching) {
    return <NotificationListSkeleton />
  }
  const { data } = notifications
  return (
    <div>
      {data && data.length > 0 ? (
        <>
          <NotificationsList notifications={notifications?.data || []} />
          <TablePagination
            pageCount={notifications?.pagination.total_pages}
            page={notifications?.pagination.current_page}
            onChangePage={(curPage: number) => {
              setPage(curPage)
            }}
          />
        </>
      ) : (
        <NoNotification />
      )}
    </div>
  )
}

export default NotificationsView
