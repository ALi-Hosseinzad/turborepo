'use client'

import type { ReactElement, SyntheticEvent } from 'react'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import type { TabPropsType } from '../../types'
import CustomTabPanel from './tabPanel'
import { a11yProps, sxTab, sxTabs } from './tabStyles'

export const OstiganTab: React.FC<TabPropsType> = (props): ReactElement => {
  const {
    noBorderDivider,
    tabItems,
    tabPanelItems,
    iconPosition,
    indicatorColor,
    marginTopTabPanel,
    selectedStyles,
    tabButtonsStyles,
    bgPanel,
    tabsWidth = '100%',
    onChangeTab,
    leftInfo,
    newStep,
    tabSx,
  } = props

  const [value, setValue] = useState<number | string>(0)

  const handleChange = (_e: SyntheticEvent, newValue: number): void => {
    setValue(newValue)
    onChangeTab?.(newValue)
  }

  useEffect(() => {
    newStep && setValue(newStep)
  }, [newStep])

  return (
    <div className="w-full">
      <Box
        className="flex justify-between items-center"
        sx={{ borderBottom: noBorderDivider ? 0 : 1, borderColor: 'divider' }}
      >
        <Tabs
          value={value}
          variant="scrollable"
          sx={sxTabs(
            indicatorColor,
            selectedStyles,
            tabButtonsStyles,
            tabsWidth,
          )}
          onChange={handleChange}
        >
          {tabItems?.map((item: any, index: number) => {
            return (
              <Tab
                {...a11yProps(index)}
                label={item?.text}
                key={item?.key || item}
                icon={item?.icon}
                iconPosition={iconPosition}
                sx={{ ...sxTab, ...tabSx }}
                disabled={Boolean(item?.disabled)}
              />
            )
          })}
        </Tabs>
        {leftInfo ? <div>{leftInfo}</div> : null}
      </Box>
      <Box sx={{ marginTop: marginTopTabPanel || '12px' }}>
        {tabPanelItems?.map((item: any, index: number) => (
          <CustomTabPanel
            bgPanel={bgPanel}
            value={value}
            index={index}
            key={item?.key || item}
          >
            {item}
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  )
}
