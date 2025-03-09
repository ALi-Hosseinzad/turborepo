import { ProductBox } from '@/components/cards/productBox'
import type { ProductsViewModeltype } from '../../imports'
import { usePathname, useRouter, useWindowDimensions } from '../../imports'

export const useProductsViewModel = (): ProductsViewModeltype => {
  const { width } = useWindowDimensions()
  const pathname = usePathname()
  const router = useRouter()

  const getCardNumberInRow = () => {
    if (width > 1600) {
      return 4
    } else if (width > 1280) {
      return 3
    } else if (width > 1024) {
      return 2
    } else if (width > 650) {
      return 2
    }
    return 1
  }
  const getCardNumberInRowClass = () => {
    if (width > 1600) {
      return 'grid-cols-4'
    } else if (width > 1280) {
      return 'grid-cols-3'
    } else if (width > 1024) {
      return 'grid-cols-2'
    } else if (width > 650) {
      return 'grid-cols-2'
    }
    return 'grid-cols-1'
  }
  const cardNumberInRow = getCardNumberInRow()

  const handleClick = (item) => {
    router.push(`${pathname}/${item?.id}` as any)
  }

  const handleSliceArray = ({ startIndex, stopIndex, arrayList }) => {
    return (
      <div className={`grid ${getCardNumberInRowClass()} gap-4`}>
        {arrayList?.slice(startIndex, stopIndex)?.map((item) => (
          <div
            role="button"
            className="cursor-pointer"
            tabIndex={item?.id}
            onClick={() => handleClick(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
              }
            }}
          >
            <ProductBox key={item.id} data={item} />
          </div>
        ))}
      </div>
    )
  }

  return {
    cardNumberInRow,
    handleSliceArray,
  }
}
