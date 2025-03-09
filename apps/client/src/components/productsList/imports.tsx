import React, { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { Loading } from 'ui'
import type {
  ProductsCategoryViewModelType,
  ProductsCategoryViewType,
  ProductsListViewModelType,
  ProductsListViewType,
  ProductsViewModeltype,
  ProductsViewType,
} from '@/types/productList.d'
import useWindowDimensions from '@/hooks/useWindowDimension'
import { PRODUCTS_CATEGORY_URL } from '@/constants/endPoints'
import { axiosGet } from '@/configs/httpService/axiosInterceptors'
import { Carousel } from '@/components/carousel/carousel'
import { TextWithIcon } from '../blocks/textWithIcon'
import { ProductCard } from '../cards/productCard'
import { Link, usePathname, useRouter } from '../others/navigation'
import { DashBulletIcon } from 'ui/components/icons'
import { ShowMoreDrawer } from './components/other/showMoreDrawer'
import { TextImageCard } from './components/other/textImageCard'
import { ProductsCategory } from './components/productCategroy'
import { ProductsCategoryView } from './components/productCategroy/view'
import { useProductsCategoryViewModel } from './components/productCategroy/viewModel'
import { Products } from './components/products'
import { ProductsView } from './components/products/view'
import { useProductsViewModel } from './components/products/viewModel'
import { ProductsListView } from './view'
import { useProductsListViewModel } from './viewModel'

export {
  React,
  useEffect,
  useState,
  useQuery,
  axiosGet,
  usePathname,
  useRouter,
  Link,
  ProductsCategory,
  Products,
  Loading,
  ProductsView,
  ProductsListView,
  ProductsCategoryView,
  useProductsListViewModel,
  useProductsViewModel,
  useProductsCategoryViewModel,
  ShowMoreDrawer,
  TextWithIcon,
  DashBulletIcon,
  useWindowDimensions,
  SwiperSlide,
  Carousel,
  ProductCard,
  TextImageCard,
  PRODUCTS_CATEGORY_URL,
}
export type {
  ProductsListViewModelType,
  ProductsListViewType,
  ProductsViewModeltype,
  ProductsViewType,
  ProductsCategoryViewModelType,
  ProductsCategoryViewType,
}
