import ToastProvider from 'lib/reactToastify/toastProvider'
import { notFound } from 'next/navigation'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'

interface LocalInterface {
  locale: string
}

export function generateStaticParams(): LocalInterface[] {
  return [{ locale: 'en' }, { locale: 'fa' }]
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: any): Promise<React.ReactElement> {
  let messages: AbstractIntlMessages | undefined
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  unstable(locale)

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ToastProvider>{children}</ToastProvider>
    </NextIntlClientProvider>
  )
}
