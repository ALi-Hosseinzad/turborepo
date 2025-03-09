import { useState } from 'react'
import { handleLocalStorage } from 'utils/localStorage'

// const getStorageAndCheck = (key: string): any => {
//   const storage = handleLocalStorage({
//     key,
//     type: 'getLocalStorage',
//   })
//   return storage === 'undefined' ? null : storage
// }
const enumsStorage = handleLocalStorage({
  key: 'enums',
  type: 'getLocalStorage',
})
const enumsStorageuser = handleLocalStorage({
  key: 'enums',
  type: 'getLocalStorage',
})
export const useAppContextValue = (): any => {
  let parsedEnums = ''
  let parsedUser = ''

  if (typeof window !== 'undefined') {
    // const stringifiedEnums = getStorageAndCheck('enums')
    // const stringifiedUser = getStorageAndCheck('user')
    parsedEnums = enumsStorage
    parsedUser = enumsStorageuser
  }

  const [enums, setEnums] = useState(parsedEnums)
  const [user, setUser] = useState(parsedUser)

  const handleEnums = (props: any): any => {
    handleLocalStorage({
      key: 'enums',
      type: 'setLocalStorage',
      item: JSON.stringify(props),
    })
    setEnums(props)
  }

  const handleUser = (props: any): any => {
    handleLocalStorage({
      key: 'user',
      type: 'setLocalStorage',
      item: JSON.stringify(props),
    })
    setUser(props)
  }

  return { enums, handleEnums, user, handleUser }
}
