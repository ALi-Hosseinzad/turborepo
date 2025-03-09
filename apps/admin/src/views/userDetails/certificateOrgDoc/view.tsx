import { LEGAL_AUTHENTICATION_RESULT_URL } from 'constants/endPoints'
import {
  CertificateFormLayout,
  COMPANY_CREDENTIAL_FILE_VERIFICATION_URL,
  COMPANY_UNDERTAKING_VERIFICATION_URL,
  Header2,
  OstiganAutoComplete,
  OstiganButton,
  SIGNATORY_OWNER_URL,
  useTranslations,
} from '../imports'

export const CertificateOrgDocView = (props: any): JSX.Element => {
  const { association, officialGazette, undertaking, signatory, id } =
    props.data
  const {
    refetchUserInfo,
    isSelectActive,
    dataConfirmOptions,
    handleConfirm,
    setDisapprovalResult,
  } = props
  const t = useTranslations()

  return (
    <div className="flex flex-col bg-white rounded-lg p-8">
      <Header2 title={t('certificateOrganizationalDoc')} className="pt-4" />
      <CertificateFormLayout
        id={id}
        data={association}
        title={t('associationImage')}
        url={COMPANY_CREDENTIAL_FILE_VERIFICATION_URL}
        querykey="verify_article_of_association"
        refetchUserInfo={refetchUserInfo}
      />
      <CertificateFormLayout
        id={id}
        data={officialGazette}
        title={t('newspaperImage')}
        url={COMPANY_CREDENTIAL_FILE_VERIFICATION_URL}
        querykey="verify_official_gazette"
        refetchUserInfo={refetchUserInfo}
      />
      <Header2 title={t('ownerSignatureNationalCard')} className="pt-4" />
      {signatory?.map((item) => (
        <CertificateFormLayout
          id={item?.id}
          key={item.number}
          data={item}
          url={SIGNATORY_OWNER_URL}
          querykey="is_verified"
          hasImageBack
          refetchUserInfo={refetchUserInfo}
        />
      ))}
      <CertificateFormLayout
        id={id}
        data={undertaking}
        title={t('undertakingImage')}
        url={COMPANY_UNDERTAKING_VERIFICATION_URL}
        querykey="verify_undertaking"
        refetchUserInfo={refetchUserInfo}
      />
      {isSelectActive ? (
        <>
          <p className="text-lg py-4">{t('disapprovalReason')}</p>
          <OstiganAutoComplete
            listOption={dataConfirmOptions}
            optionTitle="description"
            name="reason"
            placeholder={t('choose')}
            multiSelection
            numberMenuColumns={3}
            onChangeHandler={(value: any): void => {
              setDisapprovalResult(value)
            }}
          />
        </>
      ) : null}
      <div className="mr-auto pt-28">
        <OstiganButton
          type="button"
          variant="contained"
          // disabled={!data?.image}
          handleClick={() => {
            handleConfirm({
              id,
              url: LEGAL_AUTHENTICATION_RESULT_URL,
            })
          }}
        >
          {isSelectActive ? 'ارسال دلایل عدم تایید' : t('finalAccept')}
        </OstiganButton>
      </div>
    </div>
  )
}
