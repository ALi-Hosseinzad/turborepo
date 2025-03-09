'use client'

import { BreadCrumbs } from '../authorization/imports'
import { useBreadCrumbs } from './components/breadCrumbs'
import { WalletTabs } from './imports'

const Wallet = () => {
  const { getBreadCrumbs } = useBreadCrumbs()
  return (
    <>
      <BreadCrumbs breadCrumbs={getBreadCrumbs()} />
      <WalletTabs />
    </>
  )
}

export default Wallet
