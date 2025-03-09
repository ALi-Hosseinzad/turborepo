const TextIcon = ({ icon, text, textClass, containerClassName }: any) => {
  return (
    <div className={`flex items-center ${containerClassName}`}>
      {typeof icon === 'string' ? <img src={icon} alt="icon" /> : icon}
      <p className={`${textClass}`}>{text}</p>
    </div>
  )
}

export default TextIcon
