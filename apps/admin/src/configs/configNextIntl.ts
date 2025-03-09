import type { Pathnames } from 'next-intl/navigation'

export const locales = ['fa', 'en'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    fa: '/pfadnamen',
    en: '/pathnames',
  },
  notFound: {
    fa: '/not-found',
    en: '/not-found',
  },
  order: {
    fa: '/order',
    en: '/order',
  },
  bannerImage: {
    fa: '/bannerImage',
    en: '/bannerImage',
  },
  bannerManagement: {
    fa: '/bannerManagement',
    en: '/bannerManagement',
  },
  category: {
    fa: '/category',
    en: '/category',
  },
  currency: {
    fa: '/currency',
    en: '/currency',
  },
  tag: {
    fa: '/tag',
    en: '/tag',
  },
  product: {
    fa: '/product',
    en: '/product',
  },
  users: {
    fa: '/users',
    en: '/users',
  },
  region: {
    fa: '/region',
    en: '/region',
  },

  giftCard: {
    fa: '/giftCard/',
    en: '/giftCard/',
  },
  onlinePayment: '/onlinePayment',
  package: '/package',

  online_payment: {
    fa: `/online_payment`,
    en: `/online_payment`,
  },
} satisfies Pathnames<typeof locales>
