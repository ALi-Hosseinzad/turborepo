import { BellIcon, useTranslations } from '../imports'

const NoNotification = ({ isTopNav = false }) => {
  const t = useTranslations()
  return (
    <div
      className={`${
        isTopNav ? '' : 'shadow-sm min-h-[60vh]'
      } flex flex-col items-center justify-center bg-white rounded-lg text-trueGray-500 py-16 `}
    >
      <BellIcon className="w-10 h-10" />
      <p className="text-medium-sm text-trueGray-500">
        {t('thereIsNoMessage')}
      </p>
    </div>
  )
}

export default NoNotification
