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
