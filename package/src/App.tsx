import React from "react";
import { Menu, MenuBlock } from "react-kfc-menu";
import { Tabs, Tab, TabScreen } from "./lib";
// @nots-check
// import { Tabs, Tab } from "react-tabs-scrollable";

import "./lib/rts.css";

const App = () => {
  // define state with initial value to let the tabs start with that value
  const [activeTab, setActiveTab] = React.useState(14);
  const menuRef = React.useRef<any>(null);

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

  const onTabClick = (e: any, index: React.SetStateAction<number>) => {
    setActiveTab(index);

    menuRef.current?.scrollSelectedToBlock(index);
    // console.log(index, "onTabClick");
  };

  const onBlockIntersection = (e: any, index: React.SetStateAction<number>) => {
    console.log(index, "onBlockIntersection");
    // setActiveTab(index);
  };
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
      <div
        className="sticky-top bg-light"
        style={{ position: "sticky", top: 0, background: "white", zIndex: 99 }}
      >
        <div className="container">
          <Tabs
            // key={activeTab}
            activeTab={activeTab}
            tabRef={_tabRef}
            tabsContainerRef={_tabsContainerRef}
            onTabClick={onTabClick}
            isRTL={isRTL}
            rightNavBtnRef={newRef}
            rightNavBtnClassName="ddd"
            leftNavBtnRef={newRef1}
            // leftNavBtnClassName="fff"
            // hideNavBtns={false}
            // showTabsScroll={false}
            // navBtnContainerClassName="ddddd"
            // mode="scrollSelectedToCenterFromView"
            // getTabsBoundingClientRects={(val: object) => console.log(val)}
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
        </div>
      </div>

      <div className="row mx-auto justify-content-center d-none">
        <div className="col-md-9 ">
          <Menu
            onBlockIntersection={onBlockIntersection}
            // scrollBahavior="instant"
            activeBlock={activeTab}
            action={menuRef}
            showIndicator
          >
            {[...Array(40).keys()].map((item) => (
              <MenuBlock key={item}>
                <div className="display-4">Block {item}</div>{" "}
                <div className="row">
                  {[...Array(8).keys()].map((card) => (
                    <div key={card} className="col-md-3 my-2">
                      <div className="card">
                        <div className="card-body">
                          {card} Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Modi deleniti natus voluptates
                          doloribus voluptate voluptas ab eum dolorem asperiores
                          sequi consequatur magnam architecto iure sed tempora,
                          doloremque nam? Nesciunt, ad!
                          <button className="btn btn-primary d-block w-100 mt-2">
                            order
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </MenuBlock>
            ))}
          </Menu>
        </div>
      </div>
    </>
  );
};

export default App;
