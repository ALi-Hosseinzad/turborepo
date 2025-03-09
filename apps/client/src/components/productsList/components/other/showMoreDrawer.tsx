'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { OstiganButton } from 'ui'

export const ShowMoreDrawer = ({
  headerComponent,
  initialCard,
  moreCard,
  showMoreBtn,
}): any => {
  const [showMore, setShowMore] = useState(false)
  const t = useTranslations()

  return (
    <div>
      <div className="flex justify-between z-30">
        {headerComponent}
        {showMoreBtn ? (
          <OstiganButton
            variant="text"
            type="button"
            handleClick={() => setShowMore(!showMore)}
            hoverBackgroundColor="transparent"
            activeBackgroundColor="transparent"
            padding={0}
          >
            {showMore ? t('showLess') : t('showMore')}
          </OstiganButton>
        ) : null}
      </div>
      <div>{initialCard}</div>
      <div
        className={`overflow-hidden transition-all duration-1000 ${
          showMore ? 'opacity-100 translate-y-5 h-fit' : 'opacity-0 h-2'
        }`}
      >
        {moreCard}
      </div>
    </div>
  )
}
