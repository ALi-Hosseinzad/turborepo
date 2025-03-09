export const addScroll = (): void => {
  document.body.classList.add("overflow-y-hidden")
}

export const removeScroll = (): void => {
  document.body.classList.remove("overflow-y-hidden")
}
