import { useTranslations } from '../../imports'

export default function ToRespond() {
  const t = useTranslations()

  return (
    <div className="bg-white rounded max-sm:w-full text-normal-xs sm:text-normal-lg md:w-full lg:w-1/2 p-8">
      <p className="title-sm sm:title-base lg:title-base pb-6 p-4">
        {t('titleToRespond')}
      </p>
      <div>
        <ul className="list-disc px-3 md:px-4">
          <li className="text-justify pb-6">{t('contentToRespond1')}</li>
          <li className="text-justify pb-6">{t('contentToRespond2')}</li>
          <li className="text-justify pb-6">{t('contentToRespond3')}</li>
        </ul>
      </div>
    </div>
  )
}
