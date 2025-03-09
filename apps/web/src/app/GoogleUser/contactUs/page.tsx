import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import ContactUs from '@views/contactUs'
import { t } from '@/configs/language/translate'
import { useDataFech } from '@/hooks/useFechData'
import GenerateMetadata from '@/utils/generateMetadata'

export const metadata = GenerateMetadata(
  { title: t('contactUs') },
  { withSuffix: true },
)
const ContactUsPage = async (): Promise<JSX.Element> => {
  const queryClient = await useDataFech({
    nameQueryKey: 'ContactUs',
    urlQueryFn: 'landing/contact-us',
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactUs />
    </HydrationBoundary>
  )
}

export default ContactUsPage
