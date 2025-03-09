import type {
  FormGuildViewModelType,
  GuildValuesType,
} from '@/types/authorization/gild'
import {
  GUILD_ACTIVE_DISABLE_URL,
  GUILD_URL,
  handleLoginedUser,
  ME_URL,
  NUMBER_REGEX,
  useAxiosMutation,
  useAxiosQuery,
  useDispatch,
  useEffect,
  useState,
  useTranslations,
  yup,
} from '../../imports'

export const UseGuildInformationViewModel = (): FormGuildViewModelType => {
  const [sendRequestMe, setGetRequestMe] = useState<boolean>(false)
  const [activeLading, setactiveLading] = useState<boolean>(false)
  const [sendActiveDisableGuild, setSendActiveDisableGuild] =
    useState<boolean>(false)

  const dispatch = useDispatch()
  const { data, isSuccess } = useAxiosQuery({
    url: ME_URL,
    queryKey: ['me'],
    enabled: sendRequestMe,
  })

  const {
    data: dataGuildGet,
    isPending: isSuccessGuild,
    refetch: refetchGuild,
    isLoading: isLoadingGuildGet,
  } = useAxiosQuery({ url: GUILD_URL, queryKey: ['GuildINFO'] })

  useEffect(() => {
    if (dataGuildGet?.status === 'approved') {
      setGetRequestMe(true)
      if (isSuccess) {
        dispatch(handleLoginedUser(data))
      }
    }
  }, [isSuccessGuild, isSuccess])

  useEffect(() => {
    setactiveLading(false)
  }, [dataGuildGet])

  const initialValues: GuildValuesType = {
    taxCode: dataGuildGet?.tax_code || '',
    guildCode: dataGuildGet?.guild_code || '',
    guildImage: dataGuildGet?.image || '',
  }
  const t = useTranslations()
  const validationSchema = yup.object({
    taxCode: yup
      .string()
      .min(10, t('notLessThanOne'))
      .max(10, t('notLessThanOne'))
      .typeError(t('mustNumber'))
      .matches(NUMBER_REGEX, t('mustNumber'))
      .required(t('required')),
    guildCode: yup
      .string()
      .min(10, t('notLessThanOne'))
      .max(10, t('notLessThanOne'))
      .matches(NUMBER_REGEX, t('mustNumber'))
      .required(t('required')),
    guildImage: yup.string().required(t('required')),
  })

  const {
    mutateAsync,
    isPending,
    data: dataGuildPost,
  } = useAxiosMutation(GUILD_URL, 'post')

  const handleSubmit = (values: any) => {
    const nationalCardInfo = {
      tax_code: values?.taxCode,
      guild_code: values.guildCode,
      guild_image: values?.guildImage,
    }
    mutateAsync(nationalCardInfo).then(() => {
      refetchGuild()
    })
  }

  const {
    data: dataActiveDisableGuild,
    isSuccess: isSuccessActiveDisableGuild,
    isLoading: isLoadingActiveDisableGuild,
    fetchStatus,
  } = useAxiosQuery({
    url: GUILD_ACTIVE_DISABLE_URL,
    queryKey: ['active-disable-guild'],
    enabled: sendActiveDisableGuild,
  })

  const handleDeactivate = () => {
    setSendActiveDisableGuild(false)
    setactiveLading(true)
    if (!sendActiveDisableGuild) {
      setSendActiveDisableGuild(true)
    }
  }

  useEffect(() => {
    refetchGuild()
    setSendActiveDisableGuild(false)
  }, [fetchStatus, isLoadingActiveDisableGuild, dataActiveDisableGuild])

  const isVerify: boolean = dataGuildGet?.status === 'pending'
  const isReject: boolean = dataGuildGet?.status === 'rejected'

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    handleDeactivate,
    isPending,
    dataGuildPost,
    dataGuildGet,
    isSuccessGuild,
    isVerify,
    isReject,
    dataActiveDisableGuild,
    isSuccessActiveDisableGuild,
    isLoadingGuildGet,
    activeLading,
  }
}
