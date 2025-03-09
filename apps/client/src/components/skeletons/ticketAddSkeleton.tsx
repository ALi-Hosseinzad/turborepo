'use client'

import { Skeleton } from '../../views/tickets/imports'

const TicketAddSkeleton = () => {
  return (
    <>
      <section className="flex items-center pt-6 pb-6 md:pb-8">
        <Skeleton width="30%" height={25} variant="rounded" />
      </section>
      <div className="sm:grid sm:grid-cols-12 flex flex-col-reverse gap-4">
        <div className="flex flex-col gap-2 col-span-6 bg-white rounded-xl p-8">
          <Skeleton animation="wave" className="!h-14 w-48" />
          <div>
            <Skeleton
              animation="wave"
              width="30%"
              className="!h-12"
              style={{ marginBottom: '-16px' }}
            />
            <Skeleton animation="wave" width="100%" className="!h-20" />
          </div>
          <div>
            <Skeleton
              animation="wave"
              width="30%"
              className="!h-12"
              style={{ marginBottom: '-16px' }}
            />
            <Skeleton animation="wave" width="100%" className="!h-20" />
          </div>
          <div>
            <Skeleton
              animation="wave"
              width="40%"
              className="!h-12"
              style={{ marginBottom: '-30px' }}
            />
            <Skeleton animation="wave" width="100%" className="!h-40" />
          </div>

          <Skeleton animation="wave" width="100%" className="!h-20" />

          <Skeleton animation="wave" width="100%" className="!h-20" />
        </div>
        <div className="col-span-6 bg-white rounded-xl p-8">
          <Skeleton animation="wave" width="30%" className="!h-12" />
          {[0, 1, 2, 3, 4, 5].map((_item, index) => (
            <Skeleton
              key={index}
              animation="wave"
              width="100%"
              className="!h-20"
              style={{ marginBottom: '-16px' }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default TicketAddSkeleton
