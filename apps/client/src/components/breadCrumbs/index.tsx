import React from 'react'
import { Breadcrumbs } from '@mui/material'
import { useTranslations } from 'next-intl'
import { DASHBOARD } from '@/constants/routes'
import { Link } from '../nextIntl/navigation'

interface BreadCrumb {
  name: string
  url?: string
}

interface PropsType {
  breadCrumbs: BreadCrumb[]
}

const BreadCrumbs: React.FC<PropsType> = ({ breadCrumbs }: PropsType) => {
  const lastElement = breadCrumbs?.slice(-1)[0]
  const t = useTranslations()
  const getClassName = (
    lastElement: { name: any },
    breadCrumb: { name: any },
  ) => {
    if (lastElement?.name === breadCrumb?.name) {
      return 'text-medium-sm sm:text-medium-base xl:text-medium-base !text-[#01684E]'
    }
    return 'text-medium-sm sm:text-medium-base xl:text-medium-base !text-[#AEAEAE]'
  }

  return (
    <section className="flex items-center pt-6 pb-8">
      <Breadcrumbs aria-label="breadcrumb">
        <Link href={DASHBOARD}>
          <span className="flex items-center text-medium-sm sm:text-medium-base xl:text-medium-base !text-[#AEAEAE]">
            {t('dashboard')}
          </span>
        </Link>
        {breadCrumbs?.map((breadCrumb, index) => (
          <div key={index}>
            <Link href={breadCrumb?.url || ('#' as any)}>
              <span className={getClassName(lastElement, breadCrumb)}>
                {breadCrumb.name}
              </span>
            </Link>
            {breadCrumbs?.length - 1 !== index && <i />}
          </div>
        ))}
      </Breadcrumbs>
    </section>
  )
}

export default BreadCrumbs
