import {
  RegionForm,
  useTranslations,
  type UseViewModelReturnType,
} from '../imports'

const RiongCreateView: React.FC<UseViewModelReturnType> = ({
  initialValues,
  onSubmit,
  isLoading,
}) => {
  const t = useTranslations()

  return (
    <RegionForm
      initialValues={initialValues}
      titleHeader1={t('createRigion')}
      titleHeader2={t('informationRegion')}
      disabled={isLoading}
      isLoading={isLoading}
      onSubmit={onSubmit}
    />
  )
}
export default RiongCreateView
