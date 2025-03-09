'use client'

import { useEffect, useState } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from '@mui/material'
import type { OptionType, RadioType } from '../../../types'
import { LabelField } from '../label/labelField/labelField'

export const OstiganRadio = (props: RadioType): JSX.Element => {
  const {
    label,
    activeBorder = '1px solid var(--primary-default)',
    activeBackgroundColor,
    checkedIcon,
    checkedColor = 'var(--primary-default)',
    disabled,
    disableRipple,
    icon,
    helperText,
    hasError = false,
    size,
    labelPlacement = 'end',
    showRadioIcon = true,
    onChange,
    name,
    // value,
    options,
    flexDirection,
    defaultValue,
    insideBlockStyles,
    optionLabel = 'label',
    optionValue = 'value',
    borderColor,
    labelClassName,
    // setFieldValue,
  } = props
  const [checked, setChecked] = useState<Record<string, any>>({})
  //TODO:HAS BEEN CHECKED IN DIFF APPS IF WANA CHANGE CHECK BOTH APP
  // useEffect(() => {
  //   if (options[0]) {
  //     const defaultValueChecked = JSON.stringify(options?.[0]?.[optionValue])
  //     defaultValue != 'null' && setChecked({ [defaultValueChecked]: true })
  //     setFieldValue?.(
  //       name,
  //       defaultValue ? defaultValue : options?.[0]?.[optionValue],
  //     )
  //   }
  // }, [options, defaultValue])

  useEffect(() => {
    const defaultValueChecked = defaultValue
      ? defaultValue
      : JSON.stringify(options?.[0]?.[optionValue])
    setChecked({ [defaultValueChecked]: true })
  }, [options, defaultValue])

  return (
    <>
      {options?.length ? (
        <FormControl error={hasError} variant="standard" className="w-full">
          <LabelField title={label} htmlFor={name} className={labelClassName} />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            defaultValue={
              defaultValue
                ? JSON.stringify(defaultValue)
                : JSON.stringify(options?.[0]?.[optionValue])
            }
            // value={JSON?.stringify(options.value)} //TODO:we change this section ,check it in other place
            value={
              defaultValue
                ? defaultValue
                : JSON.stringify(options?.[0]?.[optionValue])
            }
            onChange={(e) => {
              const value = e.target.value
              setChecked({ [value]: !checked[value] })
              onChange?.(value)
            }}
          >
            <div className={`flex ${flexDirection} gap-2`}>
              {options?.map((item: OptionType) => {
                const selectedOption = JSON?.stringify(item[optionValue])
                return (
                  <FormControlLabel
                    key={item[optionValue]}
                    labelPlacement={labelPlacement}
                    value={JSON?.stringify(item[optionValue])}
                    label={item[optionLabel]}
                    disabled={disabled}
                    sx={{
                      border: checked?.[selectedOption]
                        ? activeBorder
                        : `1px solid ${borderColor || 'var(--trueGray-500)'}`,
                      backgroundColor: checked?.[selectedOption]
                        ? activeBackgroundColor
                        : 'white',

                      borderRadius: '6px',
                      width: '100%',
                      boxSizing: 'border-box',
                      textAlign: 'center',
                      margin: '0!important',
                      justifyContent: 'center',
                      padding: '5px',
                      '& div': {
                        ...insideBlockStyles,
                      },
                    }}
                    control={
                      <Radio
                        checkedIcon={checkedIcon}
                        sx={{
                          display: showRadioIcon ? '' : 'none',
                          color: checked?.[selectedOption]
                            ? checkedColor
                            : borderColor || 'var(--trueGray-500)',
                          borderRadius: '10px',
                          '&.Mui-checked': {
                            color: checkedColor,
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: size,
                          },
                          '& .MuiFormControlLabel-root': {
                            border: '1px solid red !important',
                          },
                        }}
                        disableRipple={disableRipple}
                        icon={icon}
                      />
                    }
                  />
                )
              })}
            </div>
          </RadioGroup>
          {hasError ? <FormHelperText>{helperText}</FormHelperText> : null}
        </FormControl>
      ) : null}
    </>
  )
}
