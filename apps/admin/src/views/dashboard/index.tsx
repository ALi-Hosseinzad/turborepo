'use client'

import { DashboardView, useDashboardViewModel } from './imports'

const Dashboards = (): JSX.Element => {
  const { dataOrder, dataUser, dataGiftCardPakage, isLoading, bodyInfo } =
    useDashboardViewModel()

  return (
    <DashboardView
      dataOrder={dataOrder?.pagination?.total}
      dataUser={dataUser?.pagination?.total}
      dataGiftCardPakage={dataGiftCardPakage?.pagination?.total}
      isLoading={isLoading}
      bodyInfo={bodyInfo}
    />
  )
}

export default Dashboards
