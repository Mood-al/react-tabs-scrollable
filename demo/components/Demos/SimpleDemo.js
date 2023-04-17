import React from "react";
import { Tab, Tabs } from "react-tabs-scrollable";

const SimpleDemo = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };
  return (
    <Tabs activeTab={activeTab} onTabClick={onTabClick}>
      {/* generating an array to loop through it  */}
      {[...Array(20).keys()].map((item) => (
        <Tab key={item}>Tab {item}</Tab>
      ))}
    </Tabs>
  );
};

export default SimpleDemo;
