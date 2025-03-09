'use client'

import type { FC } from 'react'
import Image from 'next/image'
import type { FormikFileUploaderPropsType } from '../../../types'
import { LabelField } from '../../elements/label'

const ShowImagePreview: FC<any> = ({
  imagePreview,
  className,
}): JSX.Element => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        <Image
          src={imagePreview}
          // className="object-cover xl:object-cover"
          width={500}
          height={500}
          sizes={className ? className : '100vw'}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: '10px',
          }}
          alt="Uploaded Preview"
        />
      </div>
    </div>
  )
}

const DefaultUploder: FC<FormikFileUploaderPropsType> = (
  props,
): JSX.Element => {
  const {
    classNameImagePreview,
    placeholder,
    placeholderClass,
    attachIcon,
    acceptedFile = '*',
    isPositionCenter,
    isColumn,
    disabled = false,
    multiple = false,
    errors,
    handleFileUploadClick,
    handleFileInputChange,
    fileItems,
    imgUploader,
    imagePreview,
    title,
    border,
    uploadAreaClass,
  } = props

  return (
    <>
      {!title || (
        <div>
          <LabelField htmlFor="name" title={title} disabled={disabled} />
        </div>
      )}

      <div
        className={`${uploadAreaClass} ${errors && 'border-red-400'} ${border || 'border-2 border-dashed'}  rounded-lg h-full`}
      >
        <div
          className={`relative flex items-center cursor-pointer h-full overflow-hidden ${
            isPositionCenter ? 'justify-center' : ''
          }`}
          onClick={handleFileUploadClick}
        >
          <div
            className={`flex justify-center items-center gap-2 h-full w-full ${
              isColumn ? 'flex-col' : ''
            }`}
          >
            {attachIcon}
            {fileItems.length ? (
              fileItems
            ) : (
              <div
                className={`overflow-hidden ${
                  placeholderClass
                    ? placeholderClass
                    : 'text-normal-sm text-trueGray-500'
                }`}
              >
                {placeholder}
              </div>
            )}
          </div>

          <input
            type="file"
            ref={imgUploader}
            accept={acceptedFile}
            disabled={disabled}
            multiple={multiple}
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />
          <div>
            {imagePreview ? (
              <ShowImagePreview
                className={classNameImagePreview}
                imagePreview={imagePreview}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultUploder
