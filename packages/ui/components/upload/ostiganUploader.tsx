'use client'

import type { FC } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import type { OstiganUploaderPropsType } from '../../types'
import { HelperText } from '../elements/label'
import DefaultUploder from './view/defaultUploder'
import InputUploder from './view/inputUploder'

const initialState: string[] = []

export const OstiganUploader: FC<OstiganUploaderPropsType> = (props) => {
  const {
    onChange,
    defaultImage,
    limitationFileSizeText,
    // onBlur,
    sizeLimit = 10000000,
    errorCallback,
    multiple = false,
    errors,
    value,
    // name,
    handelDeleteflle,
    wrapperClass,
    typeUploader = 'typeDefaultUploder',
  } = props

  const imgUploader = useRef<HTMLInputElement>(null)
  const [fileNames, setFileNames] = useState<string[]>(initialState)
  const [openFileUploder, setOpenFileUploder] = useState<boolean>(true)
  const [imagePreview, setImagePreview] = useState<string | undefined | null>(
    null,
  )
  // const [fileTypes, setFileTypes] = useState<string[]>(initialState)
  // const [selectedFilesData, setSelectedFilesData] =
  // useState<string[]>(initialState)

  // const clearState = (): void => {
  // setFileTypes(initialState)
  // setFileNames(initialState)
  // setSelectedFilesData(initialState)
  // setImagePreview(null)
  // }

  useEffect(() => {
    setImagePreview(defaultImage)
  }, [defaultImage])

  const handleFileUpload = (files: FileList | null): any => {
    if (!files) return

    const updatedFileNames: string[] = []
    const updatedFileTypes: string[] = []
    const updatedSelectedFiles: any[] = []

    Array.from(files).forEach((file) => {
      // if (file.name.split('.').pop() === 'xlsx') {
      //   // updatedSelectedFiles.push(file)
      //   // const formData = new FormData()
      //   // formData.append(name,file)
      //   // const data = formData.append(name, file)
      //   onChange?.([file])
      //   return
      // }
      if (file.size < sizeLimit) {
        updatedFileNames.push(file.name)

        const reader = new FileReader()
        reader.onload = (e) => {
          const target = e.target as FileReader
          updatedFileTypes.push(file.type)
          updatedSelectedFiles.push(target.result as string)

          if (file.type.includes('image/') && !multiple) {
            setImagePreview(URL.createObjectURL(file))
          }

          if (updatedSelectedFiles?.length === files?.length) {
            // Update state with all file data
            setFileNames(updatedFileNames)
            // setFileTypes(updatedFileTypes)
            // setSelectedFilesData(updatedSelectedFiles)

            // Pass updated files to parent
            if (file.name.split('.').pop() === 'xlsx') {
              onChange?.([file])
            } else {
              onChange?.(updatedSelectedFiles)
            }
          }
        }
        reader.readAsDataURL(file)
      } else {
        errorCallback(limitationFileSizeText ? limitationFileSizeText : '')
      }
    })
  }

  const handleFileInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): any => {
    const files = e.target.files
    handleFileUpload(files)
  }

  const handleFileUploadClick = (): void => {
    if (openFileUploder && imgUploader.current) {
      setOpenFileUploder(true)
      imgUploader.current.click()
      // onBlur?.(true)
    }
  }

  const fileItems = fileNames.map((selectedFileName) => (
    <p key={selectedFileName}>{selectedFileName}</p>
  ))
  const handelDelete = (): void => {
    setOpenFileUploder(false)
    handelDeleteflle()
    setImagePreview('')
    setFileNames([])
  }

  useEffect(() => {
    if (value === '' || value === undefined) {
      setImagePreview('')
      setFileNames([])
    }
  }, [value])

  return (
    <div className={`h-full ${wrapperClass}`}>
      {typeUploader === 'typeInputUploader' ? (
        <InputUploder
          handleFileUploadClick={handleFileUploadClick}
          handleFileInputChange={handleFileInputChange}
          fileItems={fileItems}
          imgUploader={imgUploader}
          imagePreview={imagePreview}
          handelDelete={handelDelete}
          {...props}
        />
      ) : (
        <DefaultUploder
          handleFileUploadClick={handleFileUploadClick}
          handleFileInputChange={handleFileInputChange}
          fileItems={fileItems}
          imgUploader={imgUploader}
          imagePreview={imagePreview}
          fileNames={fileNames}
          {...props}
        />
      )}
      {/* {errors ? <p className="text-sm text-rose-400">{errors}</p> : null} */}
      {errors ? <HelperText>{errors}</HelperText> : null}
    </div>
  )
}
