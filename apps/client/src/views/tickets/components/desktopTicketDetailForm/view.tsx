import {
  AttachIcon,
  FormikTextEditor,
  FormikUploader,
  OstiganButton,
  useTranslations,
} from '../../imports'

export const DesktopTicketDetailFormView = ({
  handleCloseTicket,
  isPendingClose,
  isPendingAdd,
}) => {
  const t = useTranslations()
  return (
    <div className="sm:grid sm:grid-cols-12 flex flex-col gap-2 sm:gap-6 bg-white shadow-md rounded-lg my-4 py-4 px-4">
      <div className="sm:col-span-9 bg-[#FAFAFA]">
        <FormikTextEditor name="description" placeholder={t('leaveAMessage')} />
      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <div className="relative h-12 sm:h-full">
          <FormikUploader
            name="attachment"
            isPositionCenter
            attachIcon={<AttachIcon />}
            placeholder={
              <div className="flex flex-col">
                <span className="">{t('attachFile')}</span>
                <span>{t('limitationAttachment')}</span>
              </div>
            }
          />
        </div>
        <div className="flex sm:flex-col lg:flex-row w-full gap-2">
          <OstiganButton
            handleClick={handleCloseTicket}
            isLoading={isPendingClose}
            disabled={isPendingClose || isPendingAdd}
            fontSize={14}
            variant="outlined"
            className="whitespace-nowrap"
            type="button"
          >
            {t('closeTicket')}
          </OstiganButton>
          <OstiganButton
            className="lg:w-1/2 w-full"
            isLoading={isPendingAdd}
            disabled={isPendingAdd || isPendingClose}
            fontSize={14}
            variant="contained"
            type="submit"
          >
            {t('send')}
          </OstiganButton>
        </div>
      </div>
    </div>
  )
}
