import { useTranslations } from 'next-intl'
import { Link } from '@/components/nextIntl/navigation'
import { ExclamationMarkIcon } from 'ui/components/icons'

const AuthAlert = ({ message = '' }) => {
  const t = useTranslations()
  return (
    <div className="text-normal-xs md:text-normal-sm flex justify-between bg-[#F5455B26] rounded-md py-3 px-5">
      <div className="flex items-center gap-2 w-full md:w-[80%]">
        <ExclamationMarkIcon color="#F5455B" className="w-6 h-6 text-error" />
        <div>
          <span className="text-medium-xs sm:text-medium-sm">
            {message ? message : t('authAlert')}
          </span>
          <Link
            className="text-medium-xs sm:text-medium-sm text-error-default"
            href="/authorization"
          >
            <span>{t('authPage')}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthAlert
