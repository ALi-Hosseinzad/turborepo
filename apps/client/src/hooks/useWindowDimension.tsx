import { useEffect, useState } from 'react'

const useWindowDimensions = (): any => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : null,
    height: typeof window !== 'undefined' ? window.innerHeight : null,
  })
  useEffect(() => {
    function handleResize(): void {
      if (typeof window !== 'undefined') {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }
    handleResize()
    // window.addEventListener('onload', handleResize)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      // window.removeEventListener('onload', handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount

  return windowDimensions
}

export default useWindowDimensions
