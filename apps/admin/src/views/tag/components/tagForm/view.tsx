import { FormikTextField, useTranslations } from '../../imports'

export const TagFormView = (): JSX.Element => {
  const t = useTranslations()

  return (
    <div className="grid grid-cols-2 w-full gap-8">
      <FormikTextField name="name" title={t('category')} />
      <FormikTextField name="slug" title={t('englishSlug')} />
    </div>
  )
}
