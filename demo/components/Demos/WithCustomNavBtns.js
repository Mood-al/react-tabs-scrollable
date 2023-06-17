import React, { useRef, useState } from "react";
import { Tab, Tabs } from "react-tabs-scrollable";
const WithCustomNavBtns = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };
  const [isLeftArrowDisapled, setIsLeftArrowDisabled] = useState(false);
  const [isRightArrowDisapled, setIsRightArrowDisabled] = useState(false);

  const didReachEnd = (val) => setIsRightArrowDisabled(val);
  const didReachStart = (val) => setIsLeftArrowDisabled(val);
  const tabsRef = useRef();
  return (
    <>
      <Tabs
        activeTab={activeTab} // sets if the tabs reached the end point of the tab container
        didReachEnd={didReachEnd}
        // sets if the tabs reached the start point container
        didReachStart={didReachStart}
        onTabClick={onTabClick}
        hideNavBtns={true}
        action={tabsRef}
      >
        {/* generating an array to loop through it  */}
        {[...Array(20).keys()].map((item) => (
          <Tab key={item}>Tab {item}</Tab>
        ))}
      </Tabs>
      <div className="row mt-2">
        <div className="col-md-6 d-flex">
          <button
            className="flex-fill btn rn___btn"
            disabled={isLeftArrowDisapled}
            onClick={() => tabsRef.current.onLeftNavBtnClick()}
          >
            click me to move the tabs to left
          </button>
        </div>
        <div className="col-md-6 d-flex">
          <button
            className="flex-fill btn rn___btn mt-md-0 mt-2"
            disabled={isRightArrowDisapled}
            onClick={() => tabsRef.current.onRightNavBtnClick()}
          >
            click me to move the tabs to right
          </button>
        </div>
      </div>
    </>
  );
};

export default WithCustomNavBtns;
