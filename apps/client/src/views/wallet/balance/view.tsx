import { UseAccess } from '@/hooks/useAccess'
import {
  Image,
  OstiganButton,
  OstiganRadio,
  QrCodeIcon,
  QRCODES,
  useRouter,
  useTranslations,
  useWindowDimensions,
  WALLET,
  WalletCard,
  WalletList,
} from '../imports'

export const BalanceView = ({ walletTabs, walletInfo, setStep }) => {
  const t = useTranslations()
  const { width } = useWindowDimensions()
  const router = useRouter()
  const { permissions } = UseAccess()

  return (
    <div className="flex flex-col gap-8">
      <div className="flex lg:flex-row flex-col gap-7">
        <div className="w-full">
          <WalletCard
            walletNumber={walletInfo?.wallet_number}
            balance={walletInfo?.balance}
          />
        </div>
        <div className="grid grid-cols-12 w-full">
          <div className="sm:col-span-8 xl:col-span-12 col-span-12 flex flex-col w-full rounded-lg gap-7 bg-white p-6">
            <div className="flex justify-between">
              <div>
                <div>لورم ایپسوم متن ساختگی:</div>
                <ul>
                  <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</li>
                  <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</li>
                </ul>
              </div>
              {width > 1280 ? (
                <div className="relative flex justify-center items-center w-28 h-28">
                  <Image src={walletInfo?.qr_code} alt="ostigan" fill />
                </div>
              ) : null}
            </div>
            <OstiganRadio
              name="wallettabs"
              options={walletTabs}
              defaultValue="null"
              optionLabel="name"
              optionValue="value"
              showRadioIcon={false}
              wrapperClassName="shadow-green"
              borderColor="var(--tint-200)"
              insideBlockStyles={{
                flexWrap: {
                  xs: 'wrap',
                  sm: 'nowrap',
                },
                color: 'var(--primary-default)',
                justifyContent: {
                  xs: 'center',
                },
              }}
              onChange={(value) => {
                const newValue = JSON.parse(value)
                if (newValue == 'addBalance') {
                  setStep(1)
                }
                if (newValue == 'cashout') {
                  setStep(2)
                }
                if (newValue == 'transfer') {
                  setStep(3)
                }
              }}
            />
            <OstiganButton
              variant="contained"
              type="button"
              disabled={!permissions?.walletDepositAccess?.value}
              fullWidth
              handleClick={() => {
                router.push(`${WALLET}${QRCODES}`)
              }}
            >
              <QrCodeIcon />
              {t('myQRCode')}
            </OstiganButton>
          </div>
          {width <= 1280 && width > 425 ? (
            <>
              <div className="col-span-1" />
              <div className="col-span-3 relative flex justify-center items-center w-full my-6 mr-auto">
                <Image src={walletInfo?.qr_code} alt="ostigan" fill />
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="w-full">
        <WalletList />
      </div>
    </div>
  )
}
