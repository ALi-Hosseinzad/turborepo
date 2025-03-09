import { FormPreviewView, useFormPreviewViewModel } from '../../imports'

export const FormPreview = ({
  isSuccessPostForm,
  initialinputData,
}): JSX.Element => {
  const {
    inputData,
    handleRemoveInput,
    handleDragStart,
    handleDragEnter,
    handleDropEnd,
  } = useFormPreviewViewModel(isSuccessPostForm, initialinputData)

  return (
    <FormPreviewView
      inputData={inputData}
      handleRemoveInput={handleRemoveInput}
      handleDragStart={handleDragStart}
      handleDragEnter={handleDragEnter}
      handleDropEnd={handleDropEnd}
    />
  )
}
