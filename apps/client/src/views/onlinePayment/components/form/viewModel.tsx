import { CHECKOUT } from '@/constants/routes'
import { useRouter } from '@/components/nextIntl/navigation'
import {
  ONLINE_PAYMENT_URL,
  useAxiosMutation,
  useEffect,
  useParams,
  useState,
  useTranslations,
  yup,
} from '../../imports'

export const useOnlinePaymentFormViewModel = (formInfo) => {
  const t = useTranslations()
  const { id } = useParams()
  const router = useRouter()
  const [initialValues, setInitialValues] = useState({
    subscriptions: { price: 0, id: '' },
    rangePrice: 0,
    region: '',
    officialInvoice: false,
    fastPayment: false,
    hurryPrice: 0,
    wage: { type: 'percent', amount: 0 },
  })
  const [validationSchema, setValidationSchema] = useState({})
  const { mutateAsync, isPending, isSuccess } = useAxiosMutation(
    ONLINE_PAYMENT_URL,
    'post',
  )

  const handleValidationSchema = (type: string) => {
    switch (type) {
      case 'text':
        return yup.string().required(t('emptyError'))

      case 'select':
      case 'auto_complete':
        // case 'radiobutton':
        return yup.object().required(t('emptyError'))

      default:
        return yup.string().required(t('emptyError'))
    }
  }

  useEffect(() => {
    if (formInfo.form) {
      const { form, subscriptions, hurryPrice, rangePrice, regions, wage } =
        formInfo
      const inputsFormInfo = form?.inputs?.map(
        ({ id, name, required, helper_text: helperText, type, option }) => {
          return { id, name, required, helperText, type, option }
        },
      )

      if (inputsFormInfo?.length > 0) {
        const initValue = inputsFormInfo.reduce((acc, key) => {
          acc[key?.id] = ''
          if (key.type == 'radiobutton') {
            acc[key?.id] = key.option[0].value
          }
          return acc
        }, {})

        const regexHandeler = (helperText) => {
          const regexParts = helperText.match(/\/(.+)\/([a-z]*)/i)
          const regexPattern = regexParts[1]
          const regexFlags = regexParts[2]
          const regex = new RegExp(regexPattern, regexFlags)
          return regex
        }
        const validation = inputsFormInfo.reduce((acc, key) => {
          if (key?.required) {
            if (key?.helperText) {
              acc[key?.id] = yup
                .string()
                .matches(
                  regexHandeler(key?.helperText?.regex),
                  key?.helperText?.subtitle,
                )
                .required(t('emptyError'))
            } else {
              acc[key?.id] = handleValidationSchema(key.type)
            }
          }
          return acc
        }, {})

        let constItemsValidation = {}
        if (formInfo.subscriptions.length) {
          setInitialValues({
            ...initialValues,
            ...initValue,
            region: regions[0],
            subscriptions: subscriptions[0].value,
            hurryPrice,
            wage: {
              type: wage?.type,
              amount: wage?.amount,
            },
          })
          constItemsValidation = {
            subscriptions: yup.object().required(t('emptyError')),
          }
        } else {
          setInitialValues({
            ...initialValues,
            ...initValue,
            region: regions[0],
            hurryPrice,
            wage: {
              type: wage?.type,
              amount: wage?.amount,
            },
          })
          constItemsValidation = {
            rangePrice: yup
              .number()
              .min(rangePrice.minPrice, 'too low')
              .max(rangePrice.maxPrice, 'too high')
              .required(t('emptyError')),
            region: yup.object().required(t('emptyError')),
          }
        }
        setValidationSchema(
          yup.object({ ...validation, ...constItemsValidation }),
        )
      }
    }
  }, [formInfo])

  const onSubmit = async (values) => {
    const bodyItem = {
      service_id: id,
      price: values.rangePrice,
      hurry: values.fastPayment,
      region_id: values.region.id,
      subscription_id: values.subscriptions?.id,
      // official_bill: values.officialInvoice,
    }

    if (values.subscriptions.id) {
      delete bodyItem.region_id
      delete bodyItem.price
    } else {
      delete bodyItem.subscription_id
    }

    const cloneValue = { ...values }
    const deletItem = [
      'rangePrice',
      'fastPayment',
      'region',
      'subscriptions',
      'officialInvoice',
      'hurryPrice',
      'wage',
    ]
    for (const key of deletItem) {
      delete cloneValue[key]
    }

    const formInputs: Record<string, any> = []
    for (const key in cloneValue) {
      const item = {
        form_input_id: key,
        value:
          typeof cloneValue[key] !== 'object'
            ? cloneValue[key]
            : cloneValue[key].value,
      }
      formInputs.push(item)
    }

    const body = {
      ...bodyItem,
      form_inputs: formInputs,
    }

    await mutateAsync(body).then((res) =>
      router.push(`${CHECKOUT}/${res?.data?.id}` as any),
    )
  }

  return { initialValues, validationSchema, onSubmit, isPending, isSuccess }
}
