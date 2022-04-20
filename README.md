# react-tabs-scrollable

> a simple react scrollable tabs with a lot of additional features and with fully supporting of RTL mode

[![NPM](https://img.shields.io/npm/v/react-tabs-scrollable.svg)](https://www.npmjs.com/package/react-tabs-scrollable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tabs-scrollable
```

## Usage

[Demo](https://react-nav-tabs.vercel.app/)

```jsx
import React from 'react'
import { Tabs, Tab } from 'react-tabs-scrollable'
import 'react-tabs-scrollable/dist/rts.css'

const SimpleTabs = () => {
  // define state with initial value to let the tabs start with that value
  const [activeTab, setActiveTab] = React.useState(1)

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e)
    setActiveTab(index)
  }

  return (
    <Tabs activeTab={activeTab} onTabClick={onTabClick}>
      {/* generating an array to loop through it  */}
      {[...Array(20).keys].map((item) => (
        <Tab key={item}>Tab {item}</Tab>
      ))}
    </Tabs>
  )
}

export default SimpleTabs

```
> **⚠ the docs and the library arent ready yet!!**  
> After a week or something i'm going to finish them but anyway if you want you can use the library it's about 90% ready to use 
> please let me hear your reviews and if any features you want me to add to them



## License

MIT © [Mohammed Aliwi](https://github.com/Mood-al/react-tabs-scrollable)
