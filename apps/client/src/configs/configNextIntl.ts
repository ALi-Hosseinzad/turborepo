import type { Pathnames } from 'next-intl/navigation'

export const locales = ['fa', 'en', 'ar'] as const

export const pathnames = {
  '/': '/',
  notFound: {
    fa: '/not-found',
    en: '/not-found',
    ar: '/not-found',
  },
  '/login': {
    fa: '/login',
    en: '/login',
    ar: '/login',
  },
  '/dashboard': {
    fa: '/dashboard',
    en: '/dashboard',
    ar: '/dashboard',
  },
  '/authorization': {
    fa: '/authorization',
    en: '/authorization',
    ar: '/authorization',
  },
  '/checkout': {
    fa: '/checkout',
    en: '/checkout',
    ar: '/checkout',
  },
  '/invoice': {
    fa: '/invoice',
    en: '/invoice',
    ar: '/invoice',
  },
  '/orders': {
    fa: '/orders',
    en: '/orders',
    ar: '/orders',
  },
  '/profile': {
    fa: '/profile',
    en: '/profile',
    ar: '/profile',
  },
  '/tag': {
    fa: '/tag',
    en: '/tag',
    ar: '/tag',
  },
  '/thankYou': {
    fa: '/thankYou',
    en: '/thankYou',
    ar: '/thankYou',
  },
  '/thankYou/order': {
    fa: '/thankYou/order',
    en: '/thankYou/order',
    ar: '/thankYou/order',
  },
  '/thankYou/charge': {
    fa: '/thankYou/charge',
    en: '/thankYou/charge',
    ar: '/thankYou/charge',
  },
  '/favorite': {
    fa: '/favorite',
    en: '/favorite',
    ar: '/favorite',
  },
  '/giftCard': {
    fa: '/giftCard',
    en: '/giftCard',
    ar: '/giftCard',
  },
  '/onlinePayment': {
    fa: '/onlinePayment',
    en: '/onlinePayment',
    ar: '/onlinePayment',
  },
  '/tickets/add': {
    fa: '/tickets/add',
    en: '/tickets/add',
    ar: '/tickets/add',
  },
  '/tickets': {
    fa: '/tickets',
    en: '/tickets',
    ar: '/tickets',
  },
  '/notifications': {
    fa: '/notifications',
    en: '/notifications',
    ar: '/notifications',
  },
  '/wallet': {
    fa: '/wallet',
    en: '/wallet',
    ar: '/wallet',
  },
  '/wallet/qrCodes': {
    fa: '/wallet/qrCodes',
    en: '/wallet/qrCodes',
    ar: '/wallet/qrCodes',
  },
} satisfies Pathnames<typeof locales>

export type AppPathnames = keyof typeof pathnames
