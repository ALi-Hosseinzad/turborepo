export const sxTabs = (
  indicatorColor: string | undefined,
  selectedStyles: object | undefined,
  tabButtonsStyles: object | undefined,
  tabsWidth: string | undefined,
): object => {
  return {
    width: tabsWidth,
    '.MuiButtonBase-root svg': {
      marginRight: '12px',
    },
    '.MuiButtonBase-root svg path': {
      stroke: 'var(--trueGray-500)',
    },
    '.Mui-selected svg path': {
      stroke: 'var(--primary-default)',
    },
    '.MuiButtonBase-root': {
      // fontSize: '1.125rem',
      lineHeight: '36px',
      ...tabButtonsStyles,
    },
    '.MuiTabs-indicator': {
      backgroundColor: `${
        indicatorColor || 'var(--primary-default)'
      }!important`,
    },
    '.Mui-selected': {
      fontWeight: '500',
      color: 'var(--primary-default)',
      ...selectedStyles,
    },
    '.MuiTabs-scrollButtons': {
      //   border: '1px solid red',
    },
  }
}

export function a11yProps(index: number): object {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

export const sxTab = {
  fontSize: { xs: ' 14px', sm: '14px', md: ' 18px', lg: ' 18px' },
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: ' 36px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  minWidth: '50px',
  whiteSpace: 'noWrap',
}
