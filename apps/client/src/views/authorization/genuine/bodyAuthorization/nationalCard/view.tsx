import { Skeleton } from '@mui/material'
import { SkeletonLayout } from '@/views/authorization/component/skeletonLayout'
import type { AuthLevelFormPropsType } from '../../imports'
import {
  AttachIcon,
  FormikDatePicker,
  FormikSelect,
  FormikTextField,
  FormikUploader,
  LayoutAuth,
  UseNationalCardViewModel,
  useTranslations,
} from '../../imports'

const AuthLevelFormView = (props: AuthLevelFormPropsType) => {
  const { disableAuth } = props
  const t = useTranslations()
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    itemList,
    isPending,
    dataNationalCardGet,
    isSuccessNationalCard,
    isVerify,
    momentBirthDate,
  } = UseNationalCardViewModel()
  return (
    <LayoutAuth
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      showWarning={isVerify}
      textWarning={dataNationalCardGet?.is_verify_label}
      isPending={Boolean(isPending)}
      titleLayout="nationalInf"
      showOstiganButton={!disableAuth}
      isLoading={!isSuccessNationalCard}
    >
      {!isSuccessNationalCard ? (
        <SkeletonLayout isLoading={!isSuccessNationalCard}>
          <div className="flex flex-col sm:flex-row w-full">
            <div className="flex flex-col basis-full w-full sm:basis-1/2 mt-2 gap-4">
              {[0, 1, 2].map((_item, index) => (
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
           items-start basis-full sm:basis-1/2 sm:!mx-3 mt-5"
            >
              <Skeleton animation="wave" width="10%" height={30} />

              <Skeleton variant="rectangular" width="100%" height={200} />
            </div>
          </div>
        </SkeletonLayout>
      ) : (
        <div className="flex flex-col sm:flex-row justify-start items-start w-full">
          <div className="flex flex-col basis-full w-full sm:basis-1/2  gap-4">
            <div className="basis-full sm:basis-1/4">
              <FormikTextField
                name="nationalNumber"
                type="text"
                title={t('nationalNumber')}
                placeholder={`${t('example')} : 00222222222`}
                size="small"
                disabled={disableAuth ? disableAuth : isVerify}
                classnametitle="!text-lg !font-medium !leading-9 w-full"
              />
            </div>
            <div className="basis-full sm:basis-1/4 overflow-hidden">
              {dataNationalCardGet ? (
                <FormikDatePicker
                  classnametitle="!text-lg !font-medium !leading-9"
                  name="birthDate"
                  title={t('birthDate')}
                  placeholder={`${t('example')} : 1376/01/01`}
                  disabled={disableAuth ? disableAuth : isVerify}
                  defaultValue={momentBirthDate}
                />
              ) : null}
            </div>
            <div className="basis-1/2">
              {itemList ? (
                <FormikSelect
                  classnametitle="!text-lg !font-medium !leading-9"
                  name="gender"
                  disabled={disableAuth ? disableAuth : isVerify}
                  optionValue="value"
                  optionLabel="label"
                  selectLabel={t('gender')}
                  placeholder={t('gender')}
                  listOptions={itemList}
                />
              ) : null}
            </div>
          </div>
          <div className="flex basis-full sm:basis-1/2 mt-8 sm:mt-0">
            <div className="flex flex-col justify-start items-start p-0 sm:pr-4">
              <div className="flex flex-col content-center items-start">
                <label className="title-sm text-darkTypo pb-1">
                  <span
                    className={`${isVerify ? 'text-gray-300 ' : ''}!text-lg !font-medium !leading-9`}
                  >
                    {t('nationalCardImage')}
                  </span>
                </label>
                <div className="text-normal-sm flex flex-col-reverse lg:flex-row  gap-4 border rounded-xl lg:p-5 p-5 h-full">
                  <ul className="list-disc flex flex-col items-start justify-start lg:w-2/5 gap-2 sm:pr-5">
                    <p className="-mr-4 font-bold">{t('gideAttach')}</p>
                    <li>{t('nationalCardText1')}</li>
                    <li>{t('nationalCardText2')}</li>
                  </ul>
                  <div className="relative border border-dashed border-trueGray-500 rounded-lg lg:w-3/5 p-2">
                    <FormikUploader
                      name="nationalCardImg"
                      wrapperClass="col-span-4"
                      uploadAreaClass="!h-[240px]"
                      disabled={disableAuth ? disableAuth : isVerify}
                      placeholder={
                        <div className="flex flex-col gap-y-5 text-trueGray-700 text-sm justify-center m-auto h-[240px]">
                          <p className="flex gap-2">
                            <AttachIcon color="#555" />
                            {t('attachReciept')}
                          </p>
                          <span className="text-center">
                            {t('limitationAttachment')}
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

export default AuthLevelFormView
