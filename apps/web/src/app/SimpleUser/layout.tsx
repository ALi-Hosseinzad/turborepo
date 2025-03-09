import CustomLayout from '@views/layouts'
import { Footer } from '@views/layouts/footer'
import Navbar from '@views/layouts/navBar'
import NoSsr from '@/configs/noSsr'
import GenerateMetadata from '@/utils/generateMetadata'
import '@ostigan-tailwind/configs/tailwind/globals.css'
import '@ostigan-tailwind/configs/tailwind/styles.css'

export const metadata = GenerateMetadata()
export default function RootLayout(props: any): React.ReactElement {
  const { children } = props

  return (
    <NoSsr>
      <CustomLayout>
        <nav>
          <Navbar />
        </nav>
        {children}
        <Footer />
      </CustomLayout>
    </NoSsr>
  )
}
