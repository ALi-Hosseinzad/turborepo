import { useRouter as useNProgressRouter } from 'next-nprogress-bar'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { useLocale } from 'next-intl'
import { locales, pathnames } from '@/configs/configNextIntl'

const {
  Link,
  redirect,
  usePathname,
  useRouter: useNextRouter,
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
})

const useRouter = () => {
  const nextRouter = useNextRouter()
  const nProgressRouter = useNProgressRouter()
  const locale = useLocale()
  const withLocale = (href) => {
    // Prepend the locale to the URL if needed
    if (href.startsWith(`/${locale}`)) {
      return href // Already localized or an internal Next.js URL
    }
    return `/${locale}${href}`
  }

  return {
    push: (href) => {
      nProgressRouter.push(withLocale(href))
    },
    replace: (href) => {
      nProgressRouter.replace(withLocale(href))
    },
    back: () => {
      nProgressRouter.back()
    },
    forward: () => {
      nextRouter.forward()
    },
    refresh: () => {
      nProgressRouter.refresh()
    },
    prefetch: (href) => {
      nProgressRouter.prefetch(href)
    },
  }
}

export { Link, redirect, usePathname, useRouter }
