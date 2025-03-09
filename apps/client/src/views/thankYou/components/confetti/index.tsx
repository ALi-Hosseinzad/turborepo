'use client'

import useWindowDimensions from '@/hooks/useWindowDimension'
import { Confetti } from '../../import'

function ConfettiComponent() {
  const { width, height } = useWindowDimensions()
  return (
    <Confetti
      width={width}
      recycle={false}
      height={height}
      numberOfPieces={1000}
      confettiSource={{
        w: 10,
        h: 10,
        x: width / 2 - 160,
        y: 10,
      }}
    />
  )
}

export default ConfettiComponent
