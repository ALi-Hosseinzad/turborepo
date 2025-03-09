'use client'

import { type FC, RiongCreateView, useReionCreateViewModel } from '../imports'

const RiongCreate: FC = () => {
  const { initialValues, onSubmit, isLoading } = useReionCreateViewModel()

  return (
    <RiongCreateView
      initialValues={initialValues}
      isLoading={isLoading}
      onSubmit={onSubmit}
    />
  )
}

export default RiongCreate
