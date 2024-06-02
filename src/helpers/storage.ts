export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getItem = (value: string) => {
  return localStorage.getItem(value)
}

export const removeItem = (value: string) => {
  localStorage.removeItem(value)
}
