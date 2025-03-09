import {
  OstiganButton,
  PhoneCallingIcon,
  SearchIcon1,
  t,
  useState,
} from '../imports'

const NavbarLeft = (): JSX.Element => {
  const [color, setColor] = useState('var(--trueGray-800)')
  const [searchColor, setSearchColor] = useState('var(--trueGray-800)')

  const changePhoneIconColor = (curColor): void => {
    setColor(curColor)
  }

  return (
    <div className="flex items-center gap-4">
      <div
        onMouseEnter={() => {
          setSearchColor('var(--primary-default)')
        }}
        onMouseLeave={() => {
          setSearchColor('#404040')
        }}
      >
        <SearchIcon1 color={searchColor} />
      </div>
      <div
        className="flex items-center group relative justify-between gap-3 "
        onMouseEnter={() => {
          changePhoneIconColor('var(--primary-default)')
        }}
        onMouseLeave={() => {
          changePhoneIconColor('#404040')
        }}
      >
        <span className="overflow-hidden w-0 opacity-0 group-hover:opacity-100 group-hover:w-24 text-primary-default transition-all duration-500 whitespace-nowrap">
          021-284251
        </span>
        <PhoneCallingIcon
          color={color}
          className="w-5 h-5 text-red-500 transition-all duration-1000"
        />
      </div>
      <div className="flex group flex-row flex-nowrap">
        <OstiganButton
          type="button"
          variant="contained"
          styleType="success"
          width="179px"
          height="52px"
          padding="0"
        >
          {t('login')} / {t('register')}
        </OstiganButton>
      </div>
    </div>
  )
}

export default NavbarLeft
