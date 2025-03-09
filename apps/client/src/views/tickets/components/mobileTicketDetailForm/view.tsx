import { InputAdornment } from '@mui/material'
import {
  AttachIcon,
  CloseIcon,
  FormikTextField,
  FormikUploader,
  SendIcon,
  Spinner,
  useTranslations,
} from '../../imports'

export const MobileTicketDetailFormView = ({
  isPendingClose,
  handleCloseTicket,
  isPendingAdd,
}) => {
  const t = useTranslations()
  return (
    <>
      <button
        type="button"
        className="flex gap-1 w-full bg-error-background p-2 mb-1"
        disabled={isPendingClose || isPendingAdd}
        onClick={handleCloseTicket}
      >
        {isPendingClose ? (
          <Spinner color="var(--error-default)" />
        ) : (
          <CloseIcon color="var(--error-default)" />
        )}
        <p className="text-error-default">{t('closeTicket')}</p>
      </button>
      <FormikTextField
        name="description"
        placeholder={t('leaveAMessage')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <button type="submit">
                {isPendingAdd ? (
                  <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-default">
                    <Spinner color="white" />
                  </div>
                ) : (
                  <SendIcon />
                )}
              </button>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <FormikUploader
                name="attachment"
                typeUploader="typeInputUploader"
                placeholder=" "
                startAdornment={<AttachIcon />}
                endAdornment={null}
                wrapperClass="flex items-center w-10"
                sx={{
                  border: 'none',
                  '& fieldset': { border: 'none' },
                  '& .MuiFilledInput-underline:before': {
                    borderBottom: 'none',
                  },
                  '& .MuiFilledInput-underline:after': {
                    borderBottom: 'none',
                  },
                  '& .MuiFilledInput-underline:hover:not(.Mui-disabled):before':
                    {
                      borderBottom: 'none',
                    },
                }}
                // showPreviewUploader="text"
              />
            </InputAdornment>
          ),
        }}
      />
    </>
  )
}
