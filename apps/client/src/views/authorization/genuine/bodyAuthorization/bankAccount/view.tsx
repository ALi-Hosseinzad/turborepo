import {
  AddInfoDisplayCards,
  DeleteModal,
  FormikTextField,
  InputAdornment,
  LabelField,
  LayoutAuth,
  useBankAccountViewModel,
  useState,
  useTranslations,
} from '../../imports'

export const BankAccountView = (props: { isProfile?: boolean }) => {
  const { isProfile } = props
  const t = useTranslations()
  const [showInputsBox, setShowInputsBox] = useState<boolean>(false)

  const [openDeleteModal, setOpenDeleteModal] = useState({
    status: false,
    userId: '',
  })

  const {
    initialValues,
    validationSchema,
    handleSubmit,
    handlerShowInputsBox,
    infoBankAccount,
    isPending,
    textWarning,
    loadingInfoBankAccount,
    handleDelete,
  } = useBankAccountViewModel(
    setShowInputsBox,
    showInputsBox,
    openDeleteModal,
    setOpenDeleteModal,
  )

  return (
    <>
      <LayoutAuth
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
        disabled={isPending}
        showWarning={Boolean(textWarning)}
        showOstiganButton={showInputsBox}
        textWarning={textWarning}
        titleLayout="bankInfo"
      >
        <div className="bg-white">
          {isProfile ? (
            <AddInfoDisplayCards
              isProfile
              handlerShowInputsBox={handlerShowInputsBox}
              infoBankAccount={infoBankAccount}
              handlelBankCardDelete={(id: any) =>
                setOpenDeleteModal({ status: true, userId: id })
              }
              loading={loadingInfoBankAccount}
            />
          ) : (
            <AddInfoDisplayCards
              infoBankAccount={infoBankAccount}
              handlerShowInputsBox={handlerShowInputsBox}
              handlelBankCardDelete={(id: any) =>
                setOpenDeleteModal({ status: true, userId: id })
              }
            />
          )}
        </div>
        <div
          className={`bg-white  transition-all duration-2000 overflow-hidden ${
            showInputsBox ? 'opacity-100   py-8' : 'opacity-0 h-0'
          }`}
        >
          <div className="flex sm:flex-row flex-col justify-start items-start w-full gap-4 ">
            <div className="flex flex-col basis-full w-full sm:basis-1/2 ">
              <LabelField htmlFor="card_number" title={t('cardNumber')} />
              <div dir="ltr" className="w-full ">
                <FormikTextField
                  name="card_number"
                  type="text"
                  placeholder={`${t('example')}: 5362141014545855`}
                  size="small"
                  // disabled={isVerify}
                  classnametitle="!text-lg	!font-medium !leading-9"
                />
              </div>
            </div>
            <div className="flex flex-col basis-full w-full sm:basis-1/2 ">
              <LabelField htmlFor="sheba_number" title={t('shebaNmber')} />
              <div dir="ltr" className="w-full">
                <FormikTextField
                  name="sheba_number"
                  type="text"
                  placeholder={`${t('example')}: 545582000000000000069`}
                  size="small"
                  classnametitle="!text-lg	!font-medium !leading-9"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <p className="m-2">IR</p>
                      </InputAdornment>
                    ),
                  }}
                  // disabled={isVerify}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutAuth>

      <DeleteModal
        headerTitle={t('deleteBankCard')}
        rejectTextButton={t('return')}
        acceptTextButton={t('delete')}
        handleClose={() => {
          setOpenDeleteModal({ status: false, userId: '' })
        }}
        styleTypeSuccessBtn="success"
        open={openDeleteModal.status}
        isLoading={false}
        onSuccess={handleDelete}
      >
        <div className="flex justify-center items-center p-8">
          {t('moduleDeleteBankCard')}
        </div>
      </DeleteModal>
    </>
  )
}
