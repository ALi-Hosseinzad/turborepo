import type { LocalStorageInterface } from '@/types/localStorage'

export const handleLocalStorage = ({
  type,
  key,
  item,
}: LocalStorageInterface): string | undefined | null => {
  switch (type) {
    case 'setLocalStorage': {
      localStorage.setItem(key, item as string)
      break
    }
    case 'getLocalStorage': {
      if (typeof window !== 'undefined') {
        return localStorage.getItem(key)
      }
      return 'undefined'
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
