'use client'

import { useState } from 'react'
import type { ThirdLevelType } from '../../../../../types/navbar'
import { ArrowDownIcon, ArrowLeftIcon } from 'ui/components/icons'

const MegaMenuView = (props: any): JSX.Element => {
  const { menuItems } = props
  const [thirdLevelItems, setThirdLevelItems] = useState<ThirdLevelType>([])

  return (
    <div className="flex mr-10 h-full">
      {menuItems?.map((firstItem, index) => (
        <div
          key={firstItem.title}
          className="group relative ml-8 text-base h-full "
          onMouseEnter={() => {
            setThirdLevelItems(menuItems[index].children?.[0].children)
          }}
        >
          <div className="truncate h-full flex items-center">
            <span>{firstItem.title}</span>
            {firstItem.children ? <ArrowDownIcon className="mr-2" /> : null}
          </div>
          <div className="absolute hidden group-hover:flex  right-1/2 translate-x-1/2 z-10">
            {!firstItem?.children || (
              <>
                <div className="py-[22px] bg-trueGray-150 rounded-r-[12px] ">
                  {firstItem.children.map((secondItem) => (
                    <div className="flex" key={secondItem.title}>
                      <div
                        className="flex-1 truncate py-[10px] px-[33px] hover:bg-white hover:text-primary-default text-[#555]"
                        onMouseEnter={() => {
                          setThirdLevelItems(secondItem.children)
                        }}
                      >
                        {secondItem.title}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex p-6 rounded-l-[12px] min-w-[700px] bg-white">
                  {thirdLevelItems?.map((thirdLevelItem) => (
                    <div key={thirdLevelItem.title}>
                      <div className="flex items-center truncate pr-2 m-2 border-r-2 border-primary-default">
                        <span className="text-gray-350">
                          {thirdLevelItem.title}
                        </span>
                        <ArrowLeftIcon className="h-4 " />
                      </div>
                      {!thirdLevelItem.children ||
                        thirdLevelItem.children.map((lastLevelItem) => (
                          <span
                            className="truncate p-2 inline-block text-gray-600"
                            key={lastLevelItem.title}
                          >
                            {lastLevelItem.title}
                          </span>
                        ))}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MegaMenuView
