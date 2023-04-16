import * as React from 'react'

export const Tab = React.forwardRef(({ ...props }, ref) => {
  return (
    <button
      {...props}
      className={`${props.className} ${
        props.selected ? 'rts___tab___selected' : ''
      }`}
      ref={ref}
    >
      {props.children}
    </button>
  )
})
