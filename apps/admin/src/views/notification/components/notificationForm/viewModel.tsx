import {
  // type UseNotificationFormViewModelType,
  useParams,
  useTranslations,
  yup,
} from '../../imports'

export const useNotificationFormViewModel = (): any => {
  const t = useTranslations()
  const { id } = useParams()

  const validationSchema = yup.object({
    title: yup.string().required(t('emptyError')),
    description: yup.string().required(t('emptyError')),
    group_id: id ? yup.object() : yup.object().required(t('emptyError')),
  })

  const checkboxClassName =
    'border border-trueGray-500 border-solid flex items-center rounded-md pl-5 pr-2'

  return { validationSchema, checkboxClassName }
}
