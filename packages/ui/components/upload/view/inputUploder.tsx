import type { FC } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import type { FormikFileUploaderPropsType } from '../../../types'
import { OstiganButton } from '../../elements/button/ostiganButton'
import { LabelField } from '../../elements/label'
import { CloseIcon } from '../../icons'

const InputUploder: FC<FormikFileUploaderPropsType> = (props): JSX.Element => {
  const {
    wrapperClass,
    placeholder,
    acceptedFile = '*',
    disabled = false,
    multiple = false,
    errors,
    handleFileUploadClick,
    handleFileInputChange,
    fileItems,
    imgUploader,
    imagePreview,
    showPreviewUploader,
    handelDelete,
    title,
    textButton,
    startAdornment,
    endAdornment,
    sx = {},
  } = props

  const renderPreview = (): JSX.Element | null => {
    if (imagePreview) {
      if (showPreviewUploader === 'text') {
        return <span className="w-40 truncate">{fileItems}</span>
      }
      return (
        <div className="relative">
          <img
            src={imagePreview}
            className="object-contain xl:object-contain py-2 hover:bg-white"
            style={{
              width: 'auto',
              height: '60px',
              // position: 'absolute',
              borderRadius: '10px',
            }}
            alt="Uploaded Preview"
          />
          <div
            style={{ margin: '0 -10px 0 0' }}
            className="absolute top-0 right-0 cursor-pointer"
            onClick={handelDelete}
          >
            <CloseIcon color="#F5455B" />
          </div>
        </div>
      )
    }
    return null
  }

  const getPlaceholderText = (): string => {
    if (imagePreview) {
      return ''
    }
    return placeholder ? placeholder : 'آیکون خود را انتخاب کنید'
  }

  return (
    <>
      {!title || (
        <div className=" ">
          <LabelField htmlFor="name" title={title} disabled={disabled} />
        </div>
      )}

      <div
        className={`${wrapperClass}
          ${errors && 'border-red-400'} overflow-hidden`}
      >
        <div>
          <TextField
            name="file"
            className="w-full"
            value=""
            sx={sx}
            placeholder={getPlaceholderText()}
            InputProps={{
              readOnly: true,
              startAdornment: (
                <InputAdornment position="start">
                  {startAdornment ? startAdornment : null}
                  {renderPreview()}
                </InputAdornment>
              ),
              endAdornment: (
                <>
                  {endAdornment ? (
                    <InputAdornment position="end">
                      <OstiganButton
                        type="button"
                        variant="contained"
                        styleType="success"
                        // padding="7px 76px !important"
                        className="!w-6 !px-5 md:!w-14 md:!px-10 xl:!w-28 xl:!px-16 text-lg font-normal"
                      >
                        <span className="text-sm md:text-sm xl:text-lg font-normal overflow-hidden text-white  ">
                          {textButton ? textButton : 'افزودن آیکون'}
                        </span>
                      </OstiganButton>
                    </InputAdornment>
                  ) : (
                    endAdornment
                  )}
                  <input
                    type="file"
                    ref={imgUploader}
                    accept={acceptedFile}
                    disabled={disabled}
                    multiple={multiple}
                    style={{
                      display: 'none',
                    }}
                    onChange={handleFileInputChange}
                  />
                </>
              ),
            }}
            onClick={handleFileUploadClick} // error={error}
          />
        </div>
      </div>
    </>
  )
}

export default InputUploder
