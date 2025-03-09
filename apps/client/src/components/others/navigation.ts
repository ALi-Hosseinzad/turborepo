import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { locales, pathnames } from '../../configs/configNextIntl'

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  })
