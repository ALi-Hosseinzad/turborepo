export interface GuildInformationPropsType {
  deactivate?: boolean
  TextDeactivate?: string
  TextActivate?: string
}

export interface GuildValuesType {
  taxCode: string
  guildCode: string
  guildImage: string
}

export interface FormGuildViewModelType {
  initialValues?: any
  validationSchema?: any
  handleSubmit?: any
  handleDeactivate?: any
  isLoading?: boolean
  isSuccess?: boolean
  isPending?: boolean
  isReject?: boolean
  dataGuildPost?: any
  dataGuildGet?: any
  isSuccessGuild?: any
  isVerify?: any
  dataActiveDisableGuild?: any
  isSuccessActiveDisableGuild?: any
  isLoadingGuildGet?: boolean
  activeLading?: boolean
}
