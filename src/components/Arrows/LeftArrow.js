import * as React from 'react'
const LeftArrow = ({ leftBtnIcon, navBtnAs = 'button', ...props }) => {
  return React.createElement(navBtnAs, { ...props }, leftBtnIcon)
}

export default LeftArrow
