import { useTranslations } from '../../import'

const OrderInfoView = ({
  orderGeneralInfo,
  orderMessage,
  OnlinePaymentInputs,
}) => {
  const t = useTranslations()
  return (
    <>
      <div className="rounded-lg border border-[#E5E5E5] border-solid p-4">
        <div className="flex justify-between items-center">
          <p className="title-base md:title-lg">{t('orderDetails')}</p>
        </div>
        <div className="flex flex-col">
          {Object.values(orderGeneralInfo).map((item: any) => (
            <div
              key={item?.key}
              className="flex flex-wrap justify-between py-3 border-b last:border-none border-gray-200"
            >
              <p className="text-medium-sm md:text-medium-base">
                {item?.title}
              </p>
              <p
                className={`text-medium-sm md:text-medium-base ${item?.key === 'order_status' ? `text-[${item.statusTextColor}]` : ''}`}
              >
                {item?.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      {Object.keys(OnlinePaymentInputs).length > 0 ? (
        <div className="rounded-lg border border-[#E5E5E5] border-solid p-4">
          <div className="flex justify-between items-center">
            <p className="title-base md:title-lg">{t('submittedInfo')}</p>
          </div>
          <div className="flex flex-col">
            {Object.values(OnlinePaymentInputs).map((item: any) => (
              <div
                key={item?.key}
                className="flex flex-wrap justify-between py-3 border-b last:border-none border-gray-200"
              >
                <p className="text-medium-sm md:text-medium-base">
                  {item?.title}
                </p>
                <p
                  className={`text-medium-sm md:text-medium-base ${item?.key === 'order_status' ? `text-[${item.statusTextColor}]` : ''}`}
                >
                  {item?.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {orderMessage ? (
        <div className="bg-trueGray-200 rounded-lg p-4">
          <p className="title-base sm:title-lg pb-3">{t('giftMessage')}</p>
          <p className="text-medium-sm md:text-medium-base">{orderMessage}</p>
        </div>
      ) : null}
    </>
  )
}

export default OrderInfoView
