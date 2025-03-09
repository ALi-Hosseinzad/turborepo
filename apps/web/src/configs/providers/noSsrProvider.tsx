import React from 'react'
import dynamic from 'next/dynamic'

const NoSsrProvider = (props: any): any => {
  return <>{props.children}</>
}

export default dynamic(() => Promise.resolve(NoSsrProvider), {
  ssr: false,
})
