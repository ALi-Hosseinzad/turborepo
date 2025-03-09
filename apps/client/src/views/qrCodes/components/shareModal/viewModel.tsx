import type { ShareHandlerType, ShareModalViewModelType } from '../../imports'
import { SaveIcon, UploadIcon, UsePrint, useTranslations } from '../../imports'

export const useShareModalViewModel = (
  handleClose: () => void,
): ShareModalViewModelType => {
  const t = useTranslations()
  const modalData = [
    {
      title: t('saveInGallery'),
      icon: <UploadIcon className="w-8 h-8" color="var(--trueGray-900)" />,
      type: 'save',
    },
    {
      title: t('saveForPrint'),
      icon: <SaveIcon className="w-8 h-8" color="var(--trueGray-900)" />,
      type: 'print',
    },
  ]

  const saveHandler = (url: string) => {
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', 'fileName')
    aTag.setAttribute('target', '_blank')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  const shareHandler = ({ type, href }: ShareHandlerType) => {
    if (type == 'print') {
      UsePrint(`<img src=${href} alt="ostigan" />`)
    }
    if (type == 'save') {
      saveHandler(href)
    }
    handleClose()
  }

  return { modalData, shareHandler }
}
