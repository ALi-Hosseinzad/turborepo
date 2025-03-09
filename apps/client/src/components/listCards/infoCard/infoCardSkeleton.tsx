import { Skeleton } from '@mui/material'

const InfoCardSkeleton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading ? (
        <>
          <div className="pb-5">
            <Skeleton width="70%" height={20} variant="rounded" />
          </div>
          <div className="flex flex-col gap-4">
            {[0, 1, 2, 3].map((index) => {
              return (
                <div
                  key={index}
                  className="flex bg-white flex-col gap-4 shadow-md border rounded-lg p-4"
                >
                  <Skeleton
                    className="py-2"
                    width="25%"
                    height={20}
                    variant="rounded"
                  />
                  <div className="flex justify-between">
                    <Skeleton
                      key={index}
                      width="25%"
                      height={20}
                      variant="rounded"
                    />
                    <Skeleton
                      key={index}
                      width="25%"
                      height={20}
                      variant="rounded"
                    />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton
                      key={index}
                      width="25%"
                      height={20}
                      variant="rounded"
                    />
                    <Skeleton
                      key={index}
                      width="25%"
                      height={20}
                      variant="rounded"
                    />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton
                      key={index}
                      width="25%"
                      height={20}
                      variant="rounded"
                    />
                    <Skeleton
                      key={index}
                      width="25%"
                      height={40}
                      variant="rounded"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </>
      ) : null}
    </>
  )
}

export default InfoCardSkeleton
