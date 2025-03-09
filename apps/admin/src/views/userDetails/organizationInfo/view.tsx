import type { UserInfoViewType } from '../imports'
import {
  COMPANY_PROFILE_URL,
  FormUserDetailsLayout,
  Header2,
  OstiganStatus,
  OstiganTextField,
  useTranslations,
} from '../imports'

export const OrganizationInfoView = ({
  data,
  isLoading,
}: UserInfoViewType): JSX.Element => {
  const t = useTranslations()

  return (
    <FormUserDetailsLayout
      id={data?.id}
      url={COMPANY_PROFILE_URL}
      disabledButton={!data}
      // refetchUserInfo={refetchUserInfo}
    >
      {!isLoading ? (
        <OstiganStatus
          text={data?.status_label}
          status={data?.status}
          className="top-8 left-8"
        />
      ) : null}
      <div className="bg-white rounded-lg p-8">
        <Header2 title={t('organizationInfo')} />
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 w-full">
          <OstiganTextField
            name="firstName"
            title={t('componyName')}
            value={data?.companyName}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="lastName"
            title={t('componyEmail')}
            value={data?.email}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="phone"
            title={t('registrationNumber')}
            value={data?.registrationNumber}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="meta_name"
            title={t('taxCode')}
            value={data?.taxCode}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="firstName"
            title={t('economicCode')}
            value={data?.economicCode}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="lastName"
            title={t('nationalId')}
            value={data?.nationalCode}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="phone"
            title={t('companyContactNumber')}
            value={data?.phone}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="meta_name"
            title={t('postalCode')}
            value={data?.postalCode}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="meta_name"
            title={t('address')}
            value={data?.address}
            disabled={!isLoading}
          />
        </div>
      </div>
    </FormUserDetailsLayout>
  )
}
