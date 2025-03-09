export const createMarkup = (data: any): any => {
  return { __html: data, style: { with: '800px' } }
}
