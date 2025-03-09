export const getChangedObjectValues = (
  firstObj: object,
  secondObj: object,
): object => {
  const acc = {}
  const test = (firstObj: object, secondObj: object): object => {
    for (const key in firstObj) {
      const value = firstObj[key]
      let hasChanged = false
      if (typeof value !== 'object') {
        hasChanged = secondObj[key] !== value
      } else {
        hasChanged = JSON.stringify(secondObj[key]) !== JSON.stringify(value)
      }
      if (hasChanged) {
        acc[key] = value
      }
    }
    return acc
  }

  return test(firstObj, secondObj)
}

export const removeEmptyProperty = (obj: any): any => {
  for (const i of Object.keys(obj)) {
    if (obj[i] === '' || obj[i] === null) {
      delete obj[i]
    }
  }
  return obj
}

export const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0
}
