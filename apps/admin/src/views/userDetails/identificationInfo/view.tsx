import type { IdentificationInfoViewType } from '../imports'
import {
  FormUserDetailsLayout,
  Image,
  LabelField,
  NATIONAL_CARD_URL,
  OstiganTextField,
  useTranslations,
} from '../imports'

export const IdentificationInfoView = (
  props: IdentificationInfoViewType,
): JSX.Element => {
  const { data, isLoading, refetchUserInfo } = props
  const t = useTranslations()
  return (
    <FormUserDetailsLayout
      titleHeader2={t('nationalInf')}
      id={data?.id}
      url={NATIONAL_CARD_URL}
      disabledButton={!data}
      refetchUserInfo={refetchUserInfo}
    >
      {!isLoading ? (
        <div
          className={`absolute top-8 left-8 flex justify-center items-center rounded-lg text-xl py-1 px-5 ${
            data?.is_verify
              ? 'text-success-default bg-tint-100'
              : 'text-error-default bg-error-background'
          }`}
        >
          {data?.is_verify_label}
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-x-5 w-full">
        <div className="flex flex-col gap-6">
          <OstiganTextField
            name="firstName"
            title={t('nationalNumber')}
            value={data?.national_id}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="lastName"
            title={t('gender')}
            value={data?.gender_label}
            disabled={!isLoading}
          />
          <OstiganTextField
            name="phone"
            title={t('birthDate')}
            value={data?.birthday?.replaceAll('-', '/')}
            disabled={!isLoading}
          />
        </div>
        <div>
          <LabelField title={t('nationalCardImage')} disabled />
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
