import { useTranslations, yup } from '../../imports'

export const useFormManagementFormViewModel = (): any => {
  const t = useTranslations()

  const validationSchema = yup.object({
    formName: yup.string().required(t('emptyError')),
    status: yup.object().required(t('emptyError')),
    inputType: yup.object(),
    required: yup.object(),
  })

  return {
    validationSchema,
  }
}
