'use client'

import type { SyntheticEvent } from 'react'
import React, { useEffect, useState } from 'react'
// import type { OstiganAutoCompleteType } from 'types'
import { Autocomplete, Paper } from '@mui/material'
import type { OstiganAutoCompleteType } from '../../../types'
import { AlertIcon, ArrowDownIcon } from '../../icons'
import { OstiganCheckbox } from '../checkbox/ostiganCheckbox'
import { OstiganTextField } from '../input/ostiganTextField'
import { LabelField } from '../label'

// TODO: MEHRI
export const OstiganAutoComplete: React.FC<OstiganAutoCompleteType> = (
  props,
) => {
  const {
    listOption = [],
    optionTitle = 'defaultKey',
    name,
    value,
    autoCompleteLabel,
    multiSelection = false,
    placeholder,
    hasCheckbox = false,
    numberMenuColumns = 1,
    limitTags = 2,
    hoverBackgroundColorOption = 'var(--tint-100)',
    focusedBackgroundColorOption = 'var(--tint-400)',
    // groupedOptions,
    error,
    helperText,
    isLoading,
    disabled = false,
    arrowIcon = (
      <ArrowDownIcon
        color={disabled ? 'var(--trueGray-600)' : 'var(--trueGray-700)'}
      />
    ),
    defaultValue,
    setFieldValue = () => {
      /* intentionally empty */
    },

    optionDisabled,
    onBlur,
    onChange,
    onChangeHandler,
  } = props
  const [inputValue, setInputValue] = useState<any>('')
  const [open, setOpen] = useState<any>(false)
  const [firstLoad, setFirstLoad] = useState<any>(true)

  // const [optionsList, setOptionsList] = useState(listOption)
  const loading = isLoading && listOption?.length === 0
  // const options: Record<string, any> = groupedOptions
  //   ? groupedOptions
  //   : optionsList

  const sxPaperComponent = {
    direction: 'ltr',
    padding: '10px',
    fontSize: '25px',
    '& .MuiAutocomplete-listbox': {
      display: 'grid',
      gridTemplateColumns: `repeat(${numberMenuColumns},  1fr)`,
      '& .MuiAutocomplete-option.Mui-focused': {
        backgroundColor: hoverBackgroundColorOption,
      },
      '& .MuiAutocomplete-option[aria-selected="true"]': {
        backgroundColor: focusedBackgroundColorOption,
      },
      '& .MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
        backgroundColor: focusedBackgroundColorOption,
      },
    },
  }

  const sxRenderInput = {
    padding: 0,
    display: 'flex',
    justifyContent: 'rigth',
    alignItems: 'rigth',
    top: '-0.5vh',
    '&.MuiInputLabel-shrink': {
      top: 0,
    },
    '& .MuiAutocomplete-input': {
      padding: '0px 10px !important',
    },
  }

  const sxAutoComplete = {
    '&  .MuiOutlinedInput-root': {
      padding: '0px !important',
    },
  }

  const paperComponent = (paperComponentProps: object): JSX.Element => {
    return <Paper sx={sxPaperComponent} {...paperComponentProps} />
  }

  const renderInput = (params: any): JSX.Element => {
    return (
      <OstiganTextField
        {...params}
        name={name}
        value={value}
        className="border border-[color:var(--true-gray-500)] rounded-md"
        variant="outlined"
        color="success"
        sizeInput="Large"
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        // defaultValue={defaultValue?.[optionTitle]}
        sx={sxRenderInput}
        inputProps={{
          ...params.inputProps,
          value: value ? value[optionTitle] : inputValue,
        }}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          setInputValue(e.target.value)
        }}
        onFocus={() => {
          setOpen(true)
        }}
        onBlur={() => {
          setOpen(false)
        }}
      />
    )
  }

  const renderOption = (
    renderOptionProps: object,
    option: Record<string, any>,
    selected: boolean,
  ): JSX.Element => {
    return (
      <button
        type="button"
        className="flex"
        // onClick={() => {
        //   !multiSelection && setOpen(false)
        // }}
      >
        <li
          {...renderOptionProps}
          style={{
            width: '100%',
            padding: '6px 8px',
            borderRadius: '10px',
            margin: '4px 6px',
          }}
        >
          {hasCheckbox ? <OstiganCheckbox value={selected} /> : null}
          {option?.[optionTitle]}
        </li>
      </button>
    )
  }

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: any,
    reason: string,
  ): void => {
    setInputValue('')
    onChange?.(newValue)
    onChangeHandler?.(newValue)

    if (reason === 'clear') {
      event.stopPropagation()
      setInputValue('')
      setOpen(false)
    }
  }

  useEffect(() => {
    if (defaultValue != undefined) {
      setFieldValue(name, multiSelection ? [{ ...defaultValue }] : defaultValue)
    }
  }, [isLoading, listOption])

  useEffect(() => {
    if (firstLoad) {
      if (listOption.length) {
        setFirstLoad(false)
      }
      return
    }
    setFieldValue(name, multiSelection ? [] : [{}])
  }, [loading])

  return (
    <div className="flex flex-col gap-[5px]">
      <LabelField title={autoCompleteLabel} htmlFor={name} className="mb-2" />
      <Autocomplete
        {...props}
        value={value}
        options={listOption}
        open={open}
        limitTags={limitTags}
        multiple={multiSelection}
        disabled={disabled}
        size="small"
        popupIcon={arrowIcon}
        getOptionLabel={(option: any) => (option ? option[optionTitle] : '')}
        getOptionDisabled={optionDisabled}
        disableCloseOnSelect={multiSelection}
        loading={loading}
        loadingText={
          <div className="flex gap-2">
            <p>درحال بارگذاری...</p>
            <AlertIcon />
          </div>
        }
        PaperComponent={(paperComponentProps) =>
          paperComponent(paperComponentProps)
        }
        renderInput={(params) => renderInput(params)}
        renderOption={(
          renderOptionProps: object,
          option: Record<string, any>,
          { selected }: { selected: boolean },
        ) => renderOption(renderOptionProps, option, selected)}
        sx={sxAutoComplete}
        onBlur={onBlur}
        onChange={(
          event: SyntheticEvent,
          newValue: string,
          reason: string,
        ): void => {
          handleChange(event, newValue, reason)
        }}
      />
    </div>
  )
}
