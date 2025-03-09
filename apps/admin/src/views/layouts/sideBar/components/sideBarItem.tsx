import type { MouseEvent } from 'react'
import React from 'react'
import NavigationLink from '../../../../components/other/navigationLink'
import TextIcon from '../../component/textIcon'
import { useDynamicClassName } from '../../component/useDynamicClassName'

interface SideNavItemProps {
  data?: {
    icon: any // Assuming data.icon is a React element
    title: string // Assuming data.title is a string
    path?: string
    isDisabled?: boolean | undefined
  }
  onClick?: () => void
  onMouseDown?: (event: MouseEvent) => void
  onContextMenu?: (event: MouseEvent) => void
  active?: boolean
}

const SideBarItem: React.FC<SideNavItemProps> = (props) => {
  const {
    data,
    // onClick,
    // onMouseDown,
    // onContextMenu,
    active = false,
  } = props
  const dynamicClassName = useDynamicClassName(data, active)
  const baseClassName =
    'flex justify-start items-center gap-6 rounded-full px-3 py-2 mx-8  hover:bg-[#49c8a4]'
  const finalClassName = `${baseClassName} ${dynamicClassName}`

  return (
    <NavigationLink
      className={finalClassName}
      href={data?.path}
      // role="button"
      // tabIndex={0}
      // prefetch={data?.isDisabled}
      // onMouseDown={onMouseDown}
      // onClick={onClick}
      // onContextMenu={onContextMenu}
    >
      <TextIcon
        icon={data?.icon}
        text={data?.title}
        gap={8}
        textClass="title-base text-base not-italic leading-norma font-semibold	 text-white"
        iconClass="w-6 h-6"
      />
    </NavigationLink>
  )
}

export default SideBarItem
