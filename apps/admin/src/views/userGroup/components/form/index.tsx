'use client'

import {
  FormikExelUploader,
  FormikTextField,
  FormLayout,
  Loading,
  UsersList,
  useTranslations,
  useUserGroupFormViewModel,
} from '../../imports'

const UserGroupForm = (props: any): JSX.Element => {
  const { validationSchema } = useUserGroupFormViewModel()
  const t = useTranslations()
  const {
    onSubmit,
    initialValues,
    titleHeader1,
    titleHeader2,
    isLoading,
    isSuccess,
  } = props

  return (
    <div>
      <FormLayout
        initialValues={initialValues}
        titleHeader1={titleHeader1}
        titleHeader2={titleHeader2}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <div className="w-full">
            <Loading isLoading={isLoading} />
            <div className="grid grid-cols-2 gap-5 w-full">
              <FormikTextField
                name="name"
                title={t('name')}
                placeholder={t('name')}
                className="w-full"
              />
              <FormikTextField
                name="slug"
                title={t('slug')}
                placeholder={t('slug')}
                className="w-full"
              />
            </div>
            <UsersList formikProps={formikProps} isSuccessCreate={isSuccess} />
          </div>
        )}
      </FormLayout>
      <FormikExelUploader />
    </div>
  )
}

export default UserGroupForm
