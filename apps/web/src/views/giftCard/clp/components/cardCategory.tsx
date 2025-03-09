import { Image, React } from '../imports'

export const CategoryCard = ({ data }): JSX.Element => {
  return (
    <div className="rounded-lg shadow-lg cursor-pointer px-6 py-4 whitespace-nowrap">
      <Image
        src={data?.image}
        width={100}
        height={100}
        alt={data?.name}
        className="mx-auto"
      />
      <p className="pt-3 break-words text-center truncate">{data?.name}</p>
      <p className="text-trueGray-500 pt-3 truncate text-center">
        {data?.description}
      </p>
    </div>
  )
}
