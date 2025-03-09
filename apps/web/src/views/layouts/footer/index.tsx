'use client'

import React from 'react'
import { FooterView } from './view'
import { useFooterViewModel } from './viewModel'

export const Footer = (): JSX.Element => {
  const { footerQuery } = useFooterViewModel()

  return <FooterView data={footerQuery?.data} />
}
