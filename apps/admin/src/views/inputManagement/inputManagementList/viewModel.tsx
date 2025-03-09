import { useTranslations } from '../imports'
import type { UseListViewModelType } from '../imports'

export const useInputManagementListViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const headInfo = [
    t('id'),
    t('name'),
    t('formInputType'),
    t('inputType'),
    t('placeholder'),
  ]

  const handleBodyInfo = (
    body: {
      id: any
      form_input_type: any
      label: any
      type: any
      placeholder: any
    }[],
  ): any => {
    if (body?.length) {
      return body.map(
        ({
          id,
          form_input_type: formInputType,
          label,
          type: inputType,
          placeholder,
        }) => {
          return {
            id,
            label,
            formInputType,
            inputType,
            placeholder,
          }
        },
      )
    }

    return []
  }

  return {
    bodyInfo: handleBodyInfo,
    headInfo,
  }
}
