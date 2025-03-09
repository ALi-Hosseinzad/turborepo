import { UseAccess } from '@/hooks/useAccess'
import {
  ArrowToSideLeftIcon,
  CounterButton,
  EmailIcon,
  FormikSwitch,
  FormikTextField,
  GiftCardCodeIcon,
  Link,
  OstiganButton,
  PhoneIcon,
  RULE_URL,
  TextWithIcon,
  useFormikContext,
  UseTomanToRial,
  useTranslations,
} from '../../imports'

export const PreInvoiceView = ({
  userInfo,
  selectedProduct,
  quantity,
  setQuantity,
  isPending,
  isSuccess,
}) => {
  const t = useTranslations()
  const { permissions } = UseAccess()

  const getButtonText = (permissions, selectedProduct, t) => {
    if (permissions?.orderSubmitAccess?.value) {
      if (selectedProduct?.productQuantity === 0) {
        return t('endOfInventory')
      }
      return t('ConfirmAndContinue')
    }

    return permissions?.orderSubmitAccess?.message
  }

  const { values } = useFormikContext<{ isGift?: boolean }>()
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="title-base sm:title-lg">{t('buyerDetails')}</p>
        <div className="flex justify-between items-center border-b border-trueGray-300">
          <p className="text-medium-base">{t('giftForOther')}:</p>
          <FormikSwitch name="isGift" />
        </div>

        <div
          className={`flex flex-col gap-4 transition-all duration-1000 overflow-hidden border-b border-trueGray-300 ${
            values?.isGift ? 'opacity-100 h-72 py-3' : 'opacity-0 h-0'
          }`}
        >
          <FormikTextField
            classnametitle="text-medium-sm"
            name="email"
            title={t('email')}
            sizeInput="Medium"
            placeholder={t('emailExample')}
          />
          <FormikTextField
            classnametitle="text-medium-base"
            name="message"
            title={t('giftMessageText')}
            placeholder={t('enterYoureMessage')}
            multiline
            rows={5}
          />
        </div>

        {!values?.isGift ? (
          <div className="flex flex-col gap-4 border-b border-trueGray-300 pb-4">
            <div className="flex justify-between">
              <TextWithIcon
                text={t('email')}
                textClass="text-medium-xs md:text-medium-sm"
                icon={<EmailIcon color="black" />}
              />
              <p className="text-medium-xs md:text-medium-sm">
                {userInfo?.email}
              </p>
            </div>
            {userInfo?.phone ? (
              <div className="flex justify-between">
                <TextWithIcon text={t('mobileNumber')} icon={<PhoneIcon />} />
                <p>0{userInfo?.phone}</p>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="flex justify-between items-center">
          <CounterButton quantity={quantity} setQuantity={setQuantity} />
          <div className="text-left">
            {selectedProduct?.fullPrice >
            selectedProduct?.priceAfterDiscount ? (
              <p className="text-normal-xs md:text-normal-sm text-[#AEAEAE]  line-through">
                {UseTomanToRial(selectedProduct?.fullPrice * quantity?.current)}
                {t('rial')}
              </p>
            ) : null}
            <p className="title-sm md:title-md">
              {UseTomanToRial(
                selectedProduct?.priceAfterDiscount * quantity?.current,
              )}
              {t('rial')}
            </p>
          </div>
        </div>
        <div className="text-xs sm:text-normal-base rounded-xl bg-tint-100 text-primary-active py-2 px-1">
          <TextWithIcon
            gap={1}
            icon={<GiftCardCodeIcon />}
            text={t('emailGiftCardCode')}
            containerClassName="text-primary-active"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <OstiganButton
          variant="contained"
          type="submit"
          isLoading={isPending || isSuccess}
          disabled={
            isPending ||
            isSuccess ||
            selectedProduct?.productQuantity === 0 ||
            !permissions?.orderSubmitAccess?.value
          }
        >
          {getButtonText(permissions, selectedProduct, t)}
        </OstiganButton>

        <Link href={RULE_URL as any} target="_blank">
          <div className="flex gap-2 items-center mt-2">
            <p className="text-xs sm:text-normal-base">{t('purchaseTerms')}</p>
            <ArrowToSideLeftIcon color="var(--darkTypo)" />
          </div>
        </Link>
      </div>
    </>
  )
}
