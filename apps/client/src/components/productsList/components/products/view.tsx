import { DashBulletIcon, ShowMoreDrawer, TextWithIcon } from '../../imports'
import type { ProductsViewType } from '../../imports'

export const ProductsView = (props: ProductsViewType): JSX.Element => {
  const { productsList, cardNumberInRow, handleSliceArray } = props
  return (
    <div className="flex flex-col gap-20 pb-8">
      {productsList?.map((item) => {
        return (
          <div key={item?.id}>
            <ShowMoreDrawer
              showMoreBtn={item?.products?.length > cardNumberInRow}
              headerComponent={
                <TextWithIcon
                  icon={<DashBulletIcon />}
                  text={item.name}
                  gap={2}
                  textClass="title-base md:title-xl"
                />
              }
              initialCard={handleSliceArray({
                startIndex: 0,
                stopIndex: cardNumberInRow,
                arrayList: item.products,
              })}
              moreCard={handleSliceArray({
                startIndex: cardNumberInRow,
                arrayList: item.products,
              })}
            />
          </div>
        )
      })}
    </div>
  )
}
