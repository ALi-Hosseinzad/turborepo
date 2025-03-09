import {
  AddNewQrCode,
  LazyLoading,
  OstiganButton,
  PlusIcon,
  QR_CODE_LIST_QUERY,
  QrCodeItem,
  useTranslations,
  WALLET_QR_CODE_URL,
} from '../../imports'

export const QrCodeListView = ({ showModel, setShowModal }) => {
  const t = useTranslations()
  return (
    <div className="flex flex-col bg-white rounded-lg p-4">
      <div className="flex justify-between items-center">
        <p className="title-lg"> {t('myQrCodes')} </p>
        <OstiganButton
          variant="contained"
          type="button"
          fontSize={18}
          handleClick={() => setShowModal({ ...showModel, add: true })}
        >
          <div className="flex items-center">
            <PlusIcon className="w-6 h-6" />
            <p className="text-white">{t('addNewQrCode')}</p>
          </div>
        </OstiganButton>
      </div>
      {showModel.add ? (
        <AddNewQrCode
          open={showModel.add}
          handleClose={() => setShowModal({ ...showModel, add: false })}
        />
      ) : null}
      <LazyLoading url={WALLET_QR_CODE_URL} queryKey={QR_CODE_LIST_QUERY}>
        {(data, isFetching) => {
          return (
            <div className="flex flex-col gap-6 pt-10 overflow-y-scroll">
              {data?.pages?.map((item) => {
                return item.data.map((item2) => (
                  <QrCodeItem key={item2.id} data={item2} />
                ))
              })}
              {isFetching ? <p className="text-red-400">loading...</p> : null}
            </div>
          )
        }}
      </LazyLoading>
    </div>
  )
}
