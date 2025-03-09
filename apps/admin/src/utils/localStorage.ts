import type { LocalStorageInterface } from 'types/localStorage'

export const handleLocalStorage = ({
  type,
  key,
  item,
}: LocalStorageInterface): any => {
  switch (type) {
    case 'setLocalStorage': {
      localStorage.setItem(key, item as string)
      break
    }
    case 'getLocalStorage': {
      if (typeof window !== 'undefined' && key) {
        try {
          return JSON?.parse(localStorage?.getItem(key) || '')
        } catch (error) {
          return null
        }
      }
      break
    }
    case 'removeLocalStorage': {
      localStorage.removeItem(key)
      break
    }
    case 'clearLocalStorage': {
      localStorage.clear()
    }
  }
}
