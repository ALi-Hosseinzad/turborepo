import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { LazyLoading } from 'ui'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import { BOOKMARK_URL } from '@/constants/endPoints'
import { axiosGet } from '@/configs/httpService/axiosInterceptors'
import BreadCrumbs from '@/components/breadCrumbs/breadCrumbs'
import { ProductBox } from '@/components/cards/productBox'
import TagSkeleton from '@/components/skeletons/tagSkeleton'
import FavoriteCard from './components/FavoriteCard'
import { useFavoriteCardViewModel } from './components/FavoriteCard/viewModel'

export {
  useTranslations,
  useFavoriteCardViewModel,
  TagSkeleton,
  FavoriteCard,
  useAxiosQuery,
  ProductBox,
  useRouter,
  axiosGet,
  LazyLoading,
  BreadCrumbs,
  BOOKMARK_URL,
}
