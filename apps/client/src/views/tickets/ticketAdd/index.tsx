'use client'

import { TicketAddView, useTicketAddViewModel } from '../imports'

const TicketAdd = () => {
  const { subjectData, isLoading, getBreadCrumbs } = useTicketAddViewModel()
  const breadCrumbs = getBreadCrumbs()
  return (
    <TicketAddView
      subjectData={subjectData}
      isLoading={isLoading}
      breadCrumbs={breadCrumbs}
    />
  )
}

export default TicketAdd
