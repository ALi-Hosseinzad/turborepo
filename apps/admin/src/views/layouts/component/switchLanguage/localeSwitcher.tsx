import { useLocale } from 'next-intl'
import LocaleSwitcherSelect from './localeSwitcherSelect'

export default function LocaleSwitcher(): React.ReactElement {
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale} label="lang">
      {['fa', 'en'].map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
