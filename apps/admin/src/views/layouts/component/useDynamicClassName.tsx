import { useEffect, useState } from 'react'

interface Data {
  icon?: any // Assuming data.icon is a React element
  title?: string // Assuming data.title is a string
  path?: string
  isDisabled?: boolean | undefined
}

export const useDynamicClassName = (
  data?: Data,
  active?: boolean,
  isMobile?: boolean,
  showSideNav?: boolean,
): string => {
  const [dynamicClassName, setDynamicClassName] = useState<string>('')

  useEffect(() => {
    if (data?.isDisabled) {
      setDynamicClassName('hover:bg-primary cursor-default focus:bg-primary')
    } else if (active) {
      setDynamicClassName('bg-[#00AC81] hover:bg-[#00AC81] ')
    } else {
      setDynamicClassName('bg-primary ')
    }

    if (isMobile) {
      setDynamicClassName((prevClassName) => {
        const mobileClassName = showSideNav
          ? 'translate-x-0'
          : 'translate-x-full'
        return `${prevClassName} ${mobileClassName}`
      })
    }
  }, [data, active, isMobile, showSideNav])

  return dynamicClassName
}
