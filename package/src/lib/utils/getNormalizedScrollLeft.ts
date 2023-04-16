// Based on https://github.com/alitaheri/normalize-scroll-left

'use strict'

// Based on https://github.com/react-bootstrap/dom-helpers/blob/master/src/util/inDOM.js
var inDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)
var cachedType: string
export function _setScrollType(type: any) {
  cachedType = type
}

// Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
export function detectScrollType() {
  if (cachedType) {
    return cachedType
  }
  if (!inDOM || !window.document.body) {
    return 'indeterminate'
  }
  var dummy = window.document.createElement('div')
  dummy.appendChild(document.createTextNode('ABCD'))
  dummy.dir = 'rtl'
  dummy.style.fontSize = '14px'
  dummy.style.width = '4px'
  dummy.style.height = '1px'
  dummy.style.position = 'absolute'
  dummy.style.top = '-1000px'
  dummy.style.overflow = 'scroll'
  document.body.appendChild(dummy)
  cachedType = 'reverse'
  if (dummy.scrollLeft > 0) {
    cachedType = 'default'
  } else {
    dummy.scrollLeft = 2
    if (dummy.scrollLeft < 2) {
      cachedType = 'negative'
    }
  }
  document.body.removeChild(dummy)
  return cachedType
}

// Based on https://stackoverflow.com/a/24394376
export function getNormalizedScrollLeft(element: { scrollLeft: any; scrollWidth: number; clientWidth: number }, direction: string) {
  var scrollLeft = element.scrollLeft
  // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior
  if (direction !== 'rtl') {
    return scrollLeft
  }
  var type = detectScrollType()
  if (type === 'indeterminate') {
    return Number.NaN
  }
  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft
    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft
  }
  return scrollLeft
}

export function setNormalizedScrollLeft(element: { scrollLeft: number; clientWidth: number; scrollWidth: number }, scrollLeft: number, direction: string) {
  // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior
  if (direction !== 'rtl') {
    element.scrollLeft = scrollLeft
    return
  }
  var type = detectScrollType()
  if (type === 'indeterminate') {
    return
  }
  switch (type) {
    case 'negative':
      element.scrollLeft =
        element.clientWidth - element.scrollWidth + scrollLeft
      break
    case 'reverse':
      element.scrollLeft =
        element.scrollWidth - element.clientWidth - scrollLeft
      break
    default:
      element.scrollLeft = scrollLeft
      break
  }
}
