import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { LazyLoading, Loading } from 'ui'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import { TAG_URL } from '@/constants/endPoints'
import BreadCrumbs from '@/components/breadCrumbs/breadCrumbs'
import { ProductBox } from '@/components/cards/productBox'
import { ProductCard } from '@/components/cards/productCard'
import { useRouter } from '@/components/others/navigation'
import TagSkeleton from '@/components/skeletons/tagSkeleton'

export {
  TAG_URL,
  useParams,
  Loading,
  useState,
  useRouter,
  LazyLoading,
  TagSkeleton,
  ProductCard,
  ProductBox,
  BreadCrumbs,
  useAxiosQuery,
  useTranslations,
}
