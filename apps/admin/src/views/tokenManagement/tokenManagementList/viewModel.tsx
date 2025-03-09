import { useTranslations } from '../imports'

export const useTokenManagementListViewModel = (): any => {
  const t = useTranslations()

  const headInfo = [t('id'), t('product'), t('price'), t('token'), t('status')]

  const handleBodyInfo = (body: Record<string, any>[]): any[] => {
    if (body?.length) {
      return body.map(
        ({
          id,
          token,
          giftCardProductBuyPrice,
          is_used: isUsed,
          giftCardProduct,
        }: Record<string, any>) => {
          return {
            id,
            product: giftCardProduct?.name,
            price: `${giftCardProductBuyPrice?.price} ${giftCardProductBuyPrice?.currency?.name}`,
            token,
            status: (
              <div
                className={`flex justify-center items-center mx-auto rounded-lg w-full
                 p-2 ${isUsed ? 'text-error-default bg-error-background' : 'text-success-default bg-primary-background'}`}
              >
                {isUsed ? t('used') : t('unUsed')}
              </div>
            ),
          }
        },
      )
    }

    return []
  }

  return {
    bodyInfo: handleBodyInfo,
    headInfo,
  }
}
