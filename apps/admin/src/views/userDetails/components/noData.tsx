import { useTranslations } from '../imports'

export const NoData = ({
  text,
  icon,
}: {
  text?: string
  icon: JSX.Element
}): JSX.Element => {
  const t = useTranslations()
  return (
    <div className="flex flex-col gap-2 items-center justify-center bg-white rounded-lg shadow-sm text-trueGray-500 py-48">
      {icon}
      <p className="text-medium-sm text-trueGray-500">
        {text ? text : t('noData')}
      </p>
    </div>
  )
}
