'use client'

import React from 'react'
import { OstiganTab } from 'ui'

const loremDiv = (
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil hic
    optio blanditiis neque excepturi recusandae consectetur quos! Et quam culpa
    laudantium fuga quae voluptatem veniam harum reiciendis quo corporis!
  </div>
)

const tabItems = [
  { key: 1, text: 'گیفت کارت' },
  { key: 2, text: 'پرداخت ارزی' },
  { key: 3, text: 'عضویت در سایت' },
  { key: 4, text: 'احراز هویت' },
  { key: 5, text: 'لورم ایپسوم ' },
]

const tabPanelItems = [loremDiv, loremDiv, loremDiv, loremDiv]

const FaqView = (): JSX.Element => {
  return (
    <OstiganTab
      noBorderDivider
      selectedStyles={{
        borderRadius: '8px',
        color: 'var(--customWhite)!important',
        backgroundColor: 'red!important',
        fontWeight: '800!important',
      }}
      tabSx={{
        width: '50%',
      }}
      tabButtonsStyles={{
        borderRadius: '5px',
        border: '1px solid green',
        height: '36px',
        width: '36px',
        backgroundColor: 'red!important',
        padding: '10px',
        lineHeight: '10px',
        margin: '50px',
      }}
      marginTopTabPanel="61px"
      indicatorColor="transparent"
      tabItems={tabItems}
      tabPanelItems={tabPanelItems}
    />
  )
}

export default FaqView
