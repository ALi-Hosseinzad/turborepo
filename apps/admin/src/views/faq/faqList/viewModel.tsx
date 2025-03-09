import { type UseListViewModelType, useTranslations } from '../imports'

export const useFaqListViewModel = (): UseListViewModelType => {
  const t = useTranslations()
  const headInfo = [t('id'), t('questionTitle'), t('answer')]

  const bodyInfo = (curData: any): any[] => {
    return curData?.map(({ id, question, answer }) => {
      return {
        id,
        question,
        answer: <div dangerouslySetInnerHTML={{ __html: answer }} />,
      }
    })
  }

  return {
    headInfo,
    bodyInfo,
  }
}
