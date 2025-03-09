'use client'

import Image from 'next/image'
import type { InvoicePropsType } from './import'
import {
  BreadCrumbs,
  InvoiceSkeleton,
  PrintIcon,
  ResponseMessageBox,
  SaveIcon,
  useInvoiceViewModel,
  useTranslations,
} from './import'

const Invoice: React.FC<InvoicePropsType> = ({ invoiceId }) => {
  const {
    getOrderInfo,
    getBreadCrumbs,
    dataInvoice,
    isLoadingInvoice,
    getOnlinePaymentResponse,
  } = useInvoiceViewModel(invoiceId)
  const t = useTranslations()
  const orderInfo = getOrderInfo()
  const breadCrumbs = getBreadCrumbs()
  const onlinePaymentResponse = getOnlinePaymentResponse()
  const giftCardImg =
    dataInvoice?.order_type_label === 'GiftCardProduct'
      ? dataInvoice?.orderable?.image
      : dataInvoice?.orderable?.service?.image
  return (
    <>
      {isLoadingInvoice ? (
        <InvoiceSkeleton isLoading={isLoadingInvoice} />
      ) : (
        <>
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          <div className="m-0 lg:mx-[2vw] xl:mx-[5vw]">
            <div className="bg-white rounded-lg p-4 lg:p-8">
              <div className="flex justify-between items-center col-span-9">
                <p className="title-base md:title-lg">{t('orderReceipt')}</p>
                <div className="flex gap-6">
                  <SaveIcon className="w-6 h-6 cursor-pointer" />
                  <PrintIcon
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => window.print()}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row my-6 gap-6">
                <div className="basis-full flex flex-col gap-6 lg:basis-7/12">
                  <div className="flex flex-col gap-2 col-span-5 bg-white rounded-lg">
                    <div className="col-span-10">
                      {Object.values(orderInfo).map((item, index) => (
                        <div
                          key={index}
                          className={`flex flex-wrap justify-between py-4 border-b border-gray-200 ${index !== dataInvoice?.tokens?.length - 1 && ''}`}
                        >
                          <p className="text-medium-sm md:text-medium-base">
                            {item.title}
                          </p>
                          <p
                            className={`text-medium-sm md:text-medium-base ${item?.key === 'order_status' ? `text-[${item.statusTextColor}]` : ''}`}
                          >
                            {item.value}
                            {item.type === 'price' && ` ${item.currency}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="basis-full p-4 flex flex-col gap-2 justify-start rounded-lg m-0 lg:basis-5/12 overflow-hidden bg-[#F7FAFA]">
                  <div className="justify-center hidden lg:flex">
                    <Image
                      sizes="100%"
                      width={0}
                      height={0}
                      style={{ width: '100%', height: '11vw' }}
                      src={giftCardImg}
                      alt={dataInvoice?.description}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    {dataInvoice?.description ? (
                      <div className="bg-trueGray-200 rounded-lg px-4 pt-4">
                        <p className="title-lg pb-3">{t('giftMessage')}</p>
                        <p className="text-normal-base">
                          {dataInvoice?.description}
                        </p>
                      </div>
                    ) : null}
                    <div className="flex flex-col gap-1">
                      {dataInvoice?.tokens?.length > 0 &&
                        dataInvoice?.tokens?.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-wrap justify-between items-center"
                          >
                            <p className="text-medium-sm sm:text-normal-lg xl:text-medium-base">
                              {t('giftCardToken')} {index + 1} :
                            </p>
                            <p className="text-medium-sm sm:text-normal-lg xl:text-medium-base">
                              {item.token}
                            </p>
                          </div>
                        ))}
                    </div>
                    {Object.keys(onlinePaymentResponse).length > 0 ? (
                      <div className="flex flex-col gap-2">
                        {Object.values(onlinePaymentResponse).map(
                          (item: any) => (
                            <ResponseMessageBox
                              message={item?.description}
                              attachment={item?.attachment}
                            />
                          ),
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Invoice
