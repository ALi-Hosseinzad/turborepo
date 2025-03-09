import { AuthenticationResult } from '@/views/authorization/imports'
import {
  type GuildInformationPropsType,
  UseGuildInformationViewModel,
} from '../../imports'
import GuildInformationView from './view'

const GuildInformation: React.FC = (props: GuildInformationPropsType) => {
  const { deactivate, TextDeactivate, TextActivate } = props
  const { dataGuildGet, isReject } = UseGuildInformationViewModel()
  return (
    <>
      <AuthenticationResult
        isReject={Boolean(isReject)}
        data={dataGuildGet?.authentication_result}
      />

      <GuildInformationView
        deactivate={deactivate}
        TextDeactivate={TextDeactivate}
        TextActivate={TextActivate}
      />
    </>
  )
}

export default GuildInformation
