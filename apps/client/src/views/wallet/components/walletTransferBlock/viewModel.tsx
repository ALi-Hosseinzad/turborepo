import {
  useAxiosMutation,
  useAxiosQuery,
  useEffect,
  useState,
  WALLET_TRANSFER_URL,
  WALLET_URL,
} from '../../imports'

export const useWalletTransferBlockModel = () => {
  const [phone, setPhone] = useState('')
  const [transferId, setTransferId] = useState('')
  const [goToOtp, setGoToOtp] = useState(false)
  const [bodyTransferRequest, setBodyTransferRequest] = useState({})
  const { data, isLoading: isLoadingGetData } = useAxiosQuery({
    url: `${WALLET_URL}/${phone}`,
    queryKey: ['wallet', phone],
    enabled: phone !== '',
  })

  const {
    mutateAsync: mutateAsyncPostTransfer,
    isSuccess: isSuccessPost,
    isPending: isPendingPostTransfer,
    reset: resetPutOtp,
  } = useAxiosMutation(WALLET_TRANSFER_URL, 'post')

  const initialValues = { name: '' }

  const onSubmit = async (values: any) => {
    values !== undefined && setBodyTransferRequest(values)
    if (phone === '') {
      setPhone(values.name)
    } else if (phone === values.name) {
      await mutateAsyncPostTransfer({
        amount: values.amount,
        transferable_type: 'wallet',
        destination_wallet: data.wallet_number,
      }).then((res: any) => {
        setTransferId(res?.data?.id)
        setGoToOtp(true)
      })
    } else {
      setPhone(values.name)
    }
  }

  const validationSchema = ''

  const handleScan = (success: any) => {
    if (success) {
      const code = success.split('=')[1]
      const body = { code, transferable_type: 'QRCodeWallet' }
      setBodyTransferRequest(body)
      mutateAsyncPostTransfer(body).then((res: any) => {
        setTransferId(res?.data?.id)
      })
    }
  }

  const handleResendCode = async () => {
    await mutateAsyncPostTransfer(bodyTransferRequest).then((res: any) => {
      setTransferId(res?.data?.id)
    })
  }

  useEffect(() => {
    isSuccessPost && setGoToOtp(true)
  }, [isSuccessPost])

  return {
    initialValues,
    validationSchema,
    onSubmit,
    data,
    isLoadingGetData,
    isSuccessPost,
    isPendingPostTransfer,
    resetPutOtp,
    setPhone,
    handleScan,
    transferId,
    goToOtp,
    setGoToOtp,
    handleResendCode,
  }
}
