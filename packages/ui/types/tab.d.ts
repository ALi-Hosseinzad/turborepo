export interface TabPropsType {
  tabItems: any[]
  tabPanelItems: any[]
  iconPosition?: 'top' | 'bottom' | 'end' | 'start' | undefined
  noBorderDivider?: boolean
  indicatorColor?: string
  marginTopTabPanel?: string
  selectedStyles?: object
  tabButtonsStyles?: object
  bgPanel?: string
  onChangeTab?: any
  leftInfo?: any
  newStep?: string | number
  tabSx?: any
  tabsWidth?: string
}

export interface TabPanelPropsType {
  children?: React.ReactNode
  index: number
  bgPanel?: string
  value: any
}
