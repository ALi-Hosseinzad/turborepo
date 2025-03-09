import {
  DeleteModal,
  FormikSelectSubjects,
  FormWrapper,
  useState,
  useTranslations,
  yup,
} from '../imports'

const TicketSubject = ({ onSubmitSubject, subject }): JSX.Element => {
  const t = useTranslations()
  const validationSchema = yup.object({})
  const [open, setOpen] = useState(false)

  const onSuccess = (body): void => {
    setOpen(false)
    onSubmitSubject(body)
  }

  return (
    <FormWrapper
      initialValues={{ subject_id: { id: subject?.id, title: subject?.title } }}
      validationSchema={validationSchema}
      onSubmit={onSubmitSubject}
    >
      {(formikProps) => (
        <div className="flex flex-row items-center border-t-trueGray-450 border-t-2 py-7 w-full">
          <span className="ml-3 whitespace-nowrap">
            {t('changeAnsweringPart')}:
          </span>
          <FormikSelectSubjects
            name="subject_id"
            onChange={() => {
              setOpen(true)
            }}
          />
          <DeleteModal
            headerTitle={t('changeAnsweringPart')}
            rejectTextButton={t('cancel')}
            acceptTextButton={t('confirm')}
            handleClose={() => {
              setOpen(false)
            }}
            styleTypeSuccessBtn="success"
            open={open}
            isLoading={false}
            onSuccess={() => {
              onSuccess(formikProps.values.subject_id)
            }}
          >
            <div className="flex justify-center items-center p-8">
              {t('areYouSure')}
            </div>
          </DeleteModal>
        </div>
      )}
    </FormWrapper>
  )
}

export default TicketSubject
