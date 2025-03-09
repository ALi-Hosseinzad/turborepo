'use client'

import { usePathname, useRouter } from 'components/other/navigation'
import { useTransition } from 'react'
import type { ChangeEvent, ReactNode } from 'react'

interface Propsss {
  children: ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Propsss): React.ReactElement {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>): void {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <label
      className={`relative text-gray-400',
        ${isPending} && 'transition-opacity [&:disabled]:opacity-30`}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  )
}
