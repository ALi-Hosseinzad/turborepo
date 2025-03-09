import { Header2, OstiganTable, useTranslations } from '../../imports'

export const CurrencyHistoryView = ({
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
        <div className="mb-10">
          <div className="mt-14">
            <Header2 title={t('currencyInformation')} />
          </div>
          <OstiganTable
            headInfo={headInfo}
            bodyInfo={bodyInfo}
            tableStyle="admin"
            isLoading={isLoading}
            isFetching={false}
          />
        </div>
      )}
    </>
  )
}
