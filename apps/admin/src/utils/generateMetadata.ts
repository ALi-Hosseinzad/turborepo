import type { Metadata } from 'next'
import type {
  AbsoluteString,
  DefaultTemplateString,
} from 'next/dist/lib/metadata/types/metadata-types'

const GenerateMetadata = (
  metadata?: Partial<Metadata>,
  options?: any,
): Metadata => {
  let title: string | DefaultTemplateString | AbsoluteString
  const headerAdmin = ' پنل ادمین استیگان '

  const description = metadata?.description ?? headerAdmin
  if (metadata?.title) {
    title = metadata.title
  } else {
    title = headerAdmin
  }
  if (options?.withSuffix) {
    title = ` ${headerAdmin} | ${title.toString()}`
  }

  const metadataResult: Metadata = {
    ...metadata,
    title,
    description,
    keywords: metadata?.keywords ?? headerAdmin,
    applicationName: headerAdmin,
    metadataBase:
      metadata?.metadataBase ?? new URL('https://develop.ostigan.com/docs'),
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: headerAdmin,
    },
  }

  return metadataResult
}

export default GenerateMetadata
