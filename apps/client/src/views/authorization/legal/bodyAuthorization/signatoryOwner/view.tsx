import { Skeleton } from '@mui/material'
import {
  PlusIcon,
  ProfileUploader,
  SubmitHandler,
  UploadIcon,
  useSignatoryOwnerViewModel,
} from '@/views/authorization/imports'
import { LayoutAuth, useTranslations } from '@/views/profile/imports'

const SignatoryOwnerView: React.FC = () => {
  const t = useTranslations()
  const {
    mergedInitialValues,
    staticValidationSchema,
    isSignatoryDataSuccess,
    isVerify,
    isVerifyPost,
    signatoryData,
    showProfileUploader,
    handleAddProfileUploader,
    getStatusIcon,
  } = useSignatoryOwnerViewModel()

  const { handleSubmit } = SubmitHandler()

  return (
    <LayoutAuth
      initialValues={mergedInitialValues}
      validationSchema={staticValidationSchema}
      handleSubmit={handleSubmit}
      showWarning={isVerify || isVerifyPost}
      disabled={isVerify || isVerifyPost}
      titleLayout="fourthLevelDescriptionLegal"
    >
      {!isSignatoryDataSuccess ? (
        <div className="grid grid-cols-8 gap-2">
          {signatoryData?.data?.map((item: any) => (
            <div
              key={item.id}
              className={`col-span-4 rounded-lg bg-[#F5F5F5] ${
                item?.status === 'rejected' ? 'border-2 border-red-500' : ''
              }`}
            >
              <div className="flex items-center m-2 text-sm text-normal-sm">
                {getStatusIcon(item?.status, item?.status_label)}
              </div>

              <div className="flex flex-row">
                <div className="basis-1/2 m-2 bg-white">
                  <ProfileUploader
                    name={`national_card_front_path_${item.id}`}
                    isVerify={
                      item?.status === 'accepted' || item?.status === 'pending'
                    }
                    icon={<UploadIcon />}
                    textIcon={t('nationalCodeFront')}
                  />
                </div>
                <div className="basis-1/2 m-2 bg-white">
                  <ProfileUploader
                    name={`national_card_back_path_${item.id}`}
                    isVerify={
                      item?.status === 'accepted' || item?.status === 'pending'
                    }
                    icon={<UploadIcon />}
                    textIcon={t('nationalCodeBack')}
                  />
                </div>
              </div>
            </div>
          ))}

          {!showProfileUploader ? (
            <div className="col-span-4 bg-[#F5F5F5] rounded-lg">
              <div className="flex flex-row overflow-hidden	">
                <div className="basis-1/2 m-2 max-w-[45%] bg-white">
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={250}
                  />
                </div>
                <div className="basis-1/2 m-2 max-w-[50%]	 bg-white">
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={250}
                  />
                </div>
              </div>
            </div>
          ) : null}

          <div className="col-span-4 bg-[#F5F5F5] cursor-pointer">
            <div
              className="flex flex-col justify-center items-center border-2 border-dashed rounded-lg h-56 m-2 bg-white"
              aria-hidden="true"
              onClick={() => handleAddProfileUploader((prev) => !prev)}
            >
              <p className="flex gap-2">
                <PlusIcon className="w-6 h-6" color="gray" />
              </p>
              <span className="text-center text-green-300">
                {t('addNationalCode')}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-8 gap-2">
          {signatoryData?.data?.map((item: any) => (
            <div
              key={item.id}
              className={`col-span-4 rounded-lg bg-[#F5F5F5] ${
                item?.status === 'rejected' ? 'border-2 border-red-500' : ''
              }`}
            >
              <div className="flex items-center m-2 text-sm text-normal-sm">
                {getStatusIcon(item?.status, item?.status_label)}
              </div>

              <div className="flex flex-row">
                <div className="basis-1/2 m-2 bg-white">
                  <ProfileUploader
                    name={`national_card_front_path_${item.id}`}
                    isVerify={
                      item?.status === 'accepted' || item?.status === 'pending'
                    }
                    icon={<UploadIcon />}
                    textIcon={t('nationalCodeFront')}
                  />
                </div>
                <div className="basis-1/2 m-2 bg-white">
                  <ProfileUploader
                    name={`national_card_back_path_${item.id}`}
                    isVerify={
                      item?.status === 'accepted' || item?.status === 'pending'
                    }
                    icon={<UploadIcon />}
                    textIcon={t('nationalCodeBack')}
                  />
                </div>
              </div>
            </div>
          ))}

          {showProfileUploader ? (
            <div className="col-span-4 bg-[#F5F5F5] rounded-lg">
              <div className="flex flex-row overflow-hidden	">
                <div className="basis-1/2 m-2 max-w-[45%] bg-white">
                  <ProfileUploader
                    name="nationalCardFront"
                    isVerify={isVerify}
                    icon={<UploadIcon />}
                    textIcon={t('nationalCodeFront')}
                  />
                </div>
                <div className="basis-1/2 m-2 max-w-[50%]	 bg-white">
                  <ProfileUploader
                    name="nationalCardBack"
                    isVerify={isVerify}
                    icon={<UploadIcon />}
                    textIcon={t('nationalCodeBack')}
                  />
                </div>
              </div>
            </div>
          ) : null}

          <div className="col-span-4 bg-[#F5F5F5] cursor-pointer">
            <div
              className="flex flex-col justify-center items-center border-2 border-dashed rounded-lg h-56 m-2 bg-white"
              aria-hidden="true"
              onClick={() => handleAddProfileUploader((prev) => !prev)}
            >
              <p className="flex gap-2">
                <PlusIcon className="w-6 h-6" color="gray" />
              </p>
              <span className="text-center text-green-300">
                {t('addNationalCode')}
              </span>
            </div>
          </div>
        </div>
      )}
    </LayoutAuth>
  )
}

export default SignatoryOwnerView
