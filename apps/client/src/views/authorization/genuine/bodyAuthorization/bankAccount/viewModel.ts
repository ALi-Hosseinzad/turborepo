import type { BankAccountValuesType } from '../../imports'
import {
  axiosDelete,
  BANK_ACCOUNT_INFO_URL,
  handleLoginedUser,
  ME_URL,
  showSuccess,
  useAxiosMutation,
  useAxiosQuery,
  useDispatch,
  useEffect,
  useMutation,
  useState,
  useTranslations,
  yup,
} from '../../imports'

export const useBankAccountViewModel = (
  setShowInputsBox?: any,
  showInputsBox?: any,
  openDeleteModal?: any,
  setOpenDeleteModal?: any,
) => {
  const t = useTranslations()
  const [allAuthResults, setAllAuthResults] = useState<string[]>([])
  const [showOnSuccess, _setShowOnSuccess] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [sendRequestMe, setGetRequestMe] = useState<boolean>(false)
  const [textWarning, setTextWarning] = useState<string>('')

  const { data: dataME, isSuccess } = useAxiosQuery({
    url: ME_URL,
    queryKey: ['me'],
    enabled: sendRequestMe,
  })
  const handlerShowInputsBox = () => {
    setShowInputsBox(!showInputsBox)
  }

  const initialValues: BankAccountValuesType = {
    card_number: '',
    sheba_number: '',
  }

  const validationSchema = yup.object({
    card_number: yup
      .string()
      .required(t('required'))
      .matches(/^\d{16}$/, t('minNumberCard')),

    sheba_number: yup
      .string()
      .required(t('required'))
      .matches(/^\d{24}$/, t('errEhebaNumber')),
  })

  const { mutateAsync, isPending, error } = useAxiosMutation(
    BANK_ACCOUNT_INFO_URL,
    'post',
  )

  const {
    data: infoBankAccount,
    refetch: refetchInfoBankAccount,
    isLoading: loadingInfoBankAccount,
    isSuccess: isSuccessBankAccount,
  } = useAxiosQuery({
    url: BANK_ACCOUNT_INFO_URL,
    queryKey: ['AuthFormBank-Info'],
  })

  const authenticationResults: string[] = []

  useEffect(() => {
    if (infoBankAccount) {
      const dataInfoBanks = infoBankAccount?.data
      let found = ''
      for (const dataInfoBank of dataInfoBanks) {
        if (dataInfoBank?.is_verify) {
          setGetRequestMe(true)

          if (isSuccess) {
            dispatch(handleLoginedUser(dataME))
          }
        }
        authenticationResults.push(dataInfoBank.authentication_result)
        if (dataInfoBank?.is_verify_label === t('waiting')) {
          found = t('waiting')
        }
      }

      setTextWarning(found)
      setAllAuthResults(authenticationResults)
    }
  }, [infoBankAccount, isSuccess])

  const handleSubmit = async (
    values: BankAccountValuesType,
    formikProps,
  ): Promise<void> => {
    const orderInfo = {
      sheba_number: values.sheba_number,
      card_number: values.card_number,
    }
    await mutateAsync(orderInfo)
      .then(() => {
        showSuccess(t('BankCardAdd'))
        setShowInputsBox(false)
        refetchInfoBankAccount()
        formikProps.resetForm()
      })
      .catch(() => {
        setShowInputsBox(false)
        refetchInfoBankAccount()
        formikProps.resetForm()
      })
  }

  const { mutate: mutateDelete } = useMutation({
    mutationFn: (body: any) =>
      axiosDelete({
        url: BANK_ACCOUNT_INFO_URL,
        id: body?.id,
      }),
    onError: () => {
      setShowInputsBox(false)
      setOpenDeleteModal({ status: false, id: '' })
    },
    onSuccess: () => {
      showSuccess(t('deleteBankCardQuestion'))
      setOpenDeleteModal({ status: false, id: '' })
      setShowInputsBox(false)
      refetchInfoBankAccount()
    },
  })

  const handleDelete = (): any => {
    const body = {
      id: openDeleteModal?.userId,
    }
    mutateDelete(body)
  }
  return {
    handleSubmit,
    handleDelete,
    handlerShowInputsBox,
    allAuthResults: allAuthResults?.flat(),
    showOnSuccess,
    initialValues,
    validationSchema,
    isPending,
    error,
    infoBankAccount,
    loadingInfoBankAccount,
    isSuccessBankAccount,
    textWarning,
  }
}
