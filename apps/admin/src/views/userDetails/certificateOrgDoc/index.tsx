'use client'

import React from 'react'
import { CertificateOrgDocView } from './view'
import { useCertificateOrgDocViewModel } from './viewModel'

const CertificateOrgDoc = (props: any): JSX.Element => {
  const { handleConfirm, setDisapprovalResult } =
    useCertificateOrgDocViewModel()

  return (
    <CertificateOrgDocView
      {...props}
      handleConfirm={handleConfirm}
      setDisapprovalResult={setDisapprovalResult}
    />
  )
}

export default CertificateOrgDoc
