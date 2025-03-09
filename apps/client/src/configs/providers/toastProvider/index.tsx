'use client'

import { ToastContainer } from 'react-toastify'
import './toast.css'
import 'react-toastify/dist/ReactToastify.css'

const contextClass = {
  success: 'bg-tint-100 border-1 border-tint-300',
  error: 'bg-error-background border-1 border-error-border',
  warning: 'bg-warning-background border-1 border-warning-border',
  info: 'bg-tint-500 ',
  default: 'bg-error-border border-1 border-error-border',
  dark: 'bg-white-600 font-gray-300',
}

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      {children}
      <ToastContainer
        //TODO: { type }: any
        toastClassName={({ type }: any) =>
          `${
            contextClass[type || 'default']
          } relative flex  p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer`
        }
        bodyClassName={() =>
          '  text-sm flex justify-flex-start text-black items-center font-white font-med block p-3 '
        }
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        closeButton={false}
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}
