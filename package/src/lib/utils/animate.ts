// based on https://github.com/mui/material-ui/blob/17d4b9e037c90903e7d57fce36db4e58e2ee7494/packages/mui-material/src/internal/animate.js#L3
function easeInOutSin(time: number) {
    return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2
  }
  
  export default function animate(
    property: string | number,
    element: { [x: string]: any },
    to: number,
    options : any = {},
    cb : any = () => {}
  ) {
    const {
      ease = easeInOutSin,
      duration = 300 // standard
    } = options
    let start: number | null = null
    const from = element[property]
  
    let cancelled = false
  
    const cancel = () => {
      cancelled = true
    }
  
    const step = (timestamp: number) => {
      if (cancelled) {
        cb(new Error('Animation cancelled'))
        return
      }
  
      if (start === null) {
        start = timestamp
      }
  
      const time = Math.min(1, (timestamp - start) / duration)
      element[property] = ease(time) * (to - from) + from
  
      if (time >= 1) {
        // eslint-disable-next-line no-undef
        requestAnimationFrame(() => {
          cb(null)
        })
        return
      }
  
      // eslint-disable-next-line no-undef
      requestAnimationFrame(step)
    }
  
    if (from === to) {
      cb(new Error('Element already at target position'))
      return cancel
    }
    // eslint-disable-next-line no-undef
    requestAnimationFrame(step)
    return cancel
  }
  