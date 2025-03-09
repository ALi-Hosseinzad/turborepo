import {
  ArrowToSideRightIcon,
  FormikTextEditor,
  FormikUploader,
  FormWrapper,
  Image,
  OrderInformationGrid,
  OstiganButton,
  UploadIcon,
  useRouter,
  useTranslations,
} from '../import'

export default function OnlinePaymentDetail(props): JSX.Element {
  const t = useTranslations()
  const router = useRouter()
  const { initialValues, validationSchema, onSubmit, orderDetailData } = props
  const { onlinePaymentFirstPart, onlinePaymentSecondPart, orderHeader } =
    orderDetailData
  const serviceForm = onlinePaymentFirstPart.filter(
    (item) => item.translate == 'onlinePaymentHasFormInputs',
  )[0]?.value

  return (
    <div className="flex flex-col gap-1">
      {orderDetailData ? (
        <div className="flex flex-col gap-4">
          <div className="w-full  mb-8 text-xl font-semibold">
            {orderHeader?.title} / {orderHeader?.userName}
          </div>

          <div className="bg-white rounded-s-md px-8 pb-9">
            <div className="w-full flex justify-between py-8 ">
              <span className="text-lg">{t('orderInformation')} </span>
              <span>
                <ArrowToSideRightIcon
                  className="rotate-180 cursor-pointer"
                  onClick={() => {
                    router.push('order')
                  }}
                />
              </span>
            </div>
            <div className="grid grid-cols-12 gap-8 bg-white">
              <div className="relative col-span-3 h-44">
                <Image src={orderHeader?.image} fill alt="orderDetailData" />
              </div>
              <div className="grid grid-cols-2 gap-4 col-span-8">
                <div className="flex flex-col col-span-1 gap-2">
                  {onlinePaymentFirstPart?.map((item) => {
                    return item.translate !== 'onlinePaymentHasFormInputs' ? (
                      <OrderInformationGrid
                        key={Math.random()}
                        issue={item.translate}
                        description={item.value}
                      />
                    ) : null
                  })}
                </div>
                <div className="flex flex-col col-span-1 gap-2">
                  {serviceForm?.map((item) => {
                    return (
                      <div className="flex gap-2">
                        <div className="!font-bold title-lg">
                          {item?.form_input?.label}:
                        </div>
                        <div className="text-lg">{item?.value}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-s-md p-8">
            <div className="w-full text-2xl"> {t('paymentInformation')} </div>
            <div className="grid grid-cols-2 gap-4 pt-6">
              {onlinePaymentSecondPart.map((item) => (
                <OrderInformationGrid
                  key={Math.random()}
                  issue={item.translate}
                  description={item.value}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-s-md p-8">
            <div className="w-full text-lg">{t('description')} </div>
            <FormWrapper
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <div className="grid grid-rows-2 grid-cols-12 grid-flow-row gap-4 pt-6">
                <div className="col-span-9 font-bold text-xl	relative">
                  <FormikTextEditor
                    name="description"
                    placeholder={t('description')}
                  />
                  <div className=" ">
                    <span className="absolute bottom-0 left-1 m-2">
                      <OstiganButton type="submit" variant="contained">
                        {t('accept')}
                      </OstiganButton>
                    </span>
                  </div>
                </div>

                <div className="col-span-3 mt-3 text-xl truncate">
                  <FormikUploader
                    attachIcon={<UploadIcon />}
                    name="attachments"
                    isPositionCenter
                    multiple
                    isColumn
                    limitationFileSizeText="25"
                    errorCallback={() => {
                      // TODO
                    }}
                  />
                </div>
              </div>
            </FormWrapper>
          </div>
        </div>
      ) : null}
    </div>
  )
}
