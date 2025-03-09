'use client'

import { useEffect, useState } from 'react'
import type { ButtonType } from '../../../types/button.d'
import { ButtonContainer } from './buttonContainer'

export const OstiganButton: React.FC<ButtonType> = (
  props,
): React.ReactElement | null => {
  const { styleType, variant } = props

  const customColor = {
    success: {
      default: 'var(--primary-default)',
      hover:
        variant === 'contained'
          ? 'var(--primary-hover)'
          : 'var(--primary-background)',
      active: 'var(--primary-active)',
      disabled: 'var(--primary-disable)',
      textColor: 'var(--customWhite)',
    },
    error: {
      default: 'var(--error-default)',
      hover:
        variant === 'contained' ? 'var(--error-hover)' : 'var(--error-hover)',
      active: 'var(--error-active)',
      disabled: 'var(--primary-disable)',
      textColor: 'var(--error-default)',
    },
  }
  const [colorPallet, setColorPallet] = useState(customColor.success)

  useEffect(() => {
    const handlerColorPallet = (): void => {
      switch (styleType) {
        case 'error':
          setColorPallet(customColor.error)
          break
        case 'success':
          setColorPallet(customColor.success)
          break
        default:
          setColorPallet(customColor.success)
      }
    }
    handlerColorPallet()
  }, [])

  return <ButtonContainer colorPallet={colorPallet} {...props} />
}
