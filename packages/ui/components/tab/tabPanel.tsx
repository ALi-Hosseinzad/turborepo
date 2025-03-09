import type { ReactElement } from 'react'
import type { TabPanelPropsType } from '../../types'

function CustomTabPanel(props: TabPanelPropsType): ReactElement {
  const { children, value, index, bgPanel, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      key={index}
    >
      {value === index && (
        <div className={`${bgPanel || 'bg-white'} mt-3 rounded-xl`}>
          {children}
        </div>
      )}
    </div>
  )
}

export default CustomTabPanel
