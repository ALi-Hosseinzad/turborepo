'use client'

import { useTranslations } from 'next-intl'
import useWindowDimensions from '@/hooks/useWindowDimension'
import { OstiganLogoFaIcon, OstiganLogoIcon } from 'ui/components/icons'

const AuthLayout = ({ children, title = 't' }): any => {
  const { width } = useWindowDimensions()
  const t = useTranslations()

  const width426 = width < 426 ? '300px' : '600px'
  const width1280 =
    width > 1280 || (width > 769 && width < 425) ? '450px' : width426

  const widthStyle = {
    maxWidth: width ? width1280 : '0px',
  }

  return (
    <div className="xl:grid xl:grid-cols-12 bg-customWhite h-screen">
      <div className="col-span-7 flex flex-col justify-center items-center w-full h-full">
        <div className="xs:w-5/6 md:w-3/5" style={{ ...widthStyle }}>
          <div className="flex justify-center items-center w-full mx-auto p-2">
            <div className="flex flex-col w-full">
              <div className="flex justify-center gap-4">
                <OstiganLogoIcon />
                <OstiganLogoFaIcon />
              </div>
              <p className="title-xl text-primary-default sm:pt-20 pt-12 sm:pb-8 pb-4">
                {title}
              </p>
              {children}
            </div>
          </div>
          <div className="text-normal-xs text-right mx-auto pt-10 px-2">
            <p>{t('weUseCookie')}</p>
          </div>
        </div>
      </div>
      {width > 1279 && (
        <div className="relative col-span-5 bg-primary">
          {/* <Image
            src='https:/panel.ostigan.com/svg/login.png'
            blurDataURL='https:/panel.ostigan.com/svg/login.png'
            className='absolute rounded-md bg-customWhite'
            fill='true'
            priority
            sizes='100%'
            alt={t('ostigan')}
            quality={70}
          /> */}
          <img
            className="absolute rounded-md bg-customWhite h-screen w-full"
            src="/login.png"
            alt={t('ostigan')}
          />
        </div>
      )}
    </div>
  )
}

export default AuthLayout
