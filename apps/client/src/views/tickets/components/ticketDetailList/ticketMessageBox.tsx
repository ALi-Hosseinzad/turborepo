import { AttachIcon, Link, TextIcon, useTranslations } from '../../imports'

const TicketMessageBox = ({ message, attachment, isAdmin }: any) => {
  const t = useTranslations()

  return (
    <div
      className={`relative text-normal-sm rounded-b-2xl p-2 w-fit max-w-[60%] ${
        isAdmin
          ? 'text-right rounded-tr-2xl bg-shade-200 text-white mr-auto pr-6'
          : 'text-right rounded-tl-2xl bg-trueGray-300 ml-auto pl-6 '
      }`}
    >
      {message ? (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className="break-words"
        />
      ) : null}
      {attachment?.length > 0 && (
        <Link href={attachment} replace target="_blank">
          <div
            className={`rounded-full border  mt-2 cursor-pointer w-fit px-2 ${
              isAdmin ? 'border-white' : 'border-trueGray-500'
            }`}
          >
            <TextIcon
              icon={
                <AttachIcon
                  color={isAdmin ? 'white' : ''}
                  className="w-4 h-4"
                />
              }
              text={t('attachFileNoun')}
              textClass={`text-normal-sm mr-1  ${
                isAdmin ? 'text-white' : 'text-trueGray-600'
              }`}
            />
          </div>
        </Link>
      )}
    </div>
  )
}

export default TicketMessageBox
