import { UserPersist } from '@/views/authorization/imports'
import type {
  InitialValuesType,
  UsePersonalInfoViewModelReturnType,
} from '../../imports'
import {
  INTEGER_REGEX,
  JUST_PERSIAN_REGEX,
  useTranslations,
  yup,
} from '../../imports'

export const UsePersonalInfoViewModel =
  (): UsePersonalInfoViewModelReturnType => {
    const t = useTranslations()
    const { user } = UserPersist()
    const { is_guild: isLoadingUser } = user

    const [prename, lastName] = user?.name
      ? user.name.split('_')
      : [undefined, undefined]
    const isdisabled = true
    const validationSchema = yup.object({
      firstname: yup
        .string()
        .required(t('emptyError'))
        .matches(INTEGER_REGEX, t('mistake'))
        .matches(JUST_PERSIAN_REGEX, t('languageError')),
      lastname: yup
        .string()
        .required(t('emptyError'))
        .matches(INTEGER_REGEX, t('mistake'))
        .matches(JUST_PERSIAN_REGEX, t('languageError')),
      phone: yup.string().required(t('emptyError')),
      email: yup.string().email(t('emailError')).required(t('emptyError')),
    })
    const zero = 0
    const initialValues: InitialValuesType = {
      firstname: prename || '',
      lastname: lastName || '',
      phone: `${zero}${user?.phone || ''}`,
      email: user?.email || '',
    }

    const handleSubmit = () => {
      // console.error();
    }

    return {
      initialValues,
      validationSchema,
      handleSubmit,
      isdisabled,
      isLoadingUser,
    }
  }
