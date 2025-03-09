import type { Key } from 'react'
import { Skeleton } from '@mui/material'
import type { ProfileViewPropsType } from '@/views/authorization/imports'
import {
  FormikTextField,
  LayoutAuth,
  useTranslations,
} from '@/views/authorization/imports'

const ProfileView: React.FC<ProfileViewPropsType> = (props) => {
  const {
    dataProfileGet,
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
    isSuccessProfileGet,
    isVerify,
    disableAuth,
  } = props
  const t = useTranslations()

  return (
    <LayoutAuth
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      showWarning={isVerify}
      disabled={isVerify || disableAuth}
      isPending={Boolean(isPending)}
      textWarning={dataProfileGet?.verify_profile_label}
      titleLayout="nationalInf"
    >
      {!isSuccessProfileGet ? (
        <div className="md:grid md:grid-cols-2 gap-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(
            (_item: any, index: Key | null | undefined) => (
              <Skeleton key={index} animation="wave" width="100%" height={80} />
            ),
          )}
          <div className="col-span-2">
            <Skeleton animation="wave" width="100%" height={80} />
          </div>
        </div>
      ) : (
        <div className="md:grid md:grid-cols-2 gap-4">
          <div>
            <FormikTextField
              name="companyName"
              disabled={isVerify || disableAuth}
              type="text"
              title={t('companyName')}
              placeholder={t('companyName')}
              size="small"
              classnametitle="!text-lg !font-medium !leading-9"
            />
          </div>
          <div>
            <FormikTextField
              name="economicCode"
              disabled={isVerify || disableAuth}
              type="text"
              title={t('economicCode')}
              placeholder={t('economicCode')}
              size="small"
              classnametitle="!text-lg !font-medium !leading-9"
            />
          </div>
          <div>
            <FormikTextField
              name="nationalCode"
              disabled={isVerify || disableAuth}
              type="text"
              title={t('nationalCode')}
              placeholder={t('nationalCode')}
              size="small"
              classnametitle="!text-lg !font-medium !leading-9"
            />
          </div>
          <div>
            <FormikTextField
              name="taxCode"
              disabled={isVerify || disableAuth}
              type="text"
              title={t('taxCode')}
              placeholder={t('taxCode')}
              size="small"
              classnametitle="!text-lg !font-medium !leading-9"
            />
          </div>
          <div>
            <FormikTextField
              name="registrationNumber"
              disabled={isVerify || disableAuth}
              type="text"
              title={t('registrationNumber')}
              placeholder={t('registrationNumber')}
              size="small"
              classnametitle="!text-lg !font-medium !leading-9"
            />
          </div>
          <div>
            <FormikTextField
              name="phone"
              disabled={isVerify || disableAuth}
              type="text"
              title={t('phone')}
              placeholder={`${t('example')} : 33668855-021 ${t('or')} 09125553388`}
              size="small"
              classnametitle="!text-lg !font-medium !leading-9"
            />
          </div>
          <div>
            <FormikTextField
              name="postalCode"
              disabled={isVerify || disableAuth}
              type="text"
              title={t('postalCode')}
              placeholder={`${t('example')} : 0453216789`}
              size="small"
              classnametitle="!text-lg !font-medium !leading-9"
            />
          </div>
          <div className="col-span-2">
            <FormikTextField
              name="address"
              disabled={isVerify || disableAuth}
              type="text"
              title={t('address')}
              placeholder={t('address')}
              size="small"
              classnametitle="!text-lg !font-medium !leading-9"
              multiline
              minRows={8}
              rows={8}
            />
          </div>
        </div>
      )}
    </LayoutAuth>
  )
}

export default ProfileView
