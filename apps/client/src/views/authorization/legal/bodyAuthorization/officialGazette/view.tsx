import { Skeleton } from '@mui/material'
import { LayoutAuth, useTranslations } from '@/views/profile/imports'
import ProfileGuidelinesText from '../../component/profileGuidelinesText'
import ProfileUploader from '../../component/profileUploader'
import { AttachIcon } from 'ui/components/icons'

const ProfileView: React.FC<any> = (props) => {
  const t = useTranslations()

  const {
    dataProfileGet,
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
    isSuccessProfileGet,
    isVerify,
    guidelinesTextKeys,
  } = props

  return (
    <LayoutAuth
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      showWarning={isVerify}
      disabled={isVerify}
      isPending={Boolean(isPending)}
      textWarning={dataProfileGet?.status_label}
      titleLayout="secondLevelDescriptionLegal"
    >
      {!isSuccessProfileGet ? (
        <div className="grid grid-cols-7 gap-2">
          <div className="col-span-4">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="100%"
              height={250}
            />
          </div>
          <div className="col-span-3">
            <div className="relative border border-dashed border-trueGray-500 rounded-lg sm:w-full p-2">
              <Skeleton
                className="rounded-sm"
                animation="wave"
                width="100%"
                height={230}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-2">
          <div className="col-span-4">
            <ProfileGuidelinesText guidelinesTextKeys={guidelinesTextKeys} />
          </div>
          <div className="col-span-3">
            <div className="relative border border-dashed border-trueGray-500 rounded-lg sm:w-full p-2">
              <ProfileUploader
                name="file"
                isVerify={isVerify}
                icon={<AttachIcon color="#555" />}
                textIcon={t('uploadImg')}
              />
            </div>
          </div>
        </div>
      )}
    </LayoutAuth>
  )
}

export default ProfileView
