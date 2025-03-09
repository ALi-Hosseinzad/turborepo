import { Skeleton } from '@mui/material'
import {
  AttachIcon,
  ProfileGuidelinesText,
  ProfileUploader,
  useUndertakingViewModel,
} from '@/views/authorization/imports'
import {
  LayoutAuth,
  OstiganButton,
  useTranslations,
} from '@/views/profile/imports'

const UndertakingView: React.FC = () => {
  const t = useTranslations()
  const {
    handleSubmit,
    initialValues,
    validationSchema,
    isPending,
    isSuccessUndertakingGet,
    isVerify,
    guidelinesTextKeys,
    isVerifyPost,
  } = useUndertakingViewModel()

  return (
    <LayoutAuth
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      showWarning={isVerify || isVerifyPost}
      disabled={isVerify || isVerifyPost}
      isPending={Boolean(isPending)}
      textWarning={t('awaitingConfirmation')}
      titleLayout="fifthLevelDescriptionLegal"
    >
      {!isSuccessUndertakingGet ? (
        <div className="grid grid-cols-7 gap-2">
          <div className="col-span-4">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="100%"
              height={250}
            />
          </div>
          <div className="col-span-3  ">
            <div className="w-full flex justify-end -mt-12 mb-12">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="40%"
                height={40}
              />
            </div>

            <div className="relative border border-dashed border-trueGray-500 rounded-lg sm:w-full p-2">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="100%"
                height={190}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-2">
          <div className="col-span-4">
            <ProfileGuidelinesText guidelinesTextKeys={guidelinesTextKeys} />
          </div>
          <div className="col-span-3  ">
            <div className="w-full flex justify-end -mt-16 mb-12">
              <a
                href="/documents/UndertakingFile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <OstiganButton
                  className="mt-6"
                  variant="contained"
                  type="button"
                >
                  {t('downloadUndertaking')}
                </OstiganButton>
              </a>
            </div>

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

export default UndertakingView
