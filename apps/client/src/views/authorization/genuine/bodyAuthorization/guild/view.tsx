import { Skeleton } from '@mui/material'
import { SkeletonLayout } from '@/views/authorization/component/skeletonLayout'
import type { GuildInformationPropsType } from '../../imports'
import {
  AttachIcon,
  FormikTextField,
  FormikUploader,
  LayoutAuth,
  UseGuildInformationViewModel,
  useTranslations,
} from '../../imports'

const GuildInformationView = (props: GuildInformationPropsType) => {
  const { deactivate, TextDeactivate, TextActivate } = props
  const t = useTranslations()

  const {
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
    dataGuildGet,
    isSuccessGuild,
    isVerify,
    handleDeactivate,
    isLoadingGuildGet,
    activeLading,
  } = UseGuildInformationViewModel()

  return (
    <LayoutAuth
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      showWarning={isVerify}
      textWarning={dataGuildGet?.status_label}
      isPending={Boolean(isPending)}
      disabled={dataGuildGet?.is_guild}
      titleLayout="guildInformation"
      deactivateBtn={deactivate}
      TextDeactivateBtn={dataGuildGet?.is_guild ? TextDeactivate : TextActivate}
      handleDeactivate={handleDeactivate}
      isLoading={activeLading || isSuccessGuild || isLoadingGuildGet}
    >
      {activeLading || isSuccessGuild || isLoadingGuildGet ? (
        <SkeletonLayout
          isLoading={activeLading || isSuccessGuild || isLoadingGuildGet}
        >
          <div className="flex flex-col sm:flex-row w-full">
            <div className="flex flex-col basis-full w-full sm:basis-1/2 mt-0 gap-4">
              {[0, 1].map((_item, index) => (
                <Skeleton
                  key={index}
                  animation="wave"
                  width="100%"
                  height={80}
                />
              ))}
            </div>
            <div
              className="flex flex-col
           items-start basis-full sm:basis-1/2 sm:!mx-3 mt-7 md:-mt-14"
            >
              <Skeleton animation="wave" width="10%" height={30} />

              <Skeleton variant="rectangular" width="100%" height={200} />
            </div>
          </div>
        </SkeletonLayout>
      ) : (
        <div className="flex flex-col justify-center items-start gap-2 py-4  md:flex-row bg-white  ">
          <div className="basis-full w-full sm:basis-2/5 flex flex-col justify-start items-start  md:pr-4">
            <div className="w-full pt-1 pb-4">
              <FormikTextField
                name="taxCode"
                type="text"
                title={t('taxCode')}
                placeholder={`${t('example')} : 00222222222`}
                size="small"
                disabled={isVerify || dataGuildGet?.is_guild}
                classnametitle="!text-lg w-full	!font-medium !leading-9"
                // disabled={true}
              />
            </div>

            <div className="w-full pt-1 pb-4">
              <FormikTextField
                name="guildCode"
                type="text"
                title={t('guildCode')}
                placeholder={`${t('example')} : 00222222222`}
                size="small"
                disabled={isVerify || dataGuildGet?.is_guild}
                classnametitle="!text-lg	!font-medium !leading-9"
                // disabled={true}
              />
            </div>
          </div>

          <div className="basis-full w-full sm:basis-3/5 flex flex-col justify-start items-start overflow-hidden  md:-mt-6 mdp-0  md:pr-4">
            <div className="flex flex-col  border border-solid border-trueGray-500 rounded-md ">
              <div className="flex flex-col-reverse sm:flex-row  sm:h-60 gap-4 justify-start items-center  w-full  overflow-hidden">
                <div className="flex basis-1/2 !h-[240px] ">
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
                <div className="flex flex-col basis-1/2  w-full">
                  <div className="relative  rounded-lg  sm:w-full sm:px-4 lg:px-8">
                    <FormikUploader
                      name="guildImage"
                      wrapperClass="col-span-4"
                      uploadAreaClass="!h-[213px]"
                      disabled={isVerify || dataGuildGet?.is_guild}
                      placeholder={
                        <div className="flex flex-col gap-y-5 text-trueGray-700 text-sm justify-center items-center m-auto h-[213px]">
                          <p className="flex gap-2">
                            <AttachIcon color="#555" />
                          </p>
                          <span className="text-center text-green-300">
                            {t('businessLicenseImage')}
                          </span>
                        </div>
                      }
                      onloadHandler={() => {
                        //
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutAuth>
  )
}

export default GuildInformationView
