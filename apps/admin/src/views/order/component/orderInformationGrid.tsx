'use client'

const OrderInformationGrid = (props): JSX.Element => {
  const { issue, description } = props
  return (
    <div className="flex gap-2">
      <div className="!font-bold title-lg">{issue}:</div>
      <div className="text-lg">{description}</div>
    </div>
  )
}

export default OrderInformationGrid
