import { UseAccess } from '@/hooks/useAccess'
import { RULE_URL } from '@/constants/routes'
import {
  ArrowToSideLeftIcon,
  EmailIcon,
  FormikCheckbox, // GiftCardCodeIcon,
  Link,
  OstiganButton,
  PhoneIcon,
  TextWithIcon,
  useTranslations,
} from '../../imports'

export const PreInvoiceView = ({
  userInfo,
  priceInfo,
  isPending,
  isSuccess,
}) => {
  const t = useTranslations()
  const { permissions } = UseAccess()
  const getButtonText = (permissions, t) => {
    if (permissions?.orderSubmitAccess?.value) {
      return t('ConfirmAndContinue')
    }

    return permissions?.orderSubmitAccess?.message
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="title-base sm:title-lg">{t('buyerDetails')}</p>

        <div className="flex flex-col gap-4 border-b border-trueGray-300 pb-4">
          <div className="flex justify-between">
            <TextWithIcon
              text={t('email')}
              icon={<EmailIcon color="black" />}
            />
            <p>{userInfo?.email}</p>
          </div>
          {userInfo?.phone ? (
            <div className="flex justify-between">
              <TextWithIcon text={t('mobileNumber')} icon={<PhoneIcon />} />
              <p>0{userInfo?.phone}</p>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-4 border-b border-trueGray-300 pb-4">
          <div className="flex justify-between">
            <p className="text-medium-xs md:text-medium-sm">
              {t('daylyPrice')}
              {priceInfo.daylyPrice.currency}
            </p>
            <p className="text-medium-xs md:text-medium-sm">
              {priceInfo.daylyPrice.price}
              {t('rial')}
            </p>
          </div>
          {priceInfo.servicePrice !== '0' && (
            <div className="flex justify-between">
              <p className="text-medium-xs md:text-medium-sm">
                {t('servicePrice')}
              </p>
              <p className="text-medium-xs md:text-medium-sm">
                {priceInfo.servicePrice}
                {t('rial')}
              </p>
            </div>
          )}
          {priceInfo.wage !== '0' && (
            <div className="flex justify-between">
              <p className="text-medium-xs md:text-medium-sm">{t('wage')}</p>
              <p className="text-medium-xs md:text-medium-sm">
                {priceInfo.wage}
                {t('rial')}
              </p>
            </div>
          )}
          {priceInfo.hurryPrice !== '0' && (
            <div className="flex justify-between">
              <p className="text-medium-xs md:text-medium-sm">
                {t('hurryPrice')}
              </p>
              <p className="text-medium-xs md:text-medium-sm">
                {priceInfo.hurryPrice}
                {t('rial')}
              </p>
            </div>
          )}
          <div className="flex justify-between">
            <p className="text-medium-xs md:text-medium-sm">مجموع هزینه:</p>
            <p className="text-medium-xs md:text-medium-sm">
              {priceInfo.totalPrice}
              {t('rial')}
            </p>
          </div>
          <div className="text-xs sm:text-normal-base py-2">
            <FormikCheckbox label="پرداخت سریع" name="fastPayment" />
            <p className="px-2 text-sm">{t('hurryPriceMessage')}</p>
          </div>
          {/* <div className="text-xs sm:text-normal-base rounded-xl bg-tint-100 text-primary-active py-2 px-1">
            <TextWithIcon
              gap={1}
              icon={<GiftCardCodeIcon />}
              text={t('sendingVoucherCode')}
              containerClassName="text-primary-active"
            />
          </div> */}
        </div>

        <div className="text-xs sm:text-normal-base rounded-xl bg-blue-50 py-2 px-1">
          <FormikCheckbox
            label={t('OfficialInvoiceRequest')}
            name="officialInvoice"
          />
          <p className="px-3 text-sm">{t('OfficialInvoiceRequestMessage')}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <OstiganButton
          type="submit"
          variant="contained"
          isLoading={isPending || isSuccess}
          disabled={
            isPending || isSuccess || !permissions?.orderSubmitAccess?.value
          }
        >
          {getButtonText(permissions, t)}
        </OstiganButton>

        <Link href={RULE_URL as any}>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-xs sm:text-normal-base">{t('purchaseTerms')}</p>
            <ArrowToSideLeftIcon color="var(--darkTypo)" />
          </div>
        </Link>
      </div>
    </>
  )
}
