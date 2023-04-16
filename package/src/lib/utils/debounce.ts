// based on https://github.com/mui/material-ui/blob/17d4b9e037c90903e7d57fce36db4e58e2ee7494/packages/mui-utils/src/debounce.js#L5

export const debounce = (func: { apply: (arg0: any, arg1: any[]) => void }, wait = 166) => {
    let timeout: NodeJS.Timeout
  
    const debounced = (...args: any[]) => {
      const later = () => {
        func.apply(this, args)
      }
  
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  
    debounced.clear = () => {
      clearTimeout(timeout)
    }
  
    return debounced
  }
  