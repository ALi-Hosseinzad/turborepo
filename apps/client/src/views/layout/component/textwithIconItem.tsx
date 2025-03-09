'use client '

import {
  NavigationLink,
  type SideNavItemPropsType,
  TextWithIconSlider,
  useDynamicClassName,
} from '../import'

const TextwithIconItem: React.FC<SideNavItemPropsType> = (props) => {
  const { data, active = false } = props

  const dynamicClassName = useDynamicClassName(data, active)
  const baseClassName =
    'flex justify-start  items-center gap-6 rounded-full pr-6 pl-2 py-1  mr-10 ml-6 my-3 hover:bg-primary-hover'
  const finalClassName = `${dynamicClassName} ${baseClassName} `

  return (
    <NavigationLink className={finalClassName} href={data?.path}>
      <TextWithIconSlider
        icon={data?.icon}
        text={data?.title}
        sliderClass="gap-6"
        textClass=" text-xl	font-semibold		 not-italic  	leading-10	 text-white"
      />
    </NavigationLink>
  )
}

export default TextwithIconItem
