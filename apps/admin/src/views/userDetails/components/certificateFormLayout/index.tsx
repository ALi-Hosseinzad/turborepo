import {
  CertificateFormLayoutView,
  Loading,
  useCertificateFormLayoutViewModel,
} from '../../imports'

export const CertificateFormLayout = (props: any): JSX.Element => {
  const viewModelProps = useCertificateFormLayoutViewModel(
    props?.refetchUserInfo,
  )

  return (
    <>
      <CertificateFormLayoutView {...props} {...viewModelProps}>
        {props.children}
      </CertificateFormLayoutView>
      <Loading isLoading={viewModelProps?.isPending} />
    </>
  )
}
