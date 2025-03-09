'use client'

import type { FaqFormViewPropsType } from '../../imports'
import {
  CustomFormikSelect,
  FormikTextEditor,
  FormikTextField,
  FormLayout,
  Loading,
  SUBJECT_URL,
  useTranslations,
} from '../../imports'

const FaqFormView = ({
  isLoading,
  validationSchema,
  initialValues,
  onSubmit,
  titleHeader1,
  titleHeader2,
}: FaqFormViewPropsType): JSX.Element => {
  const t = useTranslations()

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-11 w-full">
        <Loading isLoading={isLoading} />
        <FormikTextField
          name="question"
          title={t('firstName')}
          placeholder={`${t('example')}:saleagent`}
          className="w-full"
        />
        <CustomFormikSelect
          name="subject_id"
          label={t('chooseAnsweringPart')}
          placeholder={t('chooseAnsweringPart')}
          queryKey="change-subject"
          url={SUBJECT_URL}
          optionLabel="title"
          optionValue="id"
        />
        <FormikTextEditor
          name="answer"
          placeholder={t('description')}
          textFeildLabel={t('answer')}
        />
      </div>
    </FormLayout>
  )
}

export default FaqFormView
