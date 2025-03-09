// import {
//   ADD,
//   NotFoundSearchIcon,
//   OstiganButton, // TextImg,
//   TICKETS,
//   useRouter,
//   useTranslations,
// } from '../imports'

// const NotFoundTicket = () => {
//   const t = useTranslations()
//   const router = useRouter()

//   const goToAddTicket = () => {
//     router.push(`${TICKETS}${ADD}`)
//   }

//   return (
//     <div className="flex flex-col justify-center items-center gap-6 bg-white rounded-xl shadow-sm py-8 h-96">
//       <NotFoundSearchIcon className="w-14 h-14" />
//       <p className="text-normal-lg text-trueGray-500">{t('noTicket')}</p>
//       <OstiganButton
//         className="px-4"
//         handleClick={goToAddTicket}
//         variant="contained"
//         type="button"
//       >
//         {/* <TextImg text="submitNewTicket" icon={<PlusIcon />} gap={1} /> */}
//       </OstiganButton>
//     </div>
//   )
// }

// export default TableNotFound
const TableNotFound = (props: {
  titleNotFound: any
  iconNotFound: any
  additionalComponent?: any
}) => {
  const { titleNotFound, iconNotFound, additionalComponent = null } = props

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-white rounded-xl shadow-sm py-8 h-96">
      {iconNotFound}
      <p className="text-normal-lg text-trueGray-500">{titleNotFound}</p>
      {additionalComponent}
      {/* <OstiganButton className="px-4" onClick={onClick}>
        <TextIcon text="submitNewTicket" icon={<PlusIcon />} gap={1} />
      </OstiganButton> */}
    </div>
  )
}

export default TableNotFound
