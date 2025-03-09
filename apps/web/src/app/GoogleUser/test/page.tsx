import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import CardPdpView from '@views/pdp/giftCardProducts/view'
import { useDataFech } from '@/hooks/useFechData'
import GenerateMetadata from '@/utils/generateMetadata'

export const metadata = GenerateMetadata({ title: 'تست' }, { withSuffix: true })

const HomePage = async (): Promise<JSX.Element> => {
  const queryClient = await useDataFech({
    nameQueryKey: 'users',
    urlQueryFn: 'gift-card-package/36',
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CardPdpView />
    </HydrationBoundary>
  )
}

export default HomePage
