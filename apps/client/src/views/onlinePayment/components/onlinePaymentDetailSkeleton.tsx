import { Skeleton } from '@mui/material'

const OnlinePaymentDetailSkeleton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading ? (
        <>
          <section className="flex items-center pt-6 pb-6 md:pb-8">
            <Skeleton width="25%" height={25} variant="rounded" />
          </section>
          <div className="flex flex-col">
            <div className="sm:grid sm:grid-cols-12 sm:gap-10 flex flex-col gap-5">
              <div className="col-span-6 md:col-span-4 w-full">
                <Skeleton
                  className=" title-lg px-4"
                  width="100%"
                  height={320}
                  sx={{
                    marginTop: '-75px',
                    marginBottom: '-75px',
                  }}
                />

                <div className="flex gap-2 pt-6">
                  {[0, 1, 2, 3].map((_item, index) => (
                    <Skeleton
                      key={index}
                      width="25%"
                      height={25}
                      variant="rounded"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 col-span-6 md:col-span-8">
                <div className="flex justify-between items-center">
                  <Skeleton width={200} height={20} variant="rounded" />
                  <div className="flex gap-2 items-center justify-center">
                    <span className="text-medium-xs sm:text-medium-sm text-trueGray-600">
                      <Skeleton width={50} height={20} variant="rounded" />
                    </span>
                    {[0, 1, 2, 3].map((_item, index) => (
                      <Skeleton
                        key={index}
                        width="25%"
                        height={25}
                        variant="rounded"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {[0, 1, 2, 3, 4].map((_item, index) => (
                    <Skeleton
                      key={index}
                      width="100%"
                      height={20}
                      variant="rounded"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12 flex flex-col gap-2 pt-12">
              <div className="flex lg:flex-col sm:flex-row flex-col lg:gap-14 gap-4 col-span-6 w-full">
                <div className="flex flex-col gap-4 bg-white rounded-lg p-4 py-6 w-full">
                  {[0, 1, 2, 3].map((_item, index) => (
                    <>
                      <Skeleton
                        key={index}
                        width="25%"
                        height={25}
                        variant="rounded"
                      />{' '}
                      <Skeleton
                        key={index}
                        width="100%"
                        height={50}
                        variant="rounded"
                      />
                    </>
                  ))}

                  <div className="flex  gap-4">
                    {[0, 1, 2, 3].map((_item, index) => (
                      <Skeleton
                        key={index}
                        width="25%"
                        height={25}
                        variant="rounded"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-1 text-white">.</div>
              <div className="col-span-5 bg-white rounded-xl px-6 py-6 h-fit">
                <div className="flex flex-col gap-4">
                  <Skeleton width={200} height={20} variant="rounded" />

                  <div className="flex flex-col gap-4 border-b border-trueGray-300 pb-4">
                    <div className="flex justify-between">
                      <Skeleton width={200} height={20} variant="rounded" />
                      <Skeleton width={200} height={20} variant="rounded" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton width={200} height={20} variant="rounded" />
                      <Skeleton width={200} height={20} variant="rounded" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-b border-trueGray-300 pb-4">
                    <div className="flex justify-between">
                      <Skeleton width={200} height={20} variant="rounded" />
                      <Skeleton width={200} height={20} variant="rounded" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton width={200} height={20} variant="rounded" />
                      <Skeleton width={200} height={20} variant="rounded" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton width={200} height={20} variant="rounded" />
                      <Skeleton width={200} height={20} variant="rounded" />
                    </div>
                    <div className="text-xs sm:text-normal-base py-2">
                      <Skeleton width={200} height={20} variant="rounded" />
                    </div>
                    <div className="text-xs sm:text-normal-base rounded-xl bg-tint-100 text-primary-active py-2 px-1">
                      <Skeleton width={200} height={20} variant="rounded" />
                    </div>
                  </div>

                  <div className="text-xs sm:text-normal-base rounded-xl bg-blue-50 py-2 px-1">
                    <Skeleton width={200} height={20} variant="rounded" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-4">
                  <Skeleton
                    className="rounded-3xl"
                    width="100%"
                    height={50}
                    variant="rounded"
                  />
                  <div className="flex gap-2 items-center">
                    <Skeleton width={50} height={20} variant="rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default OnlinePaymentDetailSkeleton
