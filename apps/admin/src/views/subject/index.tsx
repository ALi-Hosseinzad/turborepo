'use client'

import {
  SubjectListView,
  useSubjectListViewModel,
  useTranslations,
} from './imports'

const Subjects = (): JSX.Element => {
  const {
    headInfo,
    bodyInfo,
    page,
    isLoading,
    pageCount,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
    isFetching,
  } = useSubjectListViewModel()
  const t = useTranslations()
  return (
    <>
      {bodyInfo?.length === 0 ? (
        <div className="flex justify-center items-center w-full h-[30vh] text-lg	font-semibold	 ">
          {t('dontHaveData')}
        </div>
      ) : (
        <SubjectListView
          bodyInfo={bodyInfo}
          headInfo={headInfo}
          page={page}
          pageCount={pageCount}
          isLoading={isLoading}
          isFetching={isFetching}
          afterDeleteHandler={afterDeleteHandler}
          onChangePage={onChangePage}
          onErrorDelete={onErrorDelete}
        />
      )}
    </>
  )
}

export default Subjects
