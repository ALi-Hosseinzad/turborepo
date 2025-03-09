import type { ChangeEvent } from 'react'
import { useTranslations } from 'use-intl'
import { SearchIcon1 } from '../../../components/icons'
import { debounce } from '../../../utils/debounce'
import { OstiganTextField } from '../../elements/input/ostiganTextField'

const SearchComponent = (): React.ReactElement => {
  const t = useTranslations()

  function saveInput(e: ChangeEvent<HTMLInputElement>): any {
    // TODO:add request search Headers.
    return e
  }

  const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    saveInput(e)
  })

  return (
    <OstiganTextField
      type="text"
      InputProps={{ startAdornment: <SearchIcon1 className="ml-2" /> }}
      name="test"
      placeholder={t('search')}
      onChangeHandler={(e: any) => {
        handleChange(e.target.value)
      }}
    />
  )
}

export default SearchComponent
