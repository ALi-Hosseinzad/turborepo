import {
  LEGAL_GAZETTE_URL,
  LEGAL_STATUTE_URL,
  SIGNATORY_OWNER_URL,
  UNDERTAKING_URL,
  useAxiosQuery,
} from '../../imports'

export const CompletedInfoViewModel = () => {
  // gazette
  const { data: dataGazetteGet, isSuccess: isSuccessGazetteGet } =
    useAxiosQuery({
      url: LEGAL_GAZETTE_URL,
      queryKey: ['LEGAL-GAZETTE-URL'],
      enabled: true,
    })

  //articleOfAssociation
  const {
    data: dataArticleOfAssociationGet,
    isSuccess: isSuccessArticleOfAssociationGet,
  } = useAxiosQuery({
    url: LEGAL_STATUTE_URL,
    queryKey: ['LEGAL-STATUTE-URL'],
    enabled: true,
  })

  //signatory
  const { data: dataSignatoryGet, isSuccess: isSignatoryDataSuccessGet } =
    useAxiosQuery({
      url: SIGNATORY_OWNER_URL,
      queryKey: ['SIGNATORY-OWNER-URL'],
      enabled: true,
    })
  //undertaking

  const { data: dataUndertakingGet, isSuccess: isSuccessUndertakingGet } =
    useAxiosQuery({
      url: UNDERTAKING_URL,
      queryKey: ['UNDERTAKING-URL'],
      enabled: true,
    })

  const completedInfoLoading =
    !isSuccessGazetteGet &&
    !isSuccessArticleOfAssociationGet &&
    !isSignatoryDataSuccessGet &&
    !isSuccessUndertakingGet

  return {
    dataGazetteGet,
    dataArticleOfAssociationGet,
    dataSignatoryGet,
    dataUndertakingGet,
    completedInfoLoading,
  }
}
