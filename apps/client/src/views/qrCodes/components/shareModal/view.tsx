import type { ShareModalViewType } from '../../imports'
import {
  ModalHeader,
  OstiganModal,
  TextWithIcon,
  useTranslations,
} from '../../imports'

export const ShareModalView = ({
  open,
  handleClose,
  modalData,
  shareHandler,
  href,
}: ShareModalViewType) => {
  const t = useTranslations()

  return (
    <OstiganModal open={open} handleClose={handleClose}>
      <div>
        <ModalHeader handleClose={handleClose} headerTitle={t('share')} />
        <div className="flex flex-col ">
          {modalData?.map((item) => (
            <TextWithIcon
              key={item.title}
              text={item.title}
              icon={item.icon}
              containerClassName="border border-b border-trueGray-200 cursor-pointer px-6 py-5"
              onClick={() => shareHandler({ type: item.type, href })}
            />
          ))}
        </div>
      </div>
    </OstiganModal>
  )
}
