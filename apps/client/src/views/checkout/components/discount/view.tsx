import React from 'react'
import {
  DiscountIcon,
  FormikTextField,
  FormWrapper,
  InputAdornment,
  OstiganButton,
  useTranslations,
} from '../../import'

const DiscountView = (props) => {
  const { initialValues, hasDiscount, onSubmit, isPending, orderStatus } = props
  const t = useTranslations()

  return (
    <FormWrapper initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => (
        <div className="rounded-lg border border-[#E5E5E5] border-solid p-4">
          <div className="flex justify-between items-center">
            <p className="title-base md:title-lg">{t('enterDiscountCode')}</p>
          </div>
          <div className="col-span-7 pt-5 sm:col-span-8 lg:col-span-7 w-full">
            <FormikTextField
              name="discountCode"
              sizeInput="Medium"
              placeholder={t('enterDiscountCode')}
              disabled={hasDiscount || orderStatus !== 'pending'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <OstiganButton
                      variant={!hasDiscount ? 'contained' : 'text'}
                      type="submit"
                      isLoading={isPending}
                      hoverColor={
                        !hasDiscount
                          ? 'var(--customWhite)'
                          : 'var(--error-default)'
                      }
                      hoverBackgroundColor={
                        !hasDiscount ? 'var(--primary-hover)' : 'transparent'
                      }
                      color={
                        !hasDiscount
                          ? 'var(--customWhite)'
                          : 'var(--error-default)'
                      }
                      disabled={
                        !formikProps?.values?.discountCode ||
                        isPending ||
                        orderStatus !== 'pending'
                      }
                      padding="7px 10px"
                      fontSize={14}
                    >
                      {!hasDiscount ? t('applyCode') : t('removeCode')}
                    </OstiganButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    <DiscountIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      )}
    </FormWrapper>
  )
}

export default DiscountView
