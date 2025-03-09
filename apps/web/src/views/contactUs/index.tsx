'use client'

import { ContactUsView, React, useContactUsViewModel } from './imports'

const ContactUs = (): JSX.Element => {
  const { dataContactUs, initialValues, validationSchema, onSubmit } =
    useContactUsViewModel()

  return (
    <ContactUsView
      initialValues={initialValues}
      validationSchema={validationSchema}
      dataContactUs={dataContactUs}
      onSubmit={onSubmit}
    />
  )
}

export default ContactUs
