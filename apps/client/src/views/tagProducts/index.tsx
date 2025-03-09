'use client'

import {
  BreadCrumbs,
  LazyLoading,
  ProductBox,
  useParams,
  useRouter,
  useState,
  useTranslations,
} from './imports'

function TagProducts() {
  const t = useTranslations()
  const router = useRouter()
  const breadCrumbs = [{ name: t('tag'), url: '' }]
  const [tagName, setTagName] = useState<any[]>([])
  const params = useParams()

  const getCurData = async (pagination: number) => {
    /* eslint-disable -- Reason for disabling all ESLint rules in this file */
    const origin =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3003/api'
        : process.env.BASE_URL

    const curUrl =
      `${origin}/products?${pagination}&id=${params.tagId}` as string
    const res = await fetch(curUrl)
    const data = res && (await res?.json())
    setTagName(data.tagName)
    return data
  }

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="flex">
        <p className="title-3xl">
          {t('subjects')} {t('tag')} : {t('tag')} {tagName}
        </p>
      </div>
      <LazyLoading getCurData={getCurData}>
        {(tagProducts: any) => {
          return (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 gap-y-24 -mt-5 py-4 overflow-hidden">
              {tagProducts?.map((product: any) => {
                const routerUrl =
                  product.type === 'online_payment'
                    ? 'onlinePayment'
                    : 'giftCard'
                return (
                  <ProductBox
                    key={product.id}
                    data={product}
                    onClick={() =>
                      router.push(`/${routerUrl}/${product.id}` as any)
                    }
                  />
                )
              })}
            </div>
          )
        }}
      </LazyLoading>
    </>
  )
}

export default TagProducts
