import type { ReactNode } from 'react'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import CustomLayout from '@views/layouts'
import { Footer } from '@views/layouts/footer'
import Navbar from '@views/layouts/navBar'
import { useDataFech } from '@/hooks/useFechData'
import { FOOTER_URL } from '@/constants/endPoints'
import { FOOTER } from '@/constants/queryKey'
import GenerateMetadata from '@/utils/generateMetadata'
import '@ostigan-tailwind/configs/tailwind/globals.css'
import '@ostigan-tailwind/configs/tailwind/styles.css'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata = GenerateMetadata(
  { title: 'Home' },
  { withSuffix: true },
)

const RootLayout = async ({
  children,
}: RootLayoutProps): Promise<JSX.Element> => {
  const footerQueryClient = await useDataFech({
    nameQueryKey: FOOTER,
    urlQueryFn: `${FOOTER_URL}/10`,
  })

  return (
    <CustomLayout>
      <nav>
        <Navbar />
      </nav>
      {children}
      <HydrationBoundary state={dehydrate(footerQueryClient)}>
        <Footer />
      </HydrationBoundary>
    </CustomLayout>
  )
}
export default RootLayout
