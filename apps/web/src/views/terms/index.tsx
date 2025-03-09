'use client'

import { TermsView, useTermsViewModel } from './imports'

const Terms = (): JSX.Element => {
  const { termsData } = useTermsViewModel()
  return <TermsView terms={termsData} />
}

export default Terms
