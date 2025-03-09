import React from 'react'
import { MinusIcon, PlusIcon } from 'ui/components/icons'

export const CounterButtonView = ({
  quantity,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <div className="flex justify-between gap-7 bg-tint-100 rounded-full px-5 py-3">
      <button
        type="button"
        className="cursor-pointer"
        disabled={quantity?.max === 1}
        onClick={incrementHandler}
      >
        <PlusIcon
          className="w-6 h-6"
          color={
            quantity?.max === 1
              ? 'var(--trueGray-400)'
              : 'var(--primary-default)'
          }
        />
      </button>
      <p className="text-xl font-bold text-primary-default">
        {quantity?.current}
      </p>
      <button
        type="button"
        className="cursor-pointer"
        disabled={quantity?.current === quantity?.min}
        onClick={decrementHandler}
      >
        <MinusIcon
          className="w-4 h-4"
          color={
            quantity?.current === quantity?.min
              ? 'var(--trueGray-400)'
              : 'var(--primary-default)'
          }
        />
      </button>
    </div>
  )
}
