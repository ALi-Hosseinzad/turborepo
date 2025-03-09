import {
  FormLayout,
  Loading,
  UserCreateForm,
  useTranslations,
} from '../imports'
import type { UseUserCreateViewModelReturnType } from '../imports'

export const UserCreateView: React.FC<UseUserCreateViewModelReturnType> = ({
  initialValues,
  validationSchema,
  isPendingPostData,
  onSubmit,
}) => {
  const t = useTranslations()

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={t('addNewUser')}
      titleHeader2={t('userInformation')}
      isLoading={isPendingPostData}
      onSubmit={onSubmit}
    >
      <UserCreateForm />
      <Loading isLoading={isPendingPostData} />
    </FormLayout>
  )
}
