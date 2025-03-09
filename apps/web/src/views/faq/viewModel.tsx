import {
  axiosGet,
  OstiganAccordion,
  SUBJECT_USER_URL,
  useQuery,
} from './imports'

export const useFaqViewModel = (): any => {
  const { data: tabPanelItemsData } = useQuery({
    queryKey: ['get-faq-data'],
    queryFn: () => axiosGet({ url: SUBJECT_USER_URL }),
  })

  const selectedStyles = {
    backgroundColor: 'var(--primary-default)',
    color: 'var(--customWhite)!important',
  }

  const tabButtonsStyles = {
    borderRadius: '8px',
  }

  const tabItems = tabPanelItemsData?.map((item) => {
    return { text: item.title }
  })

  const tabPanelItems = tabPanelItemsData?.map((item) => {
    const faqs = item.faq
    return faqs.map(({ question, answer, id }) => (
      <div className="mb-3" key={id}>
        <OstiganAccordion title={question} description={answer} />
      </div>
    ))
  })

  return { selectedStyles, tabButtonsStyles, tabItems, tabPanelItems }
}
