'use client'

import { ROLE_URL } from 'constants/endPoints'
import type { SubjectFormViewType } from '../../imports'
import {
  CustomFormikSelect,
  FormikTextField,
  FormikUploader,
  FormLayout,
  Loading,
  useSubjectFormViewModel,
  useTranslations,
} from '../../imports'

const SubjectFormView = (props: SubjectFormViewType): JSX.Element => {
  const t = useTranslations()
  const { isLoading, initialValues, onSubmit, titleHeader1, titleHeader2 } =
    props
  const { validationSchema } = useSubjectFormViewModel()

  return (
    <>
      <Loading isLoading={isLoading} />
      <FormLayout
        initialValues={initialValues}
        validationSchema={validationSchema}
        titleHeader1={titleHeader1}
        titleHeader2={titleHeader2}
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 gap-11 w-full">
          <FormikTextField
            name="title"
            title={t('firstName')}
            placeholder={`${t('example')}:saleagent`}
            className="w-full"
          />
          <CustomFormikSelect
            label={t('chooseRole')}
            name="role_ids"
            placeholder={t('chooseForm')}
            queryKey="roles"
            url={ROLE_URL}
            optionLabel="name"
            optionValue="id"
            multiple
          />
          <FormikUploader
            isPositionCenter
            title={t('flag')}
            limitationFileSizeText="25"
            typeUploader="typeInputUploader"
            name="icon"
          />
        </div>
      </FormLayout>
    </>
  )
}

export default SubjectFormView
