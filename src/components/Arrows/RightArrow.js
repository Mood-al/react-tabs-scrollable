import * as React from 'react'

const RightArrow = ({ rightBtnIcon, navBtnAs = 'button', ...props }) => {
  return React.createElement(navBtnAs, { ...props }, rightBtnIcon)
}

export default RightArrow
