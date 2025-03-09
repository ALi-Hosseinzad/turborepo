import type { MediaAuthorizationInfoViewType } from '../imports'
import {
  FormUserDetailsLayout,
  Image,
  LabelField,
  MEDIA_URL,
  OstiganStatus,
  useTranslations,
} from '../imports'

export const MediaAuthorizationInfoView = (
  props: MediaAuthorizationInfoViewType,
): JSX.Element => {
  const { data, isLoading, refetchUserInfo, nationalCardImage } = props
  const t = useTranslations()

  return (
    <FormUserDetailsLayout
      titleHeader2={`${t('contract')}  (${t('PhotoUploadAuthentication')})`}
      id={data?.id}
      url={MEDIA_URL}
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

      <div className="grid grid-cols-12 gap-x-5 w-full">
        <div className="grid col-span-3">
          <LabelField title={t('nationalCardImage')} disabled />
          <div className="relative border border-dashed border-trueGray-400 rounded-lg h-52 p-2">
            {nationalCardImage ? (
              <Image
                src={nationalCardImage}
                className="rounded-lg"
                fill
                alt={t('nationalCardImage')}
                object-fit="contain"
              />
            ) : null}
          </div>
        </div>
        <div className="grid col-span-3">
          <LabelField title={t('contractImage')} disabled />
          <div className="relative border border-dashed border-trueGray-400 rounded-lg h-52 p-2">
            {data?.file ? (
              <Image
                src={data?.file}
                className="rounded-lg"
                fill
                alt={t('nationalCardImage')}
                object-fit="contain"
              />
            ) : null}
          </div>
        </div>
      </div>
    </FormUserDetailsLayout>
  )
}
