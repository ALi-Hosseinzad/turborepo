import React from 'react'
import Link from 'next/link'

const Tag = ({ tagInfo, onClick }) => {
  return (
    <button
      type="button"
      className="text-normal-xs sm:text-normal-sm flex justify-center items-center bg-tint-200 rounded-xl text-primary cursor-pointer py-1 px-4"
      onClick={onClick}
    >
      <Link href={`/tag/${tagInfo?.id}`}>{tagInfo.name}</Link>
    </button>
  )
}

export default Tag
