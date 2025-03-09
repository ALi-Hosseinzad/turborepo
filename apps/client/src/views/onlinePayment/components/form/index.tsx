'use client'

import {
  FormWrapper,
  OnlinePaymentFormView,
  PreInvoice,
  useOnlinePaymentFormViewModel,
} from '../../imports'

export const OnlinePaymentForm = ({ formInfo }) => {
  const { initialValues, validationSchema, onSubmit, isPending, isSuccess } =
    useOnlinePaymentFormViewModel(formInfo)

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <div className="lg:grid lg:grid-cols-12 flex flex-col gap-2 pt-12">
            <div className="flex lg:flex-col sm:flex-row flex-col lg:gap-14 gap-4 col-span-6 w-full">
              <OnlinePaymentFormView
                inputsForm={formInfo?.form?.inputs}
                subscriptions={formInfo?.subscriptions}
                regions={formInfo?.regions}
                rangePrice={formInfo?.rangePrice}
              />
            </div>
            <div className="col-span-1 text-white">.</div>
            <div className="col-span-5 bg-white rounded-xl px-6 py-6 h-fit">
              <PreInvoice isPending={isPending} isSuccess={isSuccess} />
            </div>
          </div>
        )
      }}
    </FormWrapper>
  )
}
