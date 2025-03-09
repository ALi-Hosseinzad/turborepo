import type { IdentificationInfoViewType } from '../imports'
import {
  FormUserDetailsLayout,
  GUILD_URL,
  Image,
  LabelField,
  OstiganStatus,
  OstiganTextField,
  useTranslations,
} from '../imports'

export const GuildInfoView = (
  props: IdentificationInfoViewType,
): JSX.Element => {
  const { data, isLoading, refetchUserInfo } = props
  const t = useTranslations()

  return (
    <FormUserDetailsLayout
      titleHeader2={t('guildInfo')}
      id={data?.id}
      url={GUILD_URL}
      disabledButton={!data}
      refetchUserInfo={refetchUserInfo}
    >
      {!isLoading ? (
        <OstiganStatus
          text={data?.status_label}
          status={data?.status}
          className="top-8 left-8"
        />
      ) : null}
      <div className="grid grid-cols-2 gap-x-5 w-full">
        <div className="flex flex-col gap-6">
          <OstiganTextField
            name="taxCode"
            title={t('taxCode')}
            value={data?.tax_code}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="guildCode"
            title={t('guildCode')}
            value={data?.guild_code}
            disabled={!isLoading}
          />
        </div>
        <div>
          <LabelField title={t('businessLicenseImage')} disabled />
          <div className="grid grid-cols-5 grid-flow-col gap-10 border border-trueGray-500 rounded-lg p-6 h-[90%]">
            <ul className="col-span-2">
              <li>
                پیوسته و مورد نیاز و مجله در متخصصان در طراحان خلاقی قرار گیرد
                برای طراحان بلکه و سطر در تمام آنچنان
              </li>
              <li>
                پیوسته و مورد نیاز و مجله در متخصصان در طراحان خلاقی قرار گیرد
                برای طراحان بلکه و سطر در تمام آنچنان
              </li>
            </ul>

            <div className="relative border border-dashed border-trueGray-400 rounded-lg col-span-3 p-2">
              {data?.image ? (
                <Image
                  src={data?.image}
                  className="rounded-lg"
                  fill
                  alt={t('nationalCardImage')}
                  object-fit="contain"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </FormUserDetailsLayout>
  )
}
