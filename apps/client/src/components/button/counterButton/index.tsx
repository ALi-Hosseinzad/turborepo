import React from 'react'
import { CounterButtonView } from './view'
import { useCounterButtonViewModel } from './viewModel'

export const CounterButton = ({ quantity, setQuantity }) => {
  const { incrementHandler, decrementHandler } = useCounterButtonViewModel(
    quantity,
    setQuantity,
  )

  return (
    <CounterButtonView
      quantity={quantity}
      incrementHandler={incrementHandler}
      decrementHandler={decrementHandler}
    />
  )
}
