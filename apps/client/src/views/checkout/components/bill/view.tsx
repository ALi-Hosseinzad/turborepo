'use client'

import Image from 'next/image'
import {
  FormikCheckbox,
  FormWrapper,
  OstiganButton,
  TextIcon,
  useRouter,
  useState,
  useTranslations,
} from '../../import'
import { AddBalanceFormModal } from '../addBalanceModal/index'

function BillView(props) {
  const {
    checkoutImageInfo,
    orderBillData,
    initialValues,
    onSubmit,
    isPending,
    isSuccess,
    AddBalanceInitValue,
    orderStatus,
  } = props
  const [showModal, setShowModal] = useState(false)
  const t = useTranslations()
  const router = useRouter()
  return (
    <>
      <AddBalanceFormModal
        open={showModal}
        initialValues={AddBalanceInitValue}
        handleClose={() => {
          setShowModal(false)
        }}
      />
      <div className="p-4 flex flex-col h-full justify-between">
        <div className="flex flex-col gap-4">
          <div className="m-4 justify-center hidden lg:flex">
            <Image
              sizes="100%"
              width={0}
              height={0}
              style={{ width: '100%', height: '11vw' }}
              src={checkoutImageInfo.src}
              alt={checkoutImageInfo?.alt}
            />
          </div>
          <div className="flex flex-col">
            {Object.values(orderBillData).map((item: any) => (
              <div
                key={item?.key}
                className="flex flex-wrap justify-between py-3 border-b last:border-none border-gray-200"
              >
                <p className="text-medium-sm md:text-medium-base">
                  {item?.title}
                </p>
                <p className="text-medium-sm md:text-medium-base">
                  {item?.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <FormWrapper initialValues={initialValues} onSubmit={onSubmit}>
          {(formikProps) => (
            <div className="flex flex-col gap-4">
              {AddBalanceInitValue?.amount < 0 && (
                <FormikCheckbox
                  name="acceptRules"
                  title={t('acceptRules')}
                  label={t('acceptRules')}
                  checkboxClassName="text-medium-sm md:text-medium-base pt-4 -mr-3 flex items-start"
                />
              )}
              <div className="flex justify-between items-center">
                {AddBalanceInitValue?.amount < 0 ? (
                  <OstiganButton
                    variant="contained"
                    type="submit"
                    isLoading={isPending || isSuccess}
                    disabled={
                      isPending ||
                      !formikProps.values.acceptRules ||
                      orderStatus !== 'pending' ||
                      isSuccess
                    }
                    fontSize={18}
                    padding={10}
                    width="70%"
                  >
                    {orderStatus !== 'pending' ? t('paid') : t('payment')}
                  </OstiganButton>
                ) : (
                  <OstiganButton
                    variant="contained"
                    type="button"
                    fontSize={18}
                    padding={10}
                    width="70%"
                    handleClick={() => setShowModal(true)}
                  >
                    {t('addBalanceMessage')}
                  </OstiganButton>
                )}

                <TextIcon
                  icon={null}
                  text={
                    <span className="text-medium-base md:text-medium-lg px-4 text-error-default">
                      {t('cancel')}
                    </span>
                  }
                  textClass="text-medium-base md:text-normal-xl text-primary cursor-pointer py-3"
                  flexRowReverse=" flex-row-reverse"
                  onClick={() => router.back()}
                />
              </div>
            </div>
          )}
        </FormWrapper>
      </div>
    </>
  )
}

export default BillView
