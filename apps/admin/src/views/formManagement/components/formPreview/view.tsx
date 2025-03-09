import {
  CloseCircleIcon,
  InputPreview,
  LabelField,
  useTranslations,
} from '../../imports'
import type { FormPreviewViewType } from '../../imports'

export const FormPreviewView = (props: FormPreviewViewType): JSX.Element => {
  const {
    inputData,
    handleRemoveInput,
    handleDragStart,
    handleDragEnter,
    handleDropEnd,
  } = props
  const t = useTranslations()

  return (
    <>
      <LabelField title={t('preview')} />
      <div className="flex flex-col gap-4 border border-trueGray-500 rounded-md h-full max-h-[500px] p-4 overflow-auto">
        {inputData?.map((item, index) => (
          <div
            key={item.id}
            draggable
            className="border border-dashed border-trueGray-500 rounded-lg p-4"
            onDragStart={(event) => {
              handleDragStart(event, index)
            }}
            onDragEnter={(event) => {
              handleDragEnter(event, index)
            }}
            onDragEnd={handleDropEnd}
          >
            <CloseCircleIcon
              className="mr-auto cursor-pointer"
              onClick={() => {
                handleRemoveInput(item.id)
              }}
            />
            <InputPreview inputData={item} />
          </div>
        ))}
      </div>
    </>
  )
}
