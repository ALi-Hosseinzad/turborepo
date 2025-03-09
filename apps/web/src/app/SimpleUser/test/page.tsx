'use client'

import React from 'react'
import CardPdpView from '@/views/pdp/giftCardProducts/view'

const TestPagePDP = (): React.JSX.Element => {
  // const item = []
  // // Alternatively, you can use forEach for a more concise syntax
  // giftCardPackageData?.regions.forEach(function (currentRegion: any) {
  //   return item.push(<OfferCard key={currentRegion?.id} data={currentRegion} />)
  // })

  // const tabItemsArr = giftCardPackageData?.regions?.map(({ id, flag }) => ({
  //   text: id,
  //   icon: <Image src={flag} width={100} height={100} alt="flag" />,
  // }))

  return (
    <>
      <CardPdpView />
      <div className=" bg-cyan-600">گیفت کارت پلی‌استیشن/ خانه</div>
      <div className="flex flex-row">
        <div className="basis-1/2 flex justify-center flex-col">
          <div className="">گیفت کارت‌ پلی‌استیشن</div>
          <div className="">
            با گیفت کارت‌های استیگان هر لحظه هر کجا با دنیای بدون مرز در ارتباط
            باشید.
          </div>
          <div className="">
            گیفت کارت Giftcard، کارتی است که می‌توانید از آن برای خرید از
            سایت‌های خارجی و شارژ اکانت‌های مختلف استفاده کنید. ایرانیکارت با ۱۳
            سال سابقه فعالیت، معتبرترین سایت خرید گیفت کارت در ایران است. شما
            می‌توانید برای خرید گیفت کارت از هر نوعی که نیاز دارید، از خدمات
            ایرانیکارت استفاده کنید. به راحتی انواع گیفت کارت های مختلف از جمله
            گیفت کارت های پلی استیشن، ایکس باکس، اپل، فری فایر، آمازون،
            اسپاتیفای، نتفلیکس و… را با مبالغ مختلف از ایرانیکارت سفارش دهید تا
            به صورت آنی برای شما ارسال شود.
          </div>
          <div className="flex ">
            <div className="flex bg-yellow-500 basis-1/3">
              <div className=""> image</div>
              <div className="flex flex-col">
                <div className="">وضعیت کارت</div>
                <div className="">موجود</div>
              </div>
            </div>
            <div className="flex basis-2/3 bg-slate-500">
              <div className=""> image </div>
              <div className="flex flex-col">
                <div className="">وضعیت کارت</div>
                <div className="">موجود</div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex justify-center bg-orange-900">02</div>
      </div>

      {/* <div className="bg-orange-200">
        <PdpPageShow
          giftCardPackageLoding={giftCardPackageLoding}
          giftCardPackageData={giftCardPackageData}
        />
        <div className="m-20">
          <OstiganTab
            tabItems={tabItemsArr ?? []}
            tabPanelItems={item ?? []}
            iconPosition="start"
          />
          <OfferCard key={data?.regions?.id} data={data?.regions} />
        </div> */}
      {/* </div> */}
    </>
  )
}

export default TestPagePDP
