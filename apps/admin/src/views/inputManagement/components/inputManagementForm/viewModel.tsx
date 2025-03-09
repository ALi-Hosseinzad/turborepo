import type { InputManagementFormViewModelType } from '../../imports'
import {
  EMAIL_REGEX,
  handleLocalStorage,
  INTEGER_REGEX,
  JUST_ENGLISH_REGEX,
  JUST_PERSIAN_REGEX,
  PHONE_REGEX,
  useTranslations,
  yup,
} from '../../imports'

export const useInputManagementFormViewModel = (
  setSelectedOption,
  setInitialValues,
  initialValues,
  // setIinitialInputType,
): InputManagementFormViewModelType => {
  const t = useTranslations()
  const enums = handleLocalStorage({ type: 'getLocalStorage', key: 'enums' })
  const datainputTypeOption = enums?.OnlinePayment?.form_input_type

  const dataRegexOption = [
    { value: 'null', label: 'هیچ کدام' },
    { value: `${EMAIL_REGEX}`, label: t('emailError') },
    { value: `${PHONE_REGEX}`, label: t('phoneNumberError') },
    { value: `${INTEGER_REGEX}`, label: t('numberError') },
    { value: `${JUST_PERSIAN_REGEX}`, label: t('languageError') },
    { value: `${JUST_ENGLISH_REGEX}`, label: t('languageErrorEnglish') },
  ]
  const formTypeOptions = [
    { label: 'سایت', value: 'site' },
    { label: 'اپ', value: 'app' },
  ]
  const validationSchema = yup.object({
    name: yup.string().required(t('emptyError')),
    label: yup.string().required(t('emptyError')),
    subTitle: yup.string(),
    placeholder: yup.string().required(t('emptyError')),
    status: yup.object().required(t('emptyError')),
    inputType: yup.object().required(t('emptyError')),
    helperText: yup.object(),
    option: yup.array(),
    property: yup.array(),
  })

  const handleSelectedOption = (value, setFieldValue): void => {
    // setIinitialInputType(false)
    setSelectedOption({
      status: false,
      type: '',
      name: '',
    })
    setInitialValues?.({ ...initialValues, option: [{ value: '', label: '' }] })
    setFieldValue('option', [{ value: '', label: '' }])
    setFieldValue('inputType', value)
    setSelectedOption({
      status: false,
      type: '',
      name: '',
    })

    if (
      value?.value == 'checkbox' ||
      value?.value == 'select' ||
      value?.value == 'auto_complete' ||
      value?.value == 'radiobutton' ||
      value?.value == 'textarea'
    ) {
      setSelectedOption({
        status: true,
        type: value?.value,
        name: 'option',
      })
    }

    if (value?.value == 'textarea' || value?.value == 'range') {
      setSelectedOption({
        status: true,
        type: value?.value,
        name: 'property',
      })
    }
  }

  return {
    validationSchema,
    datainputTypeOption,
    dataRegexOption,
    handleSelectedOption,
    formTypeOptions,
  }
}
