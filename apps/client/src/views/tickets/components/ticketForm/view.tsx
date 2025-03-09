import {
  AttachIcon,
  FormikSelect,
  FormikTextField,
  FormikUploader,
  FormWrapper,
  OstiganButton,
  useTranslations,
} from '../../imports'

const TicketFormView = ({
  initialValues,
  validationSchema,
  handleSubmit,
  isSuccess,
  isPending,
  priorityList,
}) => {
  const t = useTranslations()

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col bg-white gap-4">
        <FormikTextField
          name="title"
          title={t('title')}
          sizeInput="Large"
          placeholder={t('title')}
        />
        <FormikSelect
          name="importanceLevel"
          placeholder={t('importanceLevel')}
          selectLabel={t('importanceLevel')}
          listOptions={priorityList}
        />
        <FormikTextField
          name="message"
          title={t('descriptionMessage')}
          placeholder={t('title')}
          multiline
          rows={4}
        />
        <FormikUploader
          name="attachment"
          typeUploader="typeInputUploader"
          placeholder="ضمیمه کردن فایل"
          startAdornment={<AttachIcon />}
          showPreviewUploader="text"
          endAdornment={null}
        />
        <OstiganButton
          className="!mt-6 w-full"
          variant="contained"
          type="submit"
          disabled={isPending || isSuccess}
          isLoading={isPending || isSuccess}
        >
          {t('addNewTicket')}
        </OstiganButton>
      </div>
    </FormWrapper>
  )
}

export default TicketFormView
