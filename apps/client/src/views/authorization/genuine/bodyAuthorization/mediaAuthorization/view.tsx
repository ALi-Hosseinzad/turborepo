import { Skeleton } from '@mui/material'
import { SkeletonLayout } from '@/views/authorization/component/skeletonLayout'
import {
  AttachIcon,
  FormikUploader,
  LayoutAuth,
  TextUndertakingMedia,
  UseMediaAuthorizationViewModel,
  useTranslations,
} from '../../imports'

const MediaAuthorizationView = () => {
  const t = useTranslations()
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
    dataMediaGet,
    isSuccessMedia,
    isVerify,
  } = UseMediaAuthorizationViewModel()

  return (
    <LayoutAuth
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      showWarning={isVerify}
      textWarning={dataMediaGet?.status_label}
      isPending={Boolean(isPending)}
      titleLayout="auth"
      handleDeactivate={undefined}
    >
      {!isSuccessMedia ? (
        <SkeletonLayout isLoading={!isSuccessMedia}>
          <div className="flex flex-col p-6  bg-[#FAFAFA]">
            <div className="w-full  !text-lg		!font-semibold	 !leading-9 text-[#01291F]  ">
              <Skeleton variant="rectangular" width="40%" height={15} />
            </div>
            <div className="flex flex-col sm:flex-row  mt-4 sm:h-60 gap-4 justify-start items-center w-full">
              <div className="flex flex-col w-full sm:basis-1/3  ">
                <Skeleton variant="rectangular" width="100%" height={220} />
              </div>
              <div className="flex w-full basis-full sm:basis-2/3 !h-[220px]  ">
                <Skeleton variant="rectangular" width="100%" height={220} />
              </div>
            </div>
          </div>
        </SkeletonLayout>
      ) : (
        <div className="flex flex-col p-6  bg-[#FAFAFA]">
          <div className="w-full  !text-lg		!font-semibold	 !leading-9 text-[#01291F]  ">
            {t('nationalCardInformation')}
          </div>
          <div className="flex flex-col sm:flex-row  mt-4 sm:h-60 gap-4 justify-start items-center w-full">
            <div className="flex flex-col w-full sm:basis-1/3  gap-4">
              <div className="relative border border-dashed border-trueGray-500 rounded-lg sm:w-full  p-2">
                <FormikUploader
                  name="nationalCardImg"
                  wrapperClass="col-span-4"
                  uploadAreaClass="!h-[225px]"
                  disabled={isVerify}
                  placeholder={
                    <div className="flex flex-col gap-y-5 text-trueGray-700 text-sm justify-center items-center m-auto h-[225px]">
                      <p className="flex gap-2">
                        <AttachIcon color="#555" />
                      </p>
                      <span className="text-center text-green-300">
                        {t('uploadImg')}
                      </span>
                    </div>
                  }
                  onloadHandler={() => {
                    //
                  }}
                />
              </div>
            </div>
            <div className="flex basis-2/3 !h-[240px]  bg-white">
              <div className=" flex flex-col justify-start items-start   md:pr-4">
                <div className="flex flex-col content-start items-start ">
                  <div
                    className={`text-normal-sm flex sm:flex-row flex-col gap-4  lg:p-5 p-3 h-full `}
                  >
                    <ul className="list-disc flex flex-col items-start justify-start sm:w-full  gap-2 pr-5">
                      <p className="-mr-4 font-bold	">{t('gideAttach')}</p>
                      <li>{t('nationalCardText1')}</li>
                      <li>{t('nationalCardText2')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TextUndertakingMedia />
        </div>
      )}
    </LayoutAuth>
  )
}

export default MediaAuthorizationView
