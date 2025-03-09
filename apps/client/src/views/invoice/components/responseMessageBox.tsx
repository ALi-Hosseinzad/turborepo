import { AttachIcon, Link, TextIcon, useTranslations } from '../import'

const ResponseMessageBox = ({ message, attachment }: any) => {
  const t = useTranslations()

  return (
    <div className="relative text-medium-xs md:text-medium-sm rounded-b-2xl p-2 w-full text-right rounded-tl-2xl bg-trueGray-300 ml-auto pl-6">
      {message ? (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className="break-words pb-2"
        />
      ) : null}
      <div className="flex flex-wrap flex-row gap-2">
        {attachment?.length > 0 &&
          attachment.map((value, index) => (
            <Link key={index} href={value} replace target="_blank">
              <div className="rounded-full border border-trueGray-500 cursor-pointer w-fit px-2">
                <TextIcon
                  icon={<AttachIcon className="w-4 h-4" />}
                  text={t('attachFileNoun')}
                  textClass="text-medium-sm text-trueGray-600"
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default ResponseMessageBox
