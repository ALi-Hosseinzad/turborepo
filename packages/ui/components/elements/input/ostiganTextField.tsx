import React from 'react'
import TextField from '@mui/material/TextField'
import type { OstiganTextFieldType } from '../../../types/ostiganTextField'
import { LabelField } from '../label'

let inputPropsSize: string

export const OstiganTextField: React.FC<OstiganTextFieldType> = (props) => {
  const {
    title,
    value,
    classnametitle,
    label,
    name,
    type = 'text',
    variant,
    fullWidth = true,
    color = 'success',
    classNameContainer,
    select = false,
    helperText,
    placeholder,
    multiline,
    rows,
    maxRows,
    minRows,
    sizeInput = 'Large',
    size = 'small',
    error = null,
    inputLabelProps,
    disabled,
    autoComplete,
    margin,
    required,
    autoFocus,
    sx,
    id,
    defaultValue,
    onKeyDown,
    inputRef,
    onBlur,
    onFocus,
    onChange,
    className,
    inputProps,
    borderColorDefault = 'var(--trueGray-500) !important',
    borderColorDisabled = 'var(--trueGray-400) !important',
    borderColorHoverDisabled = 'var(--trueGray-400) !important',
    borderColorOnHover = `var( --trueGray-600) !important`,
    labelColor = 'var(--trueGray-700) !important',
    borderColorOnFocus = 'var(--primary-active) !important',
    borderColorError = 'var(--error-default) !important',
    borderColorCustomState = 'var(--trueGray-600) !important',
    customTextColorInputText = 'var(--trueGray-700) !important',
  } = props

  switch (sizeInput) {
    case 'Large':
      inputPropsSize = '52px'
      break
    case 'Medium':
      inputPropsSize = '44px'
      break
    case 'Small':
      inputPropsSize = '40px'
      break
    default:
      inputPropsSize = '40px'
  }

  const customStyles = {
    '& .MuiOutlinedInput-root:hover': {
      '& fieldset': {
        borderColor: borderColorOnHover,
      },
    },
    '& .MuiInputLabel-root': {
      color: labelColor,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused': {
        '& fieldset': {
          borderColor: borderColorOnFocus,
        },
      },
      '& fieldset': {
        borderColor: borderColorDefault,
      },
    },
    '& .MuiOutlinedInput-root.Mui-error': {
      '& fieldset': {
        borderColor: borderColorError,
      },
    },
    '& .MuiOutlinedInput-root.Mui-disabled': {
      '& fieldset': {
        borderColor: borderColorDisabled,
      },
    },
    '& .MuiOutlinedInput-root.Mui-disabled:hover': {
      '& fieldset': {
        borderColor: borderColorHoverDisabled,
      },
    },

    '& .MuiOutlinedInput-root.Mui-customState': {
      '& fieldset': {
        borderColor: borderColorCustomState,
      },
    },
    '& .MuiOutlinedInput-root input': {
      color: customTextColorInputText,
      paddingY: 0,
    },
  }

  const styleInputProps = {
    style: {
      height: inputPropsSize,
    },
  }

  const InputPropscondition = props?.InputProps
    ? props?.InputProps
    : {
        ...styleInputProps,
        ...inputProps,
      }

  const inputPropscondition = props?.inputProps
    ? {
        ...props?.inputProps,
        ...styleInputProps,
      }
    : {
        ...styleInputProps,
      }

  const InputPropsCustom = !multiline ? InputPropscondition : undefined
  const inputPropsCustom = !multiline ? inputPropscondition : undefined
  return (
    <div className={classNameContainer}>
      {title ? (
        <LabelField
          htmlFor={name}
          title={title}
          disabled={disabled}
          className={`flex ${classnametitle} mb-2`}
        />
      ) : null}
      <TextField
        {...props}
        id={id}
        name={name}
        label={label}
        value={value}
        select={select}
        defaultValue={defaultValue}
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        minRows={minRows}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        margin={margin}
        required={required}
        autoFocus={autoFocus}
        placeholder={placeholder}
        inputRef={inputRef}
        error={error}
        InputProps={InputPropsCustom}
        inputProps={inputPropsCustom}
        className={`${className} border border-gray-500 rounded-md m-6`}
        variant={variant}
        color={color}
        size={size}
        InputLabelProps={inputLabelProps ? inputLabelProps : inputLabelstyle}
        sx={{
          ...customStyles,
          ...sx,
        }}
        helperText={helperText}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={(e) => onKeyDown?.(e)}
        onFocus={onFocus}
      />
    </div>
  )
}

const inputLabelstyle = {
  sx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '-0.5vh',
    '&.MuiInputLabel-shrink': {
      top: 0,
    },
  },
}
