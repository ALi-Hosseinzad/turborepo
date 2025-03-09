'use client'

import { useCallback } from 'react'
import type { BreadcrumbType } from '@/types/checkout'
import { GIFT_CARD } from '@/constants/routes'
import {
  DiscountRedDotIcon,
  DiscountVerticalFlagIcon,
  GIFT_CARD_PACKAGE_URL,
  useAxiosQuery,
  useState,
  useTranslations,
} from '../imports'
import type { GiftCardDetailsViewModelType } from '../imports'

let productHeaderInfo = {}
let regionsList = []
let filteredProducts = []

export const useGiftCardDetailsViewModel = (
  productId: number,
): GiftCardDetailsViewModelType => {
  const [productList, setProductList] = useState([])
  const [selectedProduct, setselectedProduct] = useState({})
  const t = useTranslations()

  const selectFunction = useCallback(
    (data) => {
      const {
        title,
        category,
        image,
        description,
        tags: tagsList,
        amount: discountAmount,
        discount_type: discountType,
        id: productId,
        bookmarks,
        regions,
      } = data

      productHeaderInfo = {
        cardInfo: {
          image,
          title,
          discountAmount,
          discountType,
          id: productId,
          bookmarks,
          type: category[0].type,
        },
        title,
        category,
        description,
        tagsList,
      }

      regionsList = regions?.map(
        ({ id, flag, name, slug, gift_card_products: giftCardProducts }) => {
          const discountRegionPackage = giftCardProducts?.some(
            ({ amount }) => amount > discountAmount,
          )
          const labelComponent = (
            <div className="relative">
              {discountRegionPackage ? (
                <DiscountRedDotIcon className="absolute -top-4 -right-5" />
              ) : null}
              <div className="flex gap-1 items-center py-2">
                <img src={flag} className="w-12 h-8 rounded-md" alt="ostigan" />
                <p className="w-fit">{name}</p>
              </div>
            </div>
          )
          return {
            value: { id, slug },
            label: labelComponent,
          }
        },
      )

      return { data, regionsList, productHeaderInfo }
    },
    [productId],
  )

  const fallback = []
  const {
    data = fallback,
    isLoading,
    isSuccess,
  } = useAxiosQuery({
    url: `${GIFT_CARD_PACKAGE_URL}/${productId}`,
    queryKey: [productId],
    enabled: true,
    selectFn: selectFunction,
  })

  const handleProductListConstructor = (productList) => {
    return productList?.map(
      ({
        price,
        region,
        id,
        amount,
        discount_type: discountType,
        price_after_discount: priceAfterDiscount,
        full_price: fullPrice,
        quantity: productQuantity,
      }: any) => {
        const labelComponent = (
          <div>
            {amount > data?.amount && (
              <div className="relative">
                <DiscountVerticalFlagIcon className="absolute -top-3 -left-8 2xl:w-12 2xl:h-12 w-8 h-8" />
                <div className="flex text-[9px] absolute -top-[40%] translate-y-[5%] -left-6 text-white">
                  {discountType !== 'percent' ? <p>%</p> : null}
                  <p> {((amount / fullPrice) * 100).toFixed(2)}</p>
                </div>
              </div>
            )}
            <div className="flex gap-1 w-max px-4 py-2">
              <p>{price}</p>
              <p>{region?.currency}</p>
            </div>
          </div>
        )
        return {
          value: { id, fullPrice, productQuantity, priceAfterDiscount },
          label: labelComponent,
        }
      },
    )
  }

  const handleRegionSelected = (regionId) => {
    filteredProducts = data?.data?.regions?.filter(
      (item) => item.id == regionId,
    )[0].gift_card_products

    setProductList(handleProductListConstructor(filteredProducts))

    const {
      id,
      full_price: fullPrice,
      price_after_discount: priceAfterDiscount,
      quantity: productQuantity,
    } = filteredProducts[0]
    setselectedProduct({
      id,
      fullPrice,
      priceAfterDiscount,
      productQuantity,
    })
  }

  const handleProductSelected = (value) => {
    setselectedProduct(JSON.parse(value))
  }

  if (productList.length === 0 && isSuccess) {
    const giftCardProducts = data?.data?.regions[0]?.gift_card_products
    const {
      id,
      full_price: fullPrice,
      quantity: productQuantity,
      price_after_discount: priceAfterDiscount,
    } = giftCardProducts[0]
    setProductList(handleProductListConstructor(giftCardProducts))
    setselectedProduct({
      id,
      fullPrice,
      priceAfterDiscount,
      productQuantity,
    })
  }
  const getBreadCrumbs = (productHeaderInfo): BreadcrumbType[] => {
    return [
      {
        name: t('giftCard'),
        url: GIFT_CARD,
      },
      {
        name: `${productHeaderInfo?.title}`,
        url: `${GIFT_CARD}/${productId}`,
      },
    ]
  }
  return {
    productHeaderInfo,
    regionsList,
    handleRegionSelected,
    handleProductSelected,
    selectedProduct,
    isLoading,
    productList,
    getBreadCrumbs,
  }
}
