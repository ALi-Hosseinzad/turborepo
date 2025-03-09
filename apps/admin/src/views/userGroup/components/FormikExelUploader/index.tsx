import {
  FormikUploader,
  FormLayout,
  Loading,
  OstiganMenuIcon,
  useFormikExelUploader,
  useTranslations,
} from '../../imports'

const UserGroupForm = (): JSX.Element => {
  const t = useTranslations()
  const { validationSchema, mutateAsync, isLoadingSubmit } =
    useFormikExelUploader()

  return (
    <div className="mt-7">
      <FormLayout
        initialValues={{ file: '' }}
        titleHeader1={t('uploadFile')}
        titleHeader2={t('uploadExcelFile')}
        validationSchema={validationSchema}
        onSubmit={mutateAsync}
      >
        {() => (
          <div className="w-full min-h-">
            <Loading isLoading={isLoadingSubmit} />
            <FormikUploader
              border="border border-primary-default flex-col"
              wrapperClass="flex flex-col justify-end items-stretch "
              uploadAreaClass="h-[52px] min-h-14 flex justify-center"
              result="name"
              placeholder={
                <div className="flex gap-3 justify-center items-center p-3">
                  <OstiganMenuIcon />
                  <span className="text-lg font-bold text-primary-default">
                    {t('uploadYourFile')}
                  </span>
                </div>
              }
              name="file"
              placeholderClass="text-red-500"
            />
          </div>
        )}
      </FormLayout>
    </div>
  )
}

export default UserGroupForm
