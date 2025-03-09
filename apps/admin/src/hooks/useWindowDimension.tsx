import { useEffect, useState } from 'react'
import type { WindowDimensionsType } from 'types/windowDimensions'

const useWindowDimensions = (): WindowDimensionsType => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: null as number | null,
    height: null as number | null,
  })

  useEffect(() => {
    type ResizeHandler = () => void

    const handleResize: ResizeHandler = () => {
      if (typeof window !== 'undefined') {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array ensures that the effect is only run on mount

  return windowDimensions
}

export default useWindowDimensions
