'use client'

import { BreadCrumbs } from '../authorization/imports'
import { useBreadCrumbs } from './components/breadCrumbs'
import { TicketList } from './imports'

const Tickets = () => {
  const { getBreadCrumbs } = useBreadCrumbs()

  return (
    <>
      <BreadCrumbs breadCrumbs={getBreadCrumbs()} />

      <TicketList />
    </>
  )
}

export default Tickets
