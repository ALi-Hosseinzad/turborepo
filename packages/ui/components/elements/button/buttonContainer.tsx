'use client'

import React from 'react'
import Button from '@mui/material/Button'
import type { ButtonType } from '../../../types/button.d'
import { Spinner } from '../../loading/spinner'

export const ButtonContainer: React.FC<ButtonType> = (
  props,
): React.ReactElement => {
  const {
    variant = 'text',
    type,
    colorPallet,
    disableRipple = true,
    disabled,
    fontSize,
    fontFamily,
    backgroundColor = disabled ? colorPallet?.disabled : colorPallet?.default,
    hoverBackgroundColor = colorPallet?.hover,
    activeColor,
    activeBackgroundColor = colorPallet?.active,
    color = variant === 'contained'
      ? 'var(--customWhite)'
      : colorPallet?.default,
    hoverColor = variant === 'contained'
      ? 'var(--customWhite)'
      : colorPallet?.default,
    borderColor = disabled ? colorPallet?.disabled : colorPallet?.default,
    hoverBorderColor = 'none',
    borderRadius = '10px',
    padding = '6px 48px',
    fullWidth,
    endIcon,
    startIcon,
    height,
    width,
    handleClick,
    children,
    className,
    isLoading,
  } = props

  const sxButton = {
    width: { width },
    height: { height },
    color: { color },
    fontSize: fontSize || {
      xl: '18px',
      lg: '16px',
      md: '14px',
      sm: '14px',
      xs: '13px',
    },
    fontFamily: { fontFamily },
    padding: { padding },
    borderRadius: { borderRadius },
    boxShadow: 'none',
    textTransform: 'none',
    backgroundColor: `${
      variant === 'contained' && `${backgroundColor}`
    } !important`,
    borderColor: `${borderColor} !important`,
    '&:hover': {
      borderColor: `${hoverBorderColor} !important`,
      backgroundColor: `${hoverBackgroundColor} !important`,
      color: `${hoverColor} !important`,
      boxShadow: 'none',
    },
    '&:active': {
      borderColor: `${colorPallet?.active} !important`,
      backgroundColor: `${activeBackgroundColor} !important`,
      color: activeColor || 'var(--customWhite) !important',
      boxShadow: 'none',
    },
  }

  return (
    <Button
      variant={variant}
      type={type}
      disableRipple={disableRipple}
      disabled={disabled}
      endIcon={endIcon}
      startIcon={startIcon}
      fullWidth={fullWidth}
      sx={sxButton}
      className={`break-words ${className}`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-1">
        {children}
        {!isLoading || <Spinner color={color} />}
      </div>
    </Button>
  )
}
