import { type UseDynamicClassNameType, useEffect, useState } from '../import'

export const useDynamicClassName: UseDynamicClassNameType = (
  data,
  active,
  isMobile,
  showSideNav,
) => {
  const [dynamicClassName, setDynamicClassName] = useState<string>('')

  useEffect(() => {
    if (data?.isDisabled) {
      setDynamicClassName('!hover:bg-primary cursor-default focus:!bg-primary')
    } else if (active) {
      setDynamicClassName('!bg-[#008967] hover:!bg-[#009a74]')
    } else {
      setDynamicClassName('!bg-primary')
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
