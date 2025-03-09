'use client'

// import type { NotificationFormViewPropsType } from '../../imports'
import {
  CustomFormikSelect,
  FormikCheckbox,
  FormikTextEditor,
  FormikTextField,
  FormikUploader,
  FormLayout,
  GROUP_URL,
  Loading,
  UploadIcon,
  useParams,
  useTranslations,
} from '../../imports'

const NotificationFormView = ({
  isLoading,
  validationSchema,
  initialValues,
  onSubmit,
  titleHeader1,
  titleHeader2,
  checkboxClassName,
}: any): JSX.Element => {
  const t = useTranslations()
  const { id } = useParams()
  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      onSubmit={onSubmit}
    >
      <Loading isLoading={isLoading} />
      <div className="grid grid-cols-2 gap-11 w-full">
        <FormikTextField
          name="title"
          title={t('notificationTitle')}
          placeholder={t('notificationTitle')}
          className="w-full"
        />
        <CustomFormikSelect
          name="group_id"
          label={t('userGroup')}
          placeholder={t('userGroup')}
          queryKey="change-subject"
          url={GROUP_URL}
          optionLabel="name"
          optionValue="id"
          disabled={id !== undefined}
        />
        <FormikTextEditor
          name="description"
          placeholder={t('description')}
          textFeildLabel={t('answer')}
        />
        <FormikUploader
          attachIcon={<UploadIcon />}
          name="attachment"
          isPositionCenter
          title={t('uploadImg')}
          limitationFileSizeText="25"
        />
        <div className="grid grid-flow-col gap-6">
          <FormikCheckbox
            name="need_email"
            title="need_email"
            label="Email"
            checkboxClassName={`${checkboxClassName}`}
          />
          <FormikCheckbox
            name="need_sms"
            title="need_sms"
            label="SMS"
            checkboxClassName={checkboxClassName}
          />
          <FormikCheckbox
            name="need_push"
            title="need_push"
            label="Push Notification"
            checkboxClassName={checkboxClassName}
          />
        </div>
      </div>
    </FormLayout>
  )
}

export default NotificationFormView
