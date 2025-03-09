import {
  List,
  NotFoundSearchIcon,
  OstiganButton,
  PlusIcon,
  TextIcon,
  TICKET_ROOTS_URL,
  TICKETS,
  useRouter,
  useTranslations,
} from '../imports'

const TicketListView = ({ headInfo, bodyInfo }) => {
  const t = useTranslations()
  const router = useRouter()

  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={TICKET_ROOTS_URL}
      queryKey="ticket-list"
      tableAddNavigationLink="tickets/add"
      tableAddBtnText={t('addNewTicket')}
      tableTitleContent={t('ticketsTableHeader')}
      addNewTicket="add"
      titleClass="text-normal-base sm:text-medium-base lg:title-base text-right pt-4 sm:pt-0"
      titleNotFound={t('noTicket')}
      iconNotFound={<NotFoundSearchIcon className="w-14 h-14" />}
      additionalComponent={
        <OstiganButton
          className="px-4"
          variant="contained"
          type="button"
          handleClick={() => {
            router.push(`${TICKETS}/add`)
          }}
        >
          <TextIcon text={t('addNewTicket')} icon={<PlusIcon />} gap={1} />
        </OstiganButton>
      }
      onClickRow={(id) => router.push(`${TICKETS}/${id}` as any)}
    />
  )
}

export default TicketListView
