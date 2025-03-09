import type { Pathnames } from "next-intl/navigation"

export const locales = ["fa", "en"] as const

export const pathnames = {
  "/": "/",
  "/pathnames": {
    fa: "/pfadnamen",
    en: "/pathnames",
  },
} satisfies Pathnames<typeof locales>

export type AppPathnames = keyof typeof pathnames
