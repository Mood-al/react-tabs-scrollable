import styled from "@emotion/styled";
import React from "react";
import { Tab, Tabs } from "react-tabs-scrollable";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const MuiDemo = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };
  return (
    <>
      <StyledMuiDemo>
        <Tabs
          activeTab={activeTab}
          leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
          rightBtnIcon={<FiChevronRight size={"1.5em"} />}
          onTabClick={onTabClick}
        >
          {/* generating an array to loop through it  */}
          {[...Array(20).keys()].map((item) => (
            <Tab key={item}>Tab {item}</Tab>
          ))}
        </Tabs>
      </StyledMuiDemo>
    </>
  );
};

export default MuiDemo;
const StyledMuiDemo = styled.div`
  .rts___tabs {
    padding: 0;
  }
  .rts___tab {
    margin: 0;
    position: relative;
  }
  .rts___nav___btn svg {
    max-width: unset;
  }

  .rts___btn {
    border-radius: unset;
    border: none;
  }

  .rts___tab::after {
    content: "";
    margin: auto;
    height: 3px;
    background: transparent;
    transition: width 0.5s ease, background-color 0.5s ease;
    width: 0;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .rts___tab___selected {
    color: #000;
    position: relative;
    width: 100%;
    background: transparent;
    box-shadow: none;
  }
  .rts___tab___selected::after {
    background: var(--rts-primary-color);

    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }
  .rts___nav___btn:hover {
    background-color: unset;
  }
  .rts___nav___btn:hover > svg {
    stroke: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 991.98px) {
    .rts___tabs___container {
      padding: 0;
    }
  }
  @media (max-width: 767.98px) {
    .rts___tab {
      padding: 5px;
    }
  }
`;
