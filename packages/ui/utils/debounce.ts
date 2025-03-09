// @ts-nocheck
export function debounce(func: any, timeout = 3000): any {
  let timer: any
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}
