import { handleLocalStorage, useTranslations, yup } from '../../imports'

export const useRoleFormViewModel = (): any => {
  const t = useTranslations()

  const validationSchema = yup.object({
    name: yup.string().required(t('emptyError')),
    type: yup.object().required(t('emptyError')),
    permissionType: yup
      .array()
      .min(1, t('selectOneOptionError'))
      .required(t('emptyError')),
  })

  const localStorageData = handleLocalStorage({
    type: 'getLocalStorage',
    key: 'enums',
  })

  let permissionTypeList = []
  if (typeof window !== 'undefined') {
    permissionTypeList = localStorageData?.Permission?.permission_type
  }

  return {
    validationSchema,
    permissionTypeList,
  }
}
