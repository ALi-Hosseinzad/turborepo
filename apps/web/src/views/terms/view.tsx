'use client'

import { t } from './imports'

const titleStyles = 'text-trueGray-900 text-2xl font-medium mb-[18px]'

const TermsView = (props: any): JSX.Element => {
  const { terms } = props

  const scrollTo = (e: { currentTarget: { value: any } }): void => {
    const id = e.currentTarget.value
    const section = document.getElementById(id) as HTMLElement
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="grid grid-cols-10 gap-6 px-32 mt-[107px]">
      <div className="col-span-2">
        <p className={titleStyles}>{t('subjectsRefrence')}</p>
        <div className="px-6 py-8 rounded-xl bg-trueGray-250 top-10 sticky">
          {terms?.map(({ title, _id: id }: any) => (
            <button
              key={id}
              type="button"
              id={`#${id}`}
              value={id}
              className="font-medium text-trueGray-900 pb-6 text-lg block text-right"
              onClick={scrollTo}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
      <div className="grid col-span-8 border-red-500 border-solid">
        <p className={titleStyles}>{t('termsAndCondition')}</p>
        {terms?.map(({ _id: id, description, title }: any) => (
          <div
            key={id}
            className="shadow-terms px-4 pb-8 rounded-[12px] bg-white mb-6"
          >
            <p
              id={id}
              className="font-semibold border-b-[1px] border-shade-200 border-solid py-5 mb-4"
            >
              {title}
            </p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TermsView
