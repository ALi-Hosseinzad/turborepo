import {
  Breadcrumbs,
  TicketAddSkeleton,
  TicketFaq,
  TicketForm,
} from '../imports'

const TicketAddView = ({ subjectData, isLoading, breadCrumbs }) => {
  if (isLoading) {
    return <TicketAddSkeleton />
  }

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />

      <div className="sm:grid sm:grid-cols-12 flex flex-col-reverse gap-4">
        <div className="flex flex-col gap-4 col-span-6 bg-white rounded-xl md:p-8 sm:p-5 p-4">
          <p className="text-normal-lg">{subjectData?.title}</p>
          <TicketForm />
        </div>
        <div className="col-span-6 bg-white rounded-xl md:p-8 sm:p-5 p-4">
          <TicketFaq faqList={subjectData?.faq} />
        </div>
      </div>
    </>
  )
}

export default TicketAddView
