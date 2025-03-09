import {
  useTranslations,
  type KeyboardEventHandler,
  type TextWithIconSliderType,
} from '../import'

const TextWithIconSlider: React.FC<TextWithIconSliderType> = ({
  icon,
  text,
  sliderClass = '',
  textClass,
  isTranslated = false,
  onClick,
  onKeyDown,
}) => {
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (onKeyDown) {
      onKeyDown(event)
    }
  }
  const t = useTranslations()

  return (
    <div
      className={`flex items-center ${sliderClass}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {icon}
      <p className={textClass}>{isTranslated ? t(text) : text}</p>
    </div>
  )
}

export default TextWithIconSlider
