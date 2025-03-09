'use client'

import { Skeleton, ToRespond } from '../../views/tickets/imports'

const TicketChooseSubjectSkeleton = () => {
  return (
    <>
      <section className="flex items-center pt-6 pb-6 md:pb-8">
        <Skeleton width="30%" height={25} variant="rounded" />
      </section>
      <div className="flex gap-4 flex-col-reverse md:flex-row bg-customWhite">
        <div className="bg-white rounded max-sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-8">
          <Skeleton animation="wave" width="30%" className="!h-10" />
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
        <ToRespond />
      </div>
    </>
  )
}

export default TicketChooseSubjectSkeleton
