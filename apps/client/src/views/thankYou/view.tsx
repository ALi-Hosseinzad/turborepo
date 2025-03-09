import {
  ConfettiComponent,
  ConfettiIcon,
  FormWrapper,
  OstiganButton,
  SuccessOrderIcon,
  type ThankYouViewProps,
  useTranslations,
} from './import'

const ThankYouView: React.FC<ThankYouViewProps> = ({
  thankYouData,
  isPending,
  onSubmit,
  visualConfetti,
  matchType,
}) => {
  const t = useTranslations()

  return (
    <div className="m-0 xl:mx-20">
      <div className="bg-white rounded-lg p-10 xl:p-8 flex flex-col justify-center content-center items-center">
        <div className="flex flex-col w-2/5 flex-nowrap gap-6 justify-center content-center items-center">
          <div className="flex flex-col flex-nowrap justify-center content-center items-center">
            {visualConfetti ? <ConfettiComponent /> : null}

            <ConfettiIcon />
            <SuccessOrderIcon className="-mt-[80px] mb-6" />
            <p className="text-center text-medium-lg text-[#2CA562]">
              {matchType === 'ORDER'
                ? t('successOrderMessage')
                : t('successChargeMessage')}
            </p>
          </div>
          <div className="flex flex-col w-full flex-nowrap gap-3 justify-center items-center">
            {Object.values(thankYouData).map((item: any) => (
              <div
                key={item?.key}
                className="flex justify-between w-full py-3 border-b last:border-none border-gray-200"
              >
                <p className="text-start text-medium-lg">{item?.title}</p>
                <p className="text-start text-medium-lg">{item?.value}</p>
              </div>
            ))}
          </div>
          <FormWrapper initialValues="" onSubmit={onSubmit}>
            <OstiganButton
              variant="contained"
              type="submit"
              className="w-full"
              isLoading={isPending}
              disabled={isPending}
            >
              {matchType === 'ORDER' ? t('trackingOrder') : t('moveToWallet')}
            </OstiganButton>
          </FormWrapper>
        </div>
      </div>
    </div>
  )
}

export default ThankYouView
