import { Image, ShareIcon, useTranslations } from '../../imports'

export const UserQrCodeview = ({ wallet, showModel, setShowModal }) => {
  const t = useTranslations()
  return (
    <div className="relative flex flex-col items-center justify-center bg-white rounded-lg p-4 h-full">
      <p className="absolute top-6 title-lg">
        برای دریافت پول، کد QR خود را نمایش دهید.
      </p>
      <p className="py-6 text-lg">{t('wallet')}</p>
      <div className="relative w-52 h-52">
        <Image src={wallet.qr_code} fill alt="ostigan" />
      </div>
      <button
        type="button"
        className="pt-4"
        onClick={() =>
          setShowModal({ ...showModel, share: true, id: wallet.user_id })
        }
      >
        <div className="flex gap-1 text-primary-default text-lg items-center">
          <ShareIcon color="var(--primary-default)" className="w-7 h-7" />
          <p>ارسال/ذخیره</p>
        </div>
      </button>
    </div>
  )
}
