import { toast } from 'react-toastify'
import Link from 'next/link'
import {
  ToastIconError,
  ToastIconSuccess,
  ToastIconwarning,
} from '../components/icons'

const CustomToastWithLink = (message: string, link?: any): JSX.Element => {
  return (
    <>
      <span className="px-2">{message}</span>
      {link ? (
        <span className="text-link underline decoration-1 py-2">
          <Link href={link}>کلیک کنید</Link>
        </span>
      ) : null}
    </>
  )
}

export function showSuccess(
  message: string,
  link = false,
  themeTost?: any,
): any {
  toast.success(CustomToastWithLink(message, link), {
    theme: themeTost ? themeTost : 'light',
    icon: <ToastIconSuccess />,
  })
}

export function showError(message: string, link = false, themeTost?: any): any {
  return toast.error(CustomToastWithLink(message, link), {
    theme: themeTost ? themeTost : 'light',
    icon: <ToastIconError />,
  })
}

export function showWarning(
  message: string,
  link = false,
  themeTost?: any,
): any {
  toast.warning(CustomToastWithLink(message, link), {
    theme: themeTost ? themeTost : 'light',
    icon: <ToastIconwarning />,
  })
}

export function showInfo(message: string, link = false, themeTost?: any): any {
  toast.info(CustomToastWithLink(message, link), {
    theme: themeTost ? themeTost : 'light',
  })
}

export function showDefault(
  message: string,
  link = false,
  themeTost?: any,
): any {
  toast.info(CustomToastWithLink(message, link), {
    theme: themeTost ? themeTost : 'light',
  })
}
