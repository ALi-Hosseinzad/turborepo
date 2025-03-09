import type { Metadata } from 'next'
import type {
  AbsoluteString,
  DefaultTemplateString,
} from 'next/dist/lib/metadata/types/metadata-types'
import metadataDefault from '../constants/metadataDefault'
import type { GenerateMetadataOptionsType } from '../types/metadata'

const GenerateMetadata = (
  metadata?: Partial<Metadata>,
  options?: GenerateMetadataOptionsType,
): Metadata => {
  let title: string | DefaultTemplateString | AbsoluteString

  const description = metadata?.description ?? metadataDefault.description
  if (metadata?.title) {
    title = metadata.title
  } else {
    title = metadataDefault.name
  }
  if (options?.withSuffix) {
    title = `${title.toString()} | ${metadataDefault.name.toString()}`
  }

  const metadataResult: Metadata = {
    ...metadata,
    title,
    description,
    keywords: metadata?.keywords ?? metadataDefault.keywords,
    applicationName: metadataDefault.name,
    metadataBase:
      metadata?.metadataBase ?? new URL('https://develop.ostigan.com/docs'),
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: metadataDefault.name,
    },
  }

  return metadataResult
}

export default GenerateMetadata
