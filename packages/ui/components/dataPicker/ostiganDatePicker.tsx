'use client'

import { useEffect } from 'react'
import { default as moment } from 'jalali-moment'
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { faIR } from '@mui/x-date-pickers/locales'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import type { DatepickerPropsInterface } from '../../types/components'
import { LabelField } from '../elements/label'

export const OstiganDatePicker: React.FC<DatepickerPropsInterface> = (
  props,
) => {
  const {
    label,
    defaultValue = undefined,
    className,
    classnametitle,
    onClose,
    error = false,
    // value,
    helperText,
    title,
    name,
    onChange,
    setFieldValue,
    disabled = false,
  } = props
  const convertDate = (defaultValue: string): Date => {
    return new Date(
      moment.from(defaultValue, 'fa', 'jYYYY-jMM-jDD').format('YYYY-MM-DD'),
    )
  }
  useEffect(() => {
    if (defaultValue && setFieldValue) {
      setFieldValue(name, convertDate(defaultValue))
    }
  }, [defaultValue, name, setFieldValue])
  return (
    <div className={className}>
      <LabelField
        title={title}
        className={classnametitle}
        htmlFor={name}
        disabled={disabled}
      />
      <LocalizationProvider
        // localeText={{
        //   cancelButtonLabel: 'لغو',
        //   clearButtonLabel: 'پاک کردن',
        //   okButtonLabel: 'تأیید',
        //   todayButtonLabel: 'امروز را انتخاب کنید',
        //   dateInputLabel: 'انتخاب تاریخ',
        //   dateRangeInputLabel: 'انتخاب بازه تاریخی',
        //   monthYearLabel: 'ماه / سال',
        //   openPickerTooltip: 'باز کردن تقویم',
        //   nextMonthLabel: 'ماه بعد',
        //   previousMonthLabel: 'ماه قبل',
        //   nextYearLabel: 'سال بعد',
        //   previousYearLabel: 'سال قبل',
        //   keyboardInstruction: 'استفاده از کلیدهای جهت‌دهی برای انتخاب تاریخ',
        //   openTooltip: 'باز کردن',
        //   closeTooltip: 'بستن',
        //   keyboardInputInstructions:
        //     'استفاده از کلیدهای جهت‌دهی برای تغییر تاریخ',
        //   prevMonthAriaLabel: 'ماه قبل',
        //   nextMonthAriaLabel: 'ماه بعد',
        //   prevYearAriaLabel: 'سال قبل',
        //   nextYearAriaLabel: 'سال بعد',
        //   switchToMonthViewLabel: 'تغییر به نمای ماه',
        //   switchToYearViewLabel: 'تغییر به نمای سال',
        //   openPickerPrompt: 'باز کردن تقویم',
        //   datePickerPrompt: 'انتخاب تاریخ',
        //   datePickerYearPrompt: 'انتخاب سال',
        //   datePickerMonthYearPrompt: 'انتخاب ماه و سال',
        // }}
        localeText={
          faIR.components.MuiLocalizationProvider.defaultProps.localeText
        }
        dateAdapter={AdapterDateFnsJalali}
      >
        {/* // TODO:what to do about it to eliminate as string */}
        <DatePicker
          defaultValue={
            defaultValue === undefined ? convertDate : convertDate(defaultValue)
          }
          className="w-full"
          disabled={disabled}
          slotProps={{
            textField: {
              size: 'medium',
              error,
            },
          }}
          label={label}
          onClose={onClose}
          onChange={(e) => {
            onChange && onChange(e)
          }}
        />
        {error ? (
          <div className="text-[#F5455B] text-[10px] pt-1">{helperText}</div>
        ) : null}
      </LocalizationProvider>
    </div>
  )
}
