export const sort = (data, type) => {
  if (!!!data.length) return
  switch (type) {
    case 'tag':
      return data.map(i => ({ id : i?.id, title: i?.value }))
    default:
      return data.map(i => ({ id : i?.id, title: i?.name }))
  } 
}