import { ADD, ArrowToSideLeftIcon, TICKETS, useRouter } from '../../imports'

const TextArrowRow = ({ text, iconText, value }) => {
  const router = useRouter()

  const myOnclick = (e: any) => {
    const subjectId = e.currentTarget.value
    router.push(`${TICKETS}/${ADD}/${subjectId}` as any)
  }

  return (
    <button
      type="button"
      value={value}
      className="cursor-pointer !bg-zinc-50 hover:bg-tint-100 "
      onClick={myOnclick}
    >
      <div className="flex justify-between items-center rounded-m px-6">
        <div className="flex justify-center items-center py-3 gap-3">
          <img
            src={iconText}
            width={24}
            height={24}
            alt="subjects"
            className="rounded-md"
          />
          <p className="md:text-medium-base text-medium-sm">{text}</p>
        </div>
        <ArrowToSideLeftIcon className="w-6 h-6" color="black" />
      </div>
    </button>
  )
}

export default TextArrowRow
