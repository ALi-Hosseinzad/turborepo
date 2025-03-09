'use client'

import {
  type CreatePropsType,
  type FC,
  PackageForm,
  useTranslations,
} from '../imports'

export const PackageCreateView: FC<CreatePropsType> = (props) => {
  const t = useTranslations()
  const { initialValues, onSubmit, isLoadingSubmit } = props

  return (
    <PackageForm
      initialValues={initialValues}
      titleHeader1={t('addNewPackage')}
      titleHeader2={t('packageInfo')}
      isLoadingSubmit={isLoadingSubmit}
      onSubmit={onSubmit}
    />
  )
}
