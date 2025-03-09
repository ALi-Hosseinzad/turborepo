import { handleLocalStorage } from './localStorage'

export const handleEnumsParse = (): any => {
  const enums = handleLocalStorage({ type: 'getLocalStorage', key: 'enums' })
  const enumsObject = JSON.parse(enums as string)

  return enumsObject
}
