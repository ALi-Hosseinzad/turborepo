import { Skeleton } from '@mui/material'
import { SkeletonLayout } from '@/views/authorization/component/skeletonLayout'
import { FormikTextField, LayoutAuth, useTranslations } from '../../imports'
import { UsePersonalInfoViewModel } from './viewModel'

export const PersonalInfoView = (): JSX.Element => {
  const t = useTranslations()
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    isdisabled,
    isLoadingUser,
  } = UsePersonalInfoViewModel()

  return (
    <LayoutAuth
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      disabled
      titleLayout="personalInfo"
      isLoading={isLoadingUser}
    >
      {isLoadingUser ? (
        <SkeletonLayout isLoading={isLoadingUser}>
          <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 ">
            {[0, 1, 2, 3].map((_item, _index) => (
              <Skeleton animation="wave" width="100%" height={60} />
            ))}
          </div>
        </SkeletonLayout>
      ) : (
        <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 ">
          <div>
            <FormikTextField
              name="firstname"
              type="text"
              title={t('firstName')}
              size="small"
              placeholder={`${t('example')} : ${t('firstname')}`}
              disabled={isdisabled}
              classnametitle="text-right text-sm not-italic font-medium"
            />
          </div>
          <div>
            <FormikTextField
              name="lastname"
              type="text"
              title={t('lastName')}
              placeholder={`${t('example')} : ${t('lastname')}`}
              size="small"
              disabled={isdisabled}
              classnametitle="text-right text-sm not-italic font-medium"
            />
          </div>
          <div>
            <FormikTextField
              name="phone"
              type="text"
              title={t('phone')}
              placeholder={`${t('example')} : 09128882299`}
              size="small"
              disabled={isdisabled}
              classnametitle="text-right text-sm not-italic font-medium"
            />
          </div>
          <div>
            <FormikTextField
              name="email"
              type="text"
              title={t('email')}
              placeholder={`${t('example')} : ${t('email')}`}
              size="small"
              disabled={isdisabled}
              classnametitle="text-right text-sm not-italic font-medium !mb-2"
            />
          </div>
        </div>
      )}
    </LayoutAuth>
  )
}
