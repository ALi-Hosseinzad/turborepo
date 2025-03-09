import { TextArrowRow, useTicketChooseSubject } from '../../imports'

const TicketChooseSubjectView = () => {
  const { data } = useTicketChooseSubject()

  return (
    <div className="flex flex-col gap-4">
      {data?.map(({ id, icon, title }: any) => (
        <TextArrowRow key={id} value={id} text={title} iconText={icon} />
      ))}
    </div>
  )
}

export default TicketChooseSubjectView
