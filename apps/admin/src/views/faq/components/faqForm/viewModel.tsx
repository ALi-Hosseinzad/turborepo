import {
  type UseFaqFormViewModelType,
  useTranslations,
  yup,
} from '../../imports'

export const useFaqFormViewModel = (): UseFaqFormViewModelType => {
  const t = useTranslations()

  const validationSchema = yup.object({
    question: yup.string().required(t('emptyError')),
    answer: yup.string().required(t('emptyError')),
    subject_id: yup.object().required(t('emptyError')),
  })

  return { validationSchema }
}
