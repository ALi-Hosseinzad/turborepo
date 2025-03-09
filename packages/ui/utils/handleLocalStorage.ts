export const getLocalStorage = (key: string): any => {
  if (typeof window !== 'undefined' && key) {
    try {
      return JSON?.parse(localStorage?.getItem(key) || '')
    } catch (error) {
      return null
    }
  }
}

export const setLocalStorage = (key: string, item: any): any => {
  localStorage.setItem(key, item as string)
}

export const removeLocalStorage = (key: string): any => {
  localStorage.removeItem(key)
}

export const clearLocalStorage = (): any => {
  localStorage.clear()
}
