export const search_list = (array, value) => {
  if (!array || !value) return
  return array.filter(i => i.title && i.title.toLowerCase().indexOf(value.toLowerCase()) > -1)
}