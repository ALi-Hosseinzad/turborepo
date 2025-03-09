import type { DevicesInfoViewType } from '../imports'
import { ElectronicsIcon, NoData, OstiganTable } from '../imports'

export const DevicesInfoView = (props: DevicesInfoViewType): JSX.Element => {
  const { data, headInfoTable, isLoading } = props
  return (
    <>
      {data.length > 0 ? (
        <OstiganTable
          headInfo={headInfoTable}
          bodyInfo={data}
          tableStyle="admin"
          isLoading={isLoading}
        />
      ) : (
        <NoData icon={<ElectronicsIcon className="w-10 h-10" />} />
      )}
    </>
  )
}
