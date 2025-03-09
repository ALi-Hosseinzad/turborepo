'use client'

import { useSelectScroll } from 'hooks/useSelectScroll'
import { SUBJECT_URL } from 'constants/endPoints'

export const useSubjects = (): any => {
  const {
    items: subjects,
    defaultCurValue,
    isLoading,
    params,
    onScrollToLastItemHandler,
  } = useSelectScroll({ url: SUBJECT_URL, queryKey: 'subjects' })

  return {
    subjects,
    defaultCurValue,
    isLoading,
    params,
    onScrollToLastItemHandler,
  }
}
