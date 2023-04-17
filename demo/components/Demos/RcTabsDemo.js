import styled from "@emotion/styled";
import React from "react";
import { Tab, Tabs } from "react-tabs-scrollable";
import Title from "../Title";

const RcTabsDemo = ({ title }) => {
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };
  return (
    <StyledRcTabs>
      <StyledRcTabs className="d-flex">
        <Tabs
          activeTab={activeTab}
          onTabClick={onTabClick}
          hideNavBtns
          tabsContainerClassName="overflow-auto"
        >
          {/* generating an array to loop through it  */}
          {[...Array(20).keys()].map((item) => (
            <Tab key={item}>Tab {item}</Tab>
          ))}
        </Tabs>

        <select
          name="ss"
          value={activeTab}
          onChange={(val) => setActiveTab(+val.target.value)}
        >
          {[...Array(20).keys()].map((item) => (
            <option value={item} key={item}>
              Tab {item}
            </option>
          ))}
        </select>
      </StyledRcTabs>
    </StyledRcTabs>
  );
};

export default RcTabsDemo;
const StyledRcTabs = styled.div``;
