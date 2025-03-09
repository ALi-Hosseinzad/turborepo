'use client'

import {
  OstiganTab,
  type RootState,
  Spinner,
  useSelector,
  UseTomanToRial,
  useTranslations,
} from '../imports'

const WalletView = ({ tabItems, tabPanelItems, step }) => {
  const t = useTranslations()
  const { wallet } = useSelector((state: RootState) => state.persist)

  return (
    <OstiganTab
      bgPanel="bg-customWhite"
      leftInfo={
        <div className="md:flex items-center text-primary-default gap-1 sm:block hidden">
          <span>{`${t('balance')} ${t('wallet')} : `}</span>
          <span className="font-semibold text-md">
            {wallet?.balance ? (
              `${UseTomanToRial(wallet?.balance)}${t('rial')}`
            ) : (
              <Spinner />
            )}
          </span>
        </div>
      }
      tabItems={tabItems}
      tabPanelItems={tabPanelItems}
      newStep={step}
      tabSx={{
        width: '10%',
      }}
    />
  )
}

export default WalletView
