import GuildInformationView from '@/views/authorization/genuine/bodyAuthorization/guild/view'

export const GuildViewProfile = (): JSX.Element => {
  return (
    <GuildInformationView
      deactivate
      TextDeactivate="textDeactivate"
      TextActivate="textActivate"
    />
  )
}
