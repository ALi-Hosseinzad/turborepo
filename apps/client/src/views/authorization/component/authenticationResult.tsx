import type { AuthenticationResultItem } from '@/types/authorization/authenticationResult'
import type { AuthenticationResultProps } from '../imports'
import { ToastIconError, useTranslations } from '../imports'

export const AuthenticationResult: React.FC<AuthenticationResultProps> = ({
  data,
  isReject,
}) => {
  const t = useTranslations()
  return (
    <>
      {isReject ? (
        <div className="flex  flex-col  w-full min-h-14 my-12 px-6 py-6 bg-error-ffa6b11a border border-[#D80027] rounded-xl">
          <p className="text-medium-sm md:text-medium-base">
            {t('authResultMessage')}
          </p>
          <div className="flex flex-col pt-3 flex-wrap">
            {data?.map((item: AuthenticationResultItem, index: number) => (
              <div className="flex items-center basis-1/2 mb-3" key={index}>
                <div className="flex pl-2 justify-start">
                  <ToastIconError className="w-5 h-5" />
                </div>
                <p className="text-normal-sm md:text-normal-base">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}
