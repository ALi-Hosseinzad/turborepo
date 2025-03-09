const WalletTabLayout = ({ children1: Children1, children2: Children2 }) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      <div className="col-span-5 lg:col-span-3 lg:order-1 order-2">
        {Children1}
      </div>
      <div className="col-span-5 lg:col-span-2 bg-white p-4 mt-4 rounded-md h-fit lg:order-2 order-1">
        {Children2}
      </div>
    </div>
  )
}

export default WalletTabLayout
