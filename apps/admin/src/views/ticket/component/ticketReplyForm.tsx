'use client'

import {
  AttachIcon,
  FormikTextEditor,
  FormikUploader,
  FormLayout, // type TicketReplyFormPropsType,
  useTranslations,
} from '../imports'

const TicketReplyForm = (props: any): JSX.Element => {
  const t = useTranslations()
  const { initialValues, validationSchema, onSubmitTicketReply } = props

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      dontShowCancelBtn
      onSubmit={onSubmitTicketReply}
    >
      <div className="grid grid-cols-12 gap-x-5 w-full">
        <FormikTextEditor
          placeholder={`${t('description')}...`}
          name="description"
          className="col-span-8"
        />
        <FormikUploader
          name="attachment"
          wrapperClass="col-span-4"
          uploadAreaClass="h-[240px]"
          placeholder={
            <div className="flex flex-col gap-y-5 text-trueGray-700 text-sm justify-center m-auto h-[240px]">
              <p className="flex gap-2">
                <AttachIcon color="#555" />
                {t('attachReciept')}
              </p>
              <span className="text-center">{t('limitationAttachment')}</span>
            </div>
          }
          onloadHandler={() => {
            //
          }}
        />
      </div>
    </FormLayout>
  )
}

export default TicketReplyForm
