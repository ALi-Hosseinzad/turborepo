import CertificateOrgDoc from './certificateOrgDoc'
import type { UserInfoViewModelType } from './imports'
import {
  AUTHENTICATION_RESULT_URL,
  axiosGet,
  axiosPut,
  BankInfoIcon,
  BankInfoView,
  DEVICE_URL,
  DevicesInfoView,
  ElectronicsIcon,
  GuildInfoView,
  IdentificationIcon,
  IdentificationInfoView,
  MediaAuthorizationInfoView,
  OrdersIcon,
  OrdersInfoView,
  OrganizationInfoView,
  OstiganSwitch,
  useMutation,
  useParams,
  useQuery,
  USER_URL,
  UserGuildIcon,
  UserInfoView,
  useRouter,
  UserSquareIcon,
  useTranslations,
} from './imports'

export const useUserGenuineViewModel = (): UserInfoViewModelType => {
  const t = useTranslations()
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  let userInfo = {}
  let userIdentificationInfo = {}
  let verifiedBankCard = []
  let needAdminverifiedBankCard = []
  let unVerifiedBankCard = []
  let userOrdersInfo = []
  let userDevicesInfo = []
  let bankCardNumber = ''
  let userGuild = {}
  let userMediaAuthorization = {}
  let organizationInfo = {}
  let isLegal = false
  let CertificateOrgDocData = {}
  let isSelectActive = false

  const tabUserItems = [
    { text: t('personalInfo'), icon: <UserSquareIcon /> },
    { text: t('nationalInf'), icon: <IdentificationIcon /> },
    { text: t('bankInfo'), icon: <BankInfoIcon /> },
    { text: t('guildInfo'), icon: <UserGuildIcon /> },
    { text: t('contractInfo'), icon: <ElectronicsIcon /> },
    { text: t('orders'), icon: <OrdersIcon /> },
    { text: t('deviceInfo'), icon: <ElectronicsIcon /> },
  ]
  const tabLegalUserItems = [
    { text: t('organizationalInfo'), icon: <UserSquareIcon /> },
    { text: t('bankInfo'), icon: <BankInfoIcon /> },
    { text: t('certificateOrganizationalDoc'), icon: <UserSquareIcon /> },
    { text: t('orders'), icon: <OrdersIcon /> },
    { text: t('deviceInfo'), icon: <ElectronicsIcon /> },
  ]

  const headInfoOrderTable = [
    t('id'),
    t('trackingCode'),
    t('date'),
    t('firstName'),
    t('lastName'),
    t('phone'),
    t('price'),
    t('status'),
    t('OrderType'),
  ]
  const headInfoDeviceTable = [
    t('id'),
    t('deviceId'),
    t('store'),
    t('osType'),
    t('version'),
    t('width'),
    t('height'),
    t('status'),
    t('fcmToken'),
    t('action'),
  ]
  const { isLoading: _isLoadingConfirmOptions, data: dataConfirmOptions } =
    useQuery({
      queryKey: ['confirmOptions'],
      queryFn: () => axiosGet({ url: AUTHENTICATION_RESULT_URL }),
      // enabled: showConfirmModal.reject,
      staleTime: 10 * 6000 * 5,
    })

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    refetch: refetchUserInfo,
  } = useQuery({
    queryKey: ['userInfo', id],
    queryFn: () => axiosGet({ url: `${USER_URL}/${id}` }),
    enabled: id != undefined,
  })
  const mutation = useMutation({
    mutationFn: (e: any) => updateStatusDevice(e),
    onSuccess: async () => {
      await refetchUserInfo()
    },
  })

  const updateStatusDevice = async ({ params, url }: any): Promise<any> => {
    await axiosPut({ url, params })
  }

  if (isError) {
    router.push('notFound')
  }

  if (isSuccess) {
    isLegal = data?.is_legal
    // if (!data?.is_legal) {
    if (data?.company == null) {
      const [firstName, lastName] = data?.name
        ? data.name.split('_')
        : [undefined, undefined]
      userInfo = {
        firstName,
        lastName,
        email: data.email,
        phone: data.phone,
      }
      userIdentificationInfo = data?.national_card
      userGuild = data?.guild

      userMediaAuthorization = data?.media_authorization
    }

    userOrdersInfo = data?.orders.map(
      ({
        id,
        tracking_code: trackingCode,
        created_at: createdAt,
        full_price: fullPrice,
        status_label: statusLabel,
        order_type_label: orderTypeLabel,
        status_text_color: statusTextColor,
        status_background_color: statusBackgroundColor,
        firstName,
        lastName,
      }: Record<string, any>) => {
        const createdTime = createdAt?.split('T')
        const date = createdTime[0]?.replaceAll('-', '/')
        const time = createdTime[1]?.split('.')[0]

        return {
          id,
          trackingCode,
          createdAt: (
            <div>
              <p>{date}</p>
              <p>{time}</p>
            </div>
          ),
          firstName,
          lastName,
          userPhone: data.phone,
          fullPrice,
          statusLabel: (
            <div
              className="min-w-32 rounded-lg p-2"
              style={{
                color: statusTextColor,
                backgroundColor: statusBackgroundColor,
              }}
            >
              {statusLabel}
            </div>
          ),
          product: t(`${orderTypeLabel}`),
        }
      },
    )

    userDevicesInfo = data?.devices.map(
      ({
        id,
        ip_address: deviceId,
        store,
        os_type: osType,
        version,
        width,
        height,
        status,
        fcm_token: fcmToken,
      }: Record<string, any>) => {
        return {
          id,
          deviceId,
          store,
          osType,
          version,
          width,
          height,
          status,
          fcmToken,
          action: (
            <OstiganSwitch
              checked={status === 'active'}
              disabled={
                mutation?.variables?.url?.split('/').pop() === id.toString() &&
                mutation.isPending
              }
              onChange={async () => {
                const statusId = status === 'active' ? 'disable' : 'active'
                await mutation.mutateAsync({
                  params: { status: statusId },
                  url: `${DEVICE_URL}/${id}`,
                })
              }}
            />
          ),
        }
      },
    )
    verifiedBankCard = data?.bank_account?.filter(
      (item: any) => item.is_verify && item.jibit_status,
    )
    unVerifiedBankCard = data?.bank_account?.filter(
      (item: any) => !item.is_verify && item.jibit_status,
    )
    needAdminverifiedBankCard = data?.bank_account?.filter(
      (item: any) => !item.is_verif && !item.jibit_status,
    )
    bankCardNumber = data?.bank_account?.length

    // }
    if (data?.company != null) {
      const {
        id,
        company_name: companyName,
        email,
        registration_number: registrationNumber,
        tax_code: taxCode,
        economic_code: economicCode,
        national_code: nationalCode,
        phone,
        postal_code: postalCode,
        address,
        signatory,
        article_of_association_path: association,
        official_gazette_path: officialGazette,
        undertaking_path: undertaking,
        verify_article_of_association: verifyAssociation,
        verify_article_of_association_label: verifyAssociationLabel,
        verify_official_gazette_label: verifyOfficialGazetteLabel,
        verify_official_gazette: verifyOfficialGazette,
        verify_undertaking: verifyUndertaking,
        verify_undertaking_label: verifyUndertakingLabel,
      } = data.company

      organizationInfo = {
        id,
        companyName,
        email,
        registrationNumber,
        taxCode,
        economicCode,
        nationalCode,
        phone,
        postalCode,
        address,
      }

      CertificateOrgDocData = {
        id,
        officialGazette: {
          image: officialGazette,
          status: verifyOfficialGazette,
          statusLabel: verifyOfficialGazetteLabel,
        },
        undertaking: {
          image: undertaking,
          status: verifyUndertaking,
          statusLabel: verifyUndertakingLabel,
        },
        association: {
          image: association,
          status: verifyAssociation,
          statusLabel: verifyAssociationLabel,
        },
        signatory: signatory
          ?.sort((a, b) => (a.id < b.id ? -1 : 0))
          ?.map(
            (
              {
                id,
                national_card_front_path: imageFront,
                national_card_back_path: imageBack,
                status,
                status_label: statusLabel,
              },
              index,
            ) => {
              const numberFa = [
                { en: '1', fa: 'اول' },
                { en: '2', fa: 'دوم' },
                { en: '3', fa: 'سوم' },
                { en: '4', fa: 'چهارم' },
                { en: '5', fa: 'پنجم' },
                { en: '6', fa: 'ششم' },
                { en: '7', fa: 'هفتم' },
              ]
              return {
                id,
                image: imageFront,
                imageBack,
                status,
                statusLabel,
                number: numberFa?.filter((item) => item.en == index + 1)[0]?.fa,
              }
            },
          ),
      }

      const status = [
        verifyAssociation,
        verifyAssociationLabel,
        verifyOfficialGazetteLabel,
        verifyOfficialGazette,
        verifyUndertaking,
        verifyUndertakingLabel,
      ]

      isSelectActive = status.some((item) => item == 'rejected')
    }
  }

  const tabUserPanelItems = [
    <UserInfoView key="1" data={userInfo} isLoading={isLoading} />,
    <IdentificationInfoView
      key="2"
      data={userIdentificationInfo}
      isLoading={isLoading}
      refetchUserInfo={refetchUserInfo}
    />,
    <BankInfoView
      key="3"
      verifiedBankCard={verifiedBankCard}
      unVerifiedBankCard={unVerifiedBankCard}
      needAdminverifiedBankCard={needAdminverifiedBankCard}
      bankCardNumber={bankCardNumber}
    />,
    <GuildInfoView
      key="4"
      data={userGuild}
      isLoading={isLoading}
      refetchUserInfo={refetchUserInfo}
    />,
    <MediaAuthorizationInfoView
      key="5"
      data={userMediaAuthorization}
      nationalCardImage={userIdentificationInfo?.image}
      isLoading={isLoading}
      refetchUserInfo={refetchUserInfo}
    />,
    <OrdersInfoView
      key="6"
      data={userOrdersInfo}
      headInfoTable={headInfoOrderTable}
      isLoading={isLoading}
    />,
    <DevicesInfoView
      key="7"
      data={userDevicesInfo}
      isLoading={isLoading}
      headInfoTable={headInfoDeviceTable}
    />,
  ]
  const tabLegalUserPanelItems = [
    <OrganizationInfoView
      key="1"
      data={organizationInfo}
      isLoading={isLoading}
    />,

    <BankInfoView
      key="3"
      verifiedBankCard={verifiedBankCard}
      unVerifiedBankCard={unVerifiedBankCard}
      needAdminverifiedBankCard={needAdminverifiedBankCard}
      bankCardNumber={bankCardNumber}
    />,
    <CertificateOrgDoc
      key="4"
      data={CertificateOrgDocData}
      refetchUserInfo={refetchUserInfo}
      isSelectActive={isSelectActive}
      dataConfirmOptions={dataConfirmOptions}
    />,
    <OrdersInfoView
      key="6"
      data={userOrdersInfo}
      headInfoTable={headInfoOrderTable}
      isLoading={isLoading}
    />,
    <DevicesInfoView
      key="7"
      data={userDevicesInfo}
      isLoading={isLoading}
      headInfoTable={headInfoDeviceTable}
    />,
  ]

  return {
    tabUserItems,
    tabLegalUserItems,
    tabUserPanelItems,
    tabLegalUserPanelItems,
    isLoading,
    isLegal,
  }
}
