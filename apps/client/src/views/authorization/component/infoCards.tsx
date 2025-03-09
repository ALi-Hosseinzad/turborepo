import {
  BankCardGenuine,
  Box,
  CircularProgress,
  PlusCircleIcon,
  useBankAccountViewModel,
  useTranslations,
} from '../imports'

const InfoCards: React.FC<any> = ({
  handlerShowInputsBox,
  infoBankAccount,
  isProfile,
  handlelBankCardDelete,
}) => {
  const { loadingInfoBankAccount } = useBankAccountViewModel()
  const t = useTranslations()

  const hasBankAccounts = infoBankAccount?.data?.length > 0

  return (
    <div className="grid grid-cols-12 pb-8 gap-2">
      {hasBankAccounts
        ? infoBankAccount?.data?.map((item: any, index: number) => {
            const reject = item?.is_verify_label === 'رد شده'
            return (
              <div
                className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4"
                key={index}
              >
                {isProfile || reject ? (
                  <BankCardGenuine
                    numberOfCards={infoBankAccount.data.length}
                    cardInfo={item}
                    handleBankCardDeleteGenuine={() =>
                      handlelBankCardDelete(item.id)
                    }
                  />
                ) : (
                  <BankCardGenuine
                    numberOfCards={infoBankAccount.data.length}
                    cardInfo={item}
                  />
                )}
              </div>
            )
          })
        : null}
      {!hasBankAccounts && loadingInfoBankAccount ? (
        <div className="flex justify-center items-center">
          <CircularProgress disableShrink />
        </div>
      ) : null}
      {hasBankAccounts && infoBankAccount?.data?.length === 80 ? null : (
        <Box
          className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 bg-white border-dashed border-2 rounded-md border-[#BEBEBE]"
          onClick={handlerShowInputsBox}
        >
          <div className="flex flex-col justify-center items-center h-64 gap-4 cursor-pointer">
            <PlusCircleIcon />
            <p className="text-xl underline ">{t('addCard')}</p>
          </div>
        </Box>
      )}
    </div>
  )
}

export default InfoCards
