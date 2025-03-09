'use client'

import {
  ProductBox,
  TagSkeleton,
  useFavoriteCardViewModel,
  useRouter,
  useTranslations,
} from '../../imports'

function FavoriteCard() {
  const router = useRouter()
  const t = useTranslations()
  const { data, isLoading } = useFavoriteCardViewModel()

  return (
    <>
      {!isLoading ? (
        <>
          {data?.length > 0 ? (
            <>
              <div className="flex">
                <p className="title-3xl">{t('favorites')}</p>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 gap-y-10 -mt-5 py-4 overflow-hidden">
                {data?.map((item: any, index: any) => {
                  const routerUrl =
                    item.type === 'online_payment'
                      ? 'onlinePayment'
                      : 'giftCard'
                  return item?.products?.bookmarks ? (
                    <ProductBox
                      data={item?.products}
                      key={index}
                      onClick={() =>
                        router.push(`/${routerUrl}/${item.product_id}`)
                      }
                    />
                  ) : null
                })}
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center w-full h-[50vh] text-normal-base ">
              {t('noFavoriteList')}
            </div>
          )}
        </>
      ) : (
        <TagSkeleton />
      )}
    </>
  )
}

export default FavoriteCard
