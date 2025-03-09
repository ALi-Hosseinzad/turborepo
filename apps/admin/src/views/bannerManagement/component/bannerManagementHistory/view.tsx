import {
  BANNERIMAGE,
  Header2,
  OstiganTable,
  useTranslations,
} from '../../imports'

export const BannerManagementHistoryView = ({
  bodyInfo,
  headInfo,
  isLoading,
}): JSX.Element => {
  const t = useTranslations()

  return (
    <>
      {bodyInfo?.length === 0 ? (
        <div>{t('dataEmpty')}</div>
      ) : (
        <div className="mb-14">
          <div className="mt-14">
            <Header2 title={t('contentBanner')} />
          </div>
          <OstiganTable
            headInfo={headInfo}
            bodyInfo={bodyInfo}
            tableStyle="admin"
            isLoading={isLoading}
            isFetching={false}
            showDetailUrl={BANNERIMAGE}
          />
        </div>
      )}
    </>
  )
}
