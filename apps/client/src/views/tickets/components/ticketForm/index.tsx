'use client'

import { TicketFormView, useTicketFormViewModel } from '../../imports'

const TicketForm = () => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
    isSuccess,
    priorityList,
  } = useTicketFormViewModel()

  return (
    <TicketFormView
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      isPending={isPending}
      isSuccess={isSuccess}
      priorityList={priorityList}
    />
  )
}

export default TicketForm
