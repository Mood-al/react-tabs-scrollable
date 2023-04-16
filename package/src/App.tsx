import React from "react";
import { Tabs, Tab, TabScreen } from "./lib";

import "./lib/rts.css";

const App = () => {
  // define state with initial value to let the tabs start with that value
  const [activeTab, setActiveTab] = React.useState(14);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e: any, index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  const [isRTL, setIsRTL] = React.useState(false);

  const onBtnClick = () => {
    setIsRTL((prev) => !prev);
  };

  React.useEffect(() => {
    document.body.dir = !isRTL ? "ltr" : "rtl";
  }, [isRTL]);

  const _tabRef = React.useRef<any>([]);
  const _tabsContainerRef = React.useRef<any>(null);
  const newRef = React.useRef<any>(null);
  const newRef1 = React.useRef<any>(null);
  const action = React.useRef<any>(null);
  console.log(_tabRef);
  return (
    <>
      <button onClick={onBtnClick}>switch to {isRTL ? "rtl" : "ltr"}</button>
      <button onClick={() => action.current.goToEnd()}>goToEnd</button>
      <button onClick={() => action.current.goToStart()}>goToStart</button>
      <button onClick={() => action.current.onLeftNavBtnClick()}>
        scroll to left
      </button>
      <button onClick={() => action.current.onRightNavBtnClick()}>
        scroll to right
      </button>

      <Tabs
        activeTab={activeTab}
        tabRef={_tabRef}
        tabsContainerRef={_tabsContainerRef}
        onTabClick={onTabClick}
        isRTL={isRTL}
        rightNavBtnRef={newRef}
        rightNavBtnClassName="ddd"
        leftNavBtnRef={newRef1}
        leftNavBtnClassName="fff"
        hideNavBtns={false}
        showTabsScroll={false}
        navBtnContainerClassName="ddddd"
        getTabsBoundingClientRects={(val: object) => console.log(val)}
        // navBtnAs="a"
        action={action}
        // didReachEnd={(val: any) => console.log(val, "reached end")}
        // didReachStart={(val: any) => console.log(val, "reached start")}
      >
        {/* generating an array to loop through it  */}
        {[...Array(40).keys()].map((item) => (
          <Tab key={item}>Tab {item}</Tab>
        ))}
      </Tabs>

      {[...Array(40).keys()].map((item) => (
        <TabScreen
          key={item}
          activeTab={activeTab}
          index={item}
          className={"custom-className" + item}
          style={{ margin: 10 }}
          as="span"
        >
          Tab {item}
        </TabScreen>
      ))}
    </>
  );
};

export default App;
