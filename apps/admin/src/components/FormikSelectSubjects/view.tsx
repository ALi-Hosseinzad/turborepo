import { useTranslations } from 'next-intl'
import { FormikSelect } from 'ui'

const FormikSelectSubjectsView = ({
  onChange,
  subjects,
  name,
  isLoading,
  onScrollToLastItemHandler,
  params,
}: any): JSX.Element => {
  const t = useTranslations()

  return (
    <FormikSelect
      size="Small"
      placeholder={t('chooseAnsweringPart')}
      listOptions={subjects}
      optionLabel="title"
      optionValue="id"
      name={name}
      isLoading={isLoading}
      sxPaper={{ height: `${Number(params.perPage) * 40}px` }}
      onChangeHandler={onChange}
      onScrollToLastItem={onScrollToLastItemHandler}
    />
  )
}

export default FormikSelectSubjectsView
