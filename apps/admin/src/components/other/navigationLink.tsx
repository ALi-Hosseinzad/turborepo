'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { Link } from './navigation'

export default function NavigationLink(props: any): React.ReactElement {
  const { href, ...rest } = props
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href
  return (
    <Link aria-current={isActive ? 'page' : undefined} href={href} {...rest} />
  )
}
