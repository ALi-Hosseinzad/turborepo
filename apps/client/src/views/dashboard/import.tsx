import React, { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { OstiganButton } from 'ui'
import type { CarouselLayoutType } from '@/types/carousel'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import UseFormatNumber from '@/hooks/useFormatNumber'
import useTomanToRial from '@/hooks/useTomanToRial'
import useWindowDimensions from '@/hooks/useWindowDimension'
import {
  BANNER_URL,
  BOOKMARK_URL,
  EXCHANGE_RATE_URL,
  RECENT_PRODUCTS_URL,
  RECOMMENDED_SUGGESTION_URL,
} from '@/constants/endPoints'
import { GIFT_CARD, ONLINE_PAYMENT } from '@/constants/routes'
import { Card } from '@/components/cards/card'
import { Carousel } from '@/components/carousel/carousel'
import { Link, useRouter } from '@/components/nextIntl/navigation'
import { ShowMoreDrawer } from '@/components/productsList/components/other/showMoreDrawer'
import { ProductCard } from '@/components/productsList/imports'
import { BannerSkeleton } from '@/components/skeletons/bannerSkeleton'
import { CarouselLayoutSkeleton } from '@/components/skeletons/carouselLayoutSkeleton'
import { CurrencyCardSkeleton } from '@/components/skeletons/currencyCardSkeleton'
import { ProductCardSkeleton } from '@/components/skeletons/productCardSkeleton'
import { RecommendedCardSkeleton } from '@/components/skeletons/recommendedCardSkeleton'
import { ArrowToSideDownIcon, ArrowToSideTopIcon } from 'ui/components/icons'
import { ArrowLeftIcon, DiscountFlagIcon } from 'ui/components/icons/icons'
import { Banner } from './banner'
import { BannerView } from './banner/view'
import { useBannerViewModel } from './banner/viewModel'
import { Bookmarks } from './bookmarks'
import { useBookmarksViewModel } from './bookmarks/viewModel'
import { CarouselLayout } from './components/carouselLayout'
import { CurrencyCard } from './components/currencyCard'
import { ProductSlider } from './components/productSlider'
import { ProductSliderView } from './components/productSlider/view'
import { useProductSliderViewModel } from './components/productSlider/viewModel'
import { RecommendedProductCard } from './components/recommendedProductCard'
import { Currency } from './currency'
import { CurrencyView } from './currency/view'
import { useCurrencyViewModel } from './currency/viewModel'
import { NewProducts } from './newProducts'
import { useNewProductsViewModel } from './newProducts/viewModel'
import { RecommendedProducts } from './recommendedProducts'
import { RecommendedProductsView } from './recommendedProducts/view'
import { useRecommendedProductsViewModel } from './recommendedProducts/viewModel'

export {
  React,
  useEffect,
  useState,
  useAxiosQuery,
  useRouter,
  useTranslations,
  UseFormatNumber,
  useTomanToRial,
  useCurrencyViewModel,
  useBannerViewModel,
  useWindowDimensions,
  useNewProductsViewModel,
  useProductSliderViewModel,
  useBookmarksViewModel,
  useRecommendedProductsViewModel,
  CurrencyView,
  BannerView,
  ProductSliderView,
  RecommendedProductsView,
  CurrencyCard,
  ProductSlider,
  ProductCard,
  Card,
  Carousel,
  Banner,
  Bookmarks,
  Currency,
  NewProducts,
  RecommendedProducts,
  CarouselLayout,
  CarouselLayoutSkeleton,
  ProductCardSkeleton,
  RecommendedCardSkeleton,
  BannerSkeleton,
  CurrencyCardSkeleton,
  RecommendedProductCard,
  SwiperSlide,
  OstiganButton,
  ShowMoreDrawer,
  Image,
  Link,
  ArrowToSideDownIcon,
  ArrowLeftIcon,
  DiscountFlagIcon,
  ArrowToSideTopIcon,
  EXCHANGE_RATE_URL,
  BANNER_URL,
  RECENT_PRODUCTS_URL,
  RECOMMENDED_SUGGESTION_URL,
  GIFT_CARD,
  ONLINE_PAYMENT,
  BOOKMARK_URL,
}
export type { CarouselLayoutType }
