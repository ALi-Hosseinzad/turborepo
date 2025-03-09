import { TicketListView, useTicketListViewModel } from '../imports'

const TicketList = () => {
  const { bodyInfo, headInfo } = useTicketListViewModel()

  return <TicketListView bodyInfo={bodyInfo} headInfo={headInfo} />
}

export default TicketList
