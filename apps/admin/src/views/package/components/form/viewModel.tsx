import type { UseFaqFormViewModelType } from 'types/faq'
import { useTranslations, yup } from '../../imports'

export const usePackageFormViewModel = (): UseFaqFormViewModelType => {
  const t = useTranslations()
  const validationSchema = yup.object({
    title: yup.string().required(t('emptyError')),
    slug: yup.string().required(t('emptyError')),
    sku: yup.string().required(t('emptyError')),
    category_ids: yup.array().min(1, t('emptyError')),
    description: yup.string().required(t('emptyError')),
    status: yup.object().required(t('emptyError')),
    image: yup.string().required(t('emptyError')),
    amount: yup.number().typeError(t('mustBeNum')).required(t('emptyError')),
    tag_ids: yup.array().min(1, t('emptyError')),
    wage_id: yup.object().required(t('emptyError')),
  })

  return {
    validationSchema,
  }
}
