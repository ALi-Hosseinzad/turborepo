import type {
  CreateValuesType,
  OrderInfoType,
  UseUserCreateViewModelReturnType,
} from '../imports'
import {
  JUST_PERSIAN_REGEX,
  PHONE_REGEX,
  useCreate,
  useListViewModel,
  USER_URL,
  useTranslations,
  yup,
} from '../imports'

export const useUserCreateViewModel = (): UseUserCreateViewModelReturnType => {
  const t = useTranslations()

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required(t('required'))
      .matches(JUST_PERSIAN_REGEX, t('languageError')),
    lastName: yup
      .string()
      .required(t('required'))
      .matches(JUST_PERSIAN_REGEX, t('languageError')),
    phone: yup
      .string()
      .min(10, t('phoneNumberErrorMin'))
      .max(10, t('phoneNumberErrorMin'))
      .matches(PHONE_REGEX, t('phoneNumberError'))
      .required(t('required')),
    email: yup.string().email(t('emailError')).required(t('required')),
    password: yup.string().min(5, ''),
    passwordRepeat: yup.string().min(5, ''),
    role_id: yup.object(),
  })

  const { isLoadingSubmit: isLoadingCreate, handleRequest } = useCreate({
    url: USER_URL,
  })

  const { refetchList, isFetching } = useListViewModel({
    url: USER_URL,
    queryKey: 'user-list',
  })

  const initialValues: CreateValuesType = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role_id: '',
    password: '',
    passwordRepeat: '',
  }

  const onSubmit = (values: any, formikProps: any): void => {
    const orderInfo: OrderInfoType = {
      firstname: values?.firstName,
      lastname: values?.lastName,
      phone: Number(values?.phone).toString(),
      email: values?.email,
    }
    handleRequest(orderInfo, refetchList, formikProps)
  }

  return {
    initialValues,
    validationSchema,
    isPendingPostData: isLoadingCreate || isFetching,
    onSubmit,
  }
}
