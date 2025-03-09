import { useEffect, useFormikContext, useRef, useState } from '../../imports'
import type { FormPreviewViewModelType } from '../../imports'

export const useFormPreviewViewModel = (
  isSuccessPostForm: boolean,
  initialinputData,
): FormPreviewViewModelType => {
  const [inputData, setinputData] = useState<any[]>([])
  const { values, setFieldValue }: any = useFormikContext()

  const dragItem = useRef()
  const dragOverItem = useRef()

  const handleDragStart = (_event, position): void => {
    dragItem.current = position
  }
  const handleDragEnter = (_event, position): void => {
    dragOverItem.current = position
  }

  const handleDropEnd = (): void => {
    const copyinputData = [...inputData]
    const dragItemContent = copyinputData[dragItem?.current as any]
    copyinputData.splice(dragItem?.current as any, 1)
    copyinputData.splice(dragOverItem?.current as any, 0, dragItemContent)
    // dragItem?.current == null
    // dragOverItem?.current == null
    setinputData(copyinputData)
    setFieldValue('formInputs', [...copyinputData])
  }

  const handleRemoveInput = (id: string): void => {
    const filterInputData = inputData?.filter((item) => item?.id != id)
    setinputData(filterInputData)
    setFieldValue('formInputs', [...filterInputData])
  }

  useEffect(() => {
    if (values?.inputType && values?.required?.value != null) {
      const notRepetitiveInput = inputData?.filter(
        (item) => item?.id != values?.inputType?.id,
      )

      setinputData([
        ...notRepetitiveInput,
        {
          ...values?.inputType,
          required: values?.required?.value == 'required',
        },
      ])

      setFieldValue('formInputs', [
        ...notRepetitiveInput,
        {
          ...values?.inputType,
          required: values?.required?.value == 'required',
        },
      ])
    }
  }, [values?.inputType, values?.required])

  useEffect(() => {
    if (isSuccessPostForm) {
      setinputData([])
    }
  }, [isSuccessPostForm])

  useEffect(() => {
    if (initialinputData?.length > 0) {
      setinputData(initialinputData)
    }
  }, [initialinputData])

  return {
    inputData,
    setinputData,
    handleRemoveInput,
    handleDragStart,
    handleDragEnter,
    handleDropEnd,
  }
}
