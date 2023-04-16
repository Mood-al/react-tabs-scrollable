import React from "react";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

const SimpleTabs = () => {
  // define state with initial value to let the tabs start with that value
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };
  const tabsArray = [...Array(20).keys()];
  return (
    <>
      <Tabs activeTab={activeTab} hideNavBtns={false} onTabClick={onTabClick}>
        {/* generating an array to loop through it  */}
        {tabsArray.map((item) => (
          <Tab key={item}>Tab {item}</Tab>
        ))}
      </Tabs>

      {tabsArray.map((item) => (
        <TabScreen
          key={item}
          activeTab={activeTab}
          index={item}
          // You can add animation with adding a custom class
          className="some-animation-class"
        >
          TabScreen {item}
        </TabScreen>
      ))}
    </>
  );
};

export default SimpleTabs;
