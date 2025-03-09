'use client'

import BreadCrumbs from '@/components/breadCrumbs/breadCrumbs'
import GiftCardDetailSkeleton from '../components/giftCardDetailSkeleton'
import { GiftCardDetailsView, useGiftCardDetailsViewModel } from '../imports'

export const GiftCardDetails = ({ productId }) => {
  const {
    productHeaderInfo,
    isLoading,
    regionsList,
    selectedProduct,
    handleRegionSelected,
    handleProductSelected,
    productList,
    getBreadCrumbs,
  } = useGiftCardDetailsViewModel(productId)

  return (
    <>
      {isLoading ? (
        <GiftCardDetailSkeleton isLoading={isLoading} />
      ) : (
        <>
          <BreadCrumbs breadCrumbs={getBreadCrumbs(productHeaderInfo)} />

          <GiftCardDetailsView
            productHeaderInfo={productHeaderInfo}
            regionsList={regionsList}
            productsList={productList}
            selectedProduct={selectedProduct}
            handleRegionSelected={handleRegionSelected}
            handleProductSelected={handleProductSelected}
          />
        </>
      )}
    </>
  )
}
;<GiftCardDetailSkeleton isLoading />
