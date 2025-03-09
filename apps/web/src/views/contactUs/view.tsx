'use client'

import { t } from '../terms/imports'
import { OstiganButton } from 'ui/components/elements/button/ostiganButton'
import { FormikTextField } from 'ui/components/elements/input/formikTextField'
import { FormWrapper } from 'ui/components/formik/formWrapper'
import { createMarkup } from './component/createMarkup'
import { React } from './imports'

const ContactUsView = (props: any): JSX.Element => {
  const { dataContactUs, initialValues, validationSchema, onSubmit } = props
  return (
    <>
      <h2 className="mb-8">{t('contactUs')}</h2>
      <div className="flex flex-row w-full">
        <div className="basis-1/2 flex flex-col items-start  w-full">
          <div
            className="w-full "
            dangerouslySetInnerHTML={createMarkup(
              dataContactUs?.data?.value.map,
            )}
          />

          <div className=" flex flex-row flex-wrap justify-start mt-8">
            {dataContactUs?.data?.value.content.map((item) => (
              <div className="w-full  " key={Math.random()}>
                <span className="text-normal-xl text-left">{item?.text}</span>:
                <span className=""> {item?.icon}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/2">
          <div className="title-2xl ">{t('contactUs')}</div>
          <FormWrapper
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <div className="flex mt-3 flex-col flex-wrap">
              <div className="basis-full">
                <div className="mb-2">
                  <label className="title-lg">{t('surname')}</label>
                </div>
                <FormikTextField
                  className="!mb-5"
                  type="firstName"
                  title={t('firstName')}
                  name="firstName"
                  placeholder={t('name')}
                />
              </div>

              <div className="basis-full">
                <div className="m-2 bg-orange-500">
                  <label className="title-lg mb-2">{t('email')}</label>
                </div>
                <FormikTextField
                  type="email"
                  title={t('email')}
                  name="email"
                  placeholder={t('email')}
                  className="!mb-7"
                />
              </div>

              <div className="basis-full">
                <div className="mb-2">
                  <label className="title-lg mb-2">{t('messageText')}</label>
                </div>
                <FormikTextField
                  type="text"
                  title={t('text')}
                  name="text"
                  placeholder={t('text')}
                  multiline
                  minRows={6}
                  maxRows={7}
                  className="!mb-7"
                />
              </div>
              <div className="basis-full">
                <OstiganButton type="submit" variant="contained" fullWidth>
                  {t('registerComment')}
                </OstiganButton>
              </div>
            </div>
          </FormWrapper>
        </div>
      </div>
    </>
  )
}

export default ContactUsView
