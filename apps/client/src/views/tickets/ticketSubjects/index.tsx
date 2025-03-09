'use client'

import {
  Breadcrumbs,
  TicketChooseSubject,
  TicketChooseSubjectSkeleton,
  ToRespond,
  useTicketChooseSubject,
  useTranslations,
} from '../imports'

const TicketSubjects = () => {
  const { isLoading, getBreadCrumbs } = useTicketChooseSubject()
  const t = useTranslations()
  const breadCrumbs = getBreadCrumbs()
  if (isLoading) {
    return <TicketChooseSubjectSkeleton />
  }

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="flex gap-4 flex-col-reverse md:flex-row bg-customWhite">
        <div className="bg-white rounded max-sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-8">
          <p className="title-sm sm:title-base lg:title-base p-4 pb-6">
            {t('titleSupportRequest')}
          </p>
          <TicketChooseSubject />
        </div>
        <ToRespond />
      </div>
    </>
  )
}

export default TicketSubjects
