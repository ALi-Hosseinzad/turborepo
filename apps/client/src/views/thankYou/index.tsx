'use client'

import { ThankYouSkeleton, ThankYouView, useTankYouViewModel } from './import'

const ThankYou: React.FC<unknown> = () => {
  const {
    getDataInfo,
    matchType,
    isPending,
    onSubmit,
    isLoadingTankYou,
    visualConfetti,
  } = useTankYouViewModel()

  const thankYouData = getDataInfo()

  return (
    <>
      {isLoadingTankYou ? (
        <ThankYouSkeleton isLoading={isLoadingTankYou} />
      ) : (
        <ThankYouView
          matchType={matchType}
          visualConfetti={visualConfetti}
          thankYouData={thankYouData}
          isPending={isPending}
          onSubmit={onSubmit}
        />
      )}
    </>
  )
}

export default ThankYou
