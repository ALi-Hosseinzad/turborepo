import {
  Header2,
  Image,
  OstiganButton,
  OstiganStatus,
  React,
  SIGNATORY_OWNER_URL,
  useTranslations,
} from '../../imports'

export const CertificateFormLayoutView = (props: any): JSX.Element => {
  const {
    data,
    title,
    hasImageBack = false,
    handleConfirm,
    id,
    url,
    querykey,
  } = props
  const t = useTranslations()

  return (
    <>
      {hasImageBack ? (
        <div className="py-2 text-trueGray-400 text-sm">نفر {data?.number}</div>
      ) : null}
      <div
        className={`flex flex-col p-4 ${hasImageBack ? 'border border-trueGray-300 rounded-lg' : 'border-b border-trueGray-300'} `}
      >
        {title ? <Header2 title={title} /> : null}

        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <div className="grid grid-cols-8 gap-2">
              <div className="relative rounded-xl border border-dashed h-72 xl:h-64 max-w-[400px] col-span-3">
                {data?.image ? (
                  <Image
                    src={data?.image}
                    className="rounded-lg"
                    fill
                    alt={t('nationalCardImage')}
                    object-fit="contain"
                  />
                ) : (
                  <div className="absolute left-[50%] top-[50%] -translate-x-[50%] text-trueGray-400">
                    هنوز تصویری بارگذاری نشده است
                  </div>
                )}
              </div>
              {hasImageBack ? (
                <div className="relative rounded-xl border border-dashed h-72 xl:h-64 max-w-[400px] col-span-3">
                  {data?.imageBack ? (
                    <Image
                      src={data?.imageBack}
                      className="rounded-lg"
                      fill
                      alt={t('nationalCardImage')}
                      object-fit="contain"
                    />
                  ) : (
                    <div className="absolute left-[50%] top-[50%] -translate-x-[50%] text-trueGray-400">
                      هنوز تصویری بارگذاری نشده است
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>

          <div className="grid col-span-3 relative">
            <OstiganStatus
              text={data?.statusLabel}
              status={data?.status}
              className="!top-0 !left-0 !text-[16px]"
            />
            <div className="absolute bottom-0 left-0">
              <div className="flex gap-4 w-full">
                <OstiganButton
                  type="button"
                  variant="contained"
                  disabled={!data?.image}
                  handleClick={() => {
                    handleConfirm({
                      id,
                      url,
                      querykey,
                      value: url === SIGNATORY_OWNER_URL ? 1 : 'accepted',
                    })
                  }}
                >
                  {t('accept')}
                </OstiganButton>
                <OstiganButton
                  type="button"
                  styleType="error"
                  variant="outlined"
                  padding="6px 25px"
                  disabled={!data?.image}
                  handleClick={() => {
                    handleConfirm({
                      id,
                      url,
                      querykey,
                      value: url === SIGNATORY_OWNER_URL ? 0 : 'rejected',
                    })
                  }}
                >
                  {t('reject')}
                </OstiganButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
