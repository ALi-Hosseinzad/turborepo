'use client'

import {
  ArrowToSideRightIcon,
  Image,
  useRouter,
  useTranslations,
} from '../import'

const GiftCardProductDetail = (props: {
  orderDetailData: any
}): JSX.Element => {
  const t = useTranslations()
  const router = useRouter()
  const {
    giftCardFirstPart,
    giftCardSecondPart,
    giftCardThirdPart,
    orderHeader,
  } = props.orderDetailData

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full  mb-8 text-xl font-semibold">
        {orderHeader?.title} / {orderHeader?.userName}
      </div>

      <div className="bg-white rounded-s-md px-8 pb-9">
        <div className="w-full flex justify-between py-8 ">
          <span className="text-2xl">{t('orderInformation')} </span>
          <span>
            <ArrowToSideRightIcon
              className="rotate-180 cursor-pointer"
              onClick={() => {
                router.push('order')
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-12 gap-8 bg-white">
          <div className="relative col-span-3 h-44">
            <Image src={orderHeader?.image} alt={orderHeader?.title} fill />
          </div>
          <div className="flex flex-col col-span-8 gap-2">
            {giftCardFirstPart.map((item) => (
              <div className="flex gap-2">
                <div className="!font-bold title-lg">{item.translate}:</div>
                <div className="text-lg">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {giftCardThirdPart[0]?.value?.length > 0 && (
          <div className="flex flex-col pt-4">
            <div className="basis-full text-lg">{t('token')}</div>
            <div className="flex flex-row ">
              <ol className="list-decimal mx-14">
                {giftCardThirdPart[0]?.value.map((giftCardThird) => {
                  return (
                    <span key={giftCardThird?.token}>
                      <li className="my-3 "> {giftCardThird?.token}</li>
                    </span>
                  )
                })}
              </ol>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-s-md p-8">
        <div className="w-full text-2xl">{t('paymentInformation')} </div>
        <div className="grid grid-cols-2 gap-4 pt-6">
          {giftCardSecondPart.map((item) => (
            <div className="flex gap-2">
              <div className="!font-bold title-lg">{item.translate}:</div>
              <div className="text-lg">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default GiftCardProductDetail
