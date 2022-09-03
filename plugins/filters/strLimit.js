export default (value, stop) => {
  if (typeof value === 'undefined') {
    return value
  }
  return value.slice(0, stop) + (stop < value.length ? '...' : '')
}
