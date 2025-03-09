'use client'

import { ArrowLeftIcon, ArrowToSideLeftIcon, useState } from '../../imports'

const TicketFAQ = ({ faqList }) => {
  const [curFaq, setCurFaq] = useState({ answer: '', question: '' })

  const handleClick = (e: any) => {
    const { value } = e.currentTarget
    const valueArr = value.split('*/*')
    const answer = valueArr[1]
    const question = valueArr[0]
    setCurFaq({ answer, question })
  }

  const back = () => {
    setCurFaq({ answer: '', question: '' })
  }

  return (
    <div>
      {curFaq.answer !== '' ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center text-normal-lg w-full">
            {curFaq.answer}
            <ArrowLeftIcon className="w-6 h-6 cursor-pointer" onClick={back} />
          </div>
          <p className="text-normal-base text-justify">{curFaq.question}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {faqList?.map(({ answer, question }: any) => (
            <div className="flex justify-between bg-zinc-50 hover:bg-tint-100 rounded-m px-6 py-3">
              <span>{question}</span>
              <button
                type="button"
                value={`${answer}*/*${question}`}
                className="cursor-pointer"
                onClick={handleClick}
              >
                <ArrowToSideLeftIcon color="black" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TicketFAQ
