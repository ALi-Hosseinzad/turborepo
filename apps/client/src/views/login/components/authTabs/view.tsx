import {
  handleLogout,
  LegalUserTab,
  OstiganTab,
  RealUserTab,
  useDispatch,
  useTranslations,
} from '../../imports'

const AuthTabsView = (): JSX.Element => {
  const t = useTranslations()
  const dispatch = useDispatch()

  return (
    <OstiganTab
      bgPanel="transparent"
      tabItems={[
        { key: 0, text: t('realUser') },
        { key: 1, text: t('legalUser') },
      ]}
      tabSx={{
        width: '50%',
      }}
      tabPanelItems={[<RealUserTab key={0} />, <LegalUserTab key={1} />]}
      onChangeTab={() => dispatch(handleLogout())}
    />
  )
}

export default AuthTabsView
