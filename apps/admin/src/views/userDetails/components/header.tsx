import { useTranslations, useUserInfoViewModel } from '../imports'

export const Header = (): JSX.Element => {
  const { headerInfo, isLoading } = useUserInfoViewModel()
  const t = useTranslations()
  return (
    <div className="bg-customWhite py-10">
      {!isLoading && (
        <>
          <span>{headerInfo?.name} - </span>
          <span>
            {t('nationalNumber')}: {headerInfo?.nationalId}
          </span>
          <span>
            - {t('phoneNumber')}: {headerInfo?.phone}
          </span>
        </>
      )}
    </div>
  )
}
