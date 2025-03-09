import type { UserInfoViewType } from '../imports'
import { Header2, OstiganTextField, useTranslations } from '../imports'

export const UserInfoView = ({
  data,
  isLoading,
}: UserInfoViewType): JSX.Element => {
  const t = useTranslations()

  return (
    <div className="bg-white rounded-lg p-8">
      <Header2 title={t('userInfo')} />
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 w-full">
        <OstiganTextField
          name="firstName"
          title={t('firstName')}
          value={data?.firstName}
          disabled={!isLoading}
        />
        <OstiganTextField
          name="lastName"
          title={t('lastName')}
          value={data?.lastName}
          disabled={!isLoading}
        />
        <OstiganTextField
          name="phone"
          title={t('mobileNumber')}
          value={data?.phone}
          disabled={!isLoading}
        />
        <OstiganTextField
          name="meta_name"
          title={t('email')}
          value={data?.email}
          disabled={!isLoading}
        />
      </div>
    </div>
  )
}
