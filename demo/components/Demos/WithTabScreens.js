import React from "react";
import { Tab, Tabs } from "react-tabs-scrollable";

const WithTabScreens = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const TabScreen = ({ activeTab, idx, ...props }) => {
    return (
      <div
        className="animate__animated animate__fadeInLeft"
        role="tabpanel"
        {...props}
      >
        {activeTab === idx && <div className="mx-5">Tab screen {idx}</div>}
      </div>
    );
  };
  return (
    <>
      <Tabs activeTab={activeTab} onTabClick={onTabClick}>
        {/* generating an array to loop through it  */}
        {[...Array(20).keys()].map((item) => (
          <Tab className="rounded" key={item}>
            Page {item}
          </Tab>
        ))}
      </Tabs>
      {[...Array(20).keys()].map((item) => (
        <TabScreen activeTab={activeTab} idx={item} key={item}>
          Page {item}
        </TabScreen>
      ))}
    </>
  );
};

export default WithTabScreens;
