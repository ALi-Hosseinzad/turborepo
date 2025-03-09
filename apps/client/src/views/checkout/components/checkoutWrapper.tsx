import { type CheckoutWrapperProps } from '../import'

const CheckoutWrapper: React.FC<CheckoutWrapperProps> = ({ children }) => {
  return (
    <div className="m-0 lg:mx-[2vw] xl:mx-[5vw]">
      <div className="bg-white rounded-lg p-4 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row ">{children}</div>
      </div>
    </div>
  )
}

export default CheckoutWrapper
