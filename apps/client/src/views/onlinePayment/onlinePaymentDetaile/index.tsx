'use client'

import BreadCrumbs from '@/components/breadCrumbs/breadCrumbs'
import { useBreadCrumbs } from '../components/breadCrumbs'
import OnlinePaymentDetailSkeleton from '../components/onlinePaymentDetailSkeleton'
import {
  OnlinePaymentDetailsView,
  useOnlinePaymentDetailsViewModel,
} from '../imports'

export const OnlinePaymentDetails = ({ serviceId }) => {
  const { isLoading, productHeaderInfo, formInfo } =
    useOnlinePaymentDetailsViewModel(serviceId)
  const { getBreadCrumbsDetails } = useBreadCrumbs(productHeaderInfo)

  return (
    <>
      {isLoading ? (
        <OnlinePaymentDetailSkeleton isLoading={isLoading} />
      ) : (
        <>
          <BreadCrumbs breadCrumbs={getBreadCrumbsDetails()} />
          <OnlinePaymentDetailsView
            productHeaderInfo={productHeaderInfo}
            formInfo={formInfo}
          />
        </>
      )}
    </>
  )
}
