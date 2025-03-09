'use client'

import React, { useEffect, useState } from 'react'
import { useTranslations } from 'use-intl'
import { CircularProgress, MenuItem, Select } from '@mui/material'
import type {
  OstiganSelectType,
  SelectChangeEvent,
} from '../../../types/select'
import { ArrowDownIcon, PlusCircleIcon, PlusFillCircleIcon } from '../../icons'
import { OstiganButton } from '../button/ostiganButton'
import { OstiganTextField } from '../input/ostiganTextField'
import { HelperText, LabelField } from '../label'

export const OstiganSelect: React.FC<OstiganSelectType> = (props) => {
  const t = useTranslations()
  const {
    defaultValue,
    sxPaper,
    value,
    classnametitle,
    listOptions,
    optionLabel = 'label',
    optionValue = 'value',
    variant = 'outlined',
    name,
    heightMenu = 'auto',
    multiple,
    size = 'Large',
    selectLabel,
    optionTextColor = 'var(--trueGray-700)',
    hoverBackgroundColorOption = 'var(--tint-100)',
    focusedBackgroundColorOption = 'var(--tint-400)',
    borderColor = 'var(--trueGray-500)',
    hoverBorderColor = 'var(--trueGray-500)',
    focusedBorderColor = 'var(--primary-active)',
    error,
    helperText,
    placeholder,
    disabled,
    onChange,
    onBlur,
    onFocus,
    isLoading,

    setFieldValue,
    addintionalData = '',
    onScrollToLastItem,
    addExteraOption = false,
  } = props
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [optionsList, setOptionsList] = useState<
    Record<string, any>[] | undefined
  >(listOptions)

  let height: string
  switch (size) {
    case 'Large':
      height = '52px'
      break
    case 'Medium':
      height = '44px'
      break
    case 'Small':
      height = '40px'
      break
    default:
      height = '40px'
  }

  const sx = {
    '.MuiInputBase-root': { height },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: focusedBorderColor,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: hoverBorderColor,
    },
  }

  const sxMenuProps = {
    // height: '100px',
    color: optionTextColor,
    '& .MuiMenuItem-root.Mui-selected': {
      backgroundColor: focusedBackgroundColorOption,
    },
    '& .MuiMenuItem-root:hover': {
      backgroundColor: hoverBackgroundColorOption,
    },
    '& .MuiMenuItem-root.Mui-selected:hover': {
      backgroundColor: focusedBackgroundColorOption,
    },
  }

  const renderIconComponent = (props: any): JSX.Element => {
    return (
      <ArrowDownIcon
        color={disabled ? 'var(--trueGray-600)' : 'var(--trueGray-700)'}
        {...props}
      />
    )
  }

  const renderValue = (selectedValue: any): string[] | string | JSX.Element => {
    const defaultVal = defaultValue ? (
      defaultValue?.[optionLabel]
    ) : (
      <span className="text-trueGray-500">{placeholder}</span>
    )
    if (multiple) {
      if (selectedValue?.length === 0) {
        return defaultVal
      }
      return selectedValue
        ?.map((item: any) =>
          optionLabelSplit.length > 1
            ? item?.[optionLabelSplit[0]]?.[optionLabelSplit[1]]
            : item[optionLabel],
        )
        .join(', ')

      //TODO:please dont remove this comment part I need them
      // const removeDuplicates = selectedValue.filter((item, index) => {
      //   return (
      //     index ===
      //     selectedValue.findIndex(
      //       (o) => item?.[optionLabel] === o?.[optionLabel],
      //     )
      //   )
      // })

      // return removeDuplicates
      //   ?.map((item: any) =>
      //     optionLabelSplit.length > 1
      //       ? item?.[optionLabelSplit[0]]?.[optionLabelSplit[1]]
      //       : item[optionLabel],
      //   )
      //   .join(', ')
    }

    if (selectedValue) {
      return `${selectedValue[optionLabel]} ${addintionalData}`
    }
    return defaultVal
  }

  useEffect(() => {
    setOptionsList(listOptions)
    if (defaultValue != undefined) {
      setFieldValue &&
        setFieldValue(name, multiple ? [{ ...defaultValue }] : defaultValue)
    }
  }, [isLoading, listOptions, defaultValue])

  const optionLabelSplit = optionLabel.split('.')

  return (
    <div className="flex flex-col">
      <LabelField
        title={selectLabel}
        htmlFor={name}
        disabled={disabled}
        className={`${classnametitle} mb-2`}
      />
      <Select
        name={name}
        value={value}
        variant={variant}
        IconComponent={renderIconComponent}
        multiple={multiple}
        displayEmpty
        fullWidth
        disabled={disabled}
        error={error}
        sx={sx}
        MenuProps={{
          PaperProps: {
            sx: { ...sxMenuProps, ...sxPaper, height: heightMenu },

            onScroll: (e: any) => {
              const element = e.target
              if (
                element.scrollHeight - element.scrollTop ===
                element.clientHeight
              ) {
                onScrollToLastItem && onScrollToLastItem()
              }
            },
          },
        }}
        renderValue={(selectedValue) => renderValue(selectedValue)}
        style={{ height }}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={(event: SelectChangeEvent) => {
          onChange && onChange(event.target.value)
        }}
      >
        {optionsList?.map((option) => {
          return (
            <MenuItem
              key={option[optionValue]}
              value={option as any}
              style={{ margin: '4px', borderRadius: '8px', direction: 'rtl' }}
              disabled={option?.disabledItem ? option?.disabledItem : false}
            >
              {optionLabelSplit.length > 1
                ? option?.[optionLabelSplit[0]]?.[optionLabelSplit[1]]
                : option[optionLabel]}
              {addintionalData}
            </MenuItem>
          )
        })}

        {isLoading ? (
          <MenuItem
            style={{
              margin: '4px',
              borderRadius: '8px',
              direction: 'rtl',
              gap: '5px',
            }}
          >
            <CircularProgress size={13} />
            <span>{t('loading')}...</span>
          </MenuItem>
        ) : null}

        {addExteraOption ? (
          <MenuItem
            style={{ margin: '4px', borderRadius: '8px', direction: 'rtl' }}
          >
            <button
              type="button"
              className="flex justify-between items-center w-full"
              onClick={(e) => {
                e.stopPropagation()
                setShowInput(!showInput)
              }}
            >
              <div>افزودن دلیل جدید</div>
              {showInput ? (
                <PlusFillCircleIcon />
              ) : (
                <PlusCircleIcon color="#01bc8d" />
              )}
            </button>
          </MenuItem>
        ) : null}

        {showInput ? (
          <MenuItem
            style={{ direction: 'rtl' }}
            onClick={(event) => {
              event.stopPropagation()
            }}
          >
            <div className="flex flex-col gap-4 w-full">
              <div
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <OstiganTextField
                  name="exteraOption"
                  placeholder="دلیل مورد نظر را وارد کنید"
                  fullWidth
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> }
                  }) => {
                    setInputValue(e.target.value)
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2 w-full">
                <OstiganButton
                  type="button"
                  variant="contained"
                  fullWidth
                  padding="6px 20px"
                  disabled={!inputValue}
                  handleClick={(e) => {
                    e.stopPropagation()
                    setOptionsList([
                      ...(optionsList || []),
                      { description: inputValue },
                    ])
                    setShowInput(false)
                  }}
                >
                  {t('increase')}
                </OstiganButton>
                <OstiganButton
                  type="button"
                  styleType="success"
                  variant="outlined"
                  fullWidth
                  padding="6px 20px"
                  handleClick={(e) => {
                    e.stopPropagation()
                    setShowInput(false)
                  }}
                >
                  {t('return')}
                </OstiganButton>
              </div>
            </div>
          </MenuItem>
        ) : null}
      </Select>
      {error ? <HelperText>{helperText}</HelperText> : null}
    </div>
  )
}
