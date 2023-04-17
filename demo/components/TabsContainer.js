import { useContext, useRef, useState } from "react";
import { RTLContext } from "../context/RTLContext";
import ControlTabsBtns from "./Features/ControlTabsBtns";
import CustomNavBtns from "./Features/CustomNavBtns";
import InputFeatures from "./Features/InputFeatures";
import RtlSwitchBtn from "./Features/RtlSwitchBtn";
import SwitchInputFeatures from "./Features/SwitchInputFeatures";
import TabsMeta from "./Features/TabsMeta";
import { Tab, Tabs } from "react-tabs-scrollable";

const featuresInitialState = {
  tabsScrollAmount: 3,
  animationDuration: 300,
  navBtnCLickAnimationDuration: 300,
  selectedAnimationDuration: 300,
  hideNavBtns: false,
  hideNavBtnsOnMobile: true,
  NavBtnsIconColor: "rgba(0, 0, 0, 0.6)",
  showTabsScroll: false,
};
const initailActiveTab = 11;
const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(initailActiveTab);
  const [key, setKey] = useState(false);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const { isRTL, setIsRTL } = useContext(RTLContext);
  const tabsRef = useRef();

  const [isLeftArrowDisapled, setIsLeftArrowDisabled] = useState(false);
  const [isRightArrowDisapled, setIsRightArrowDisabled] = useState(false);
  const [selectedTabDOMRect, setSelectedTabDOMRect] = useState({});
  const [showTabsFeaturesObj, setShowTabsFeaturesObj] =
    useState(featuresInitialState);

  const didReachEnd = (val) => setIsRightArrowDisabled(val);
  const didReachStart = (val) => setIsLeftArrowDisabled(val);
  const getTabsBoundingClientRects = (coors) => setSelectedTabDOMRect(coors);

  const onInputChange = (e) => {
    setShowTabsFeaturesObj({
      ...showTabsFeaturesObj,
      [e.target.name]: e.target.value,
    });
  };

  const onSwitchChange = (e) => {
    setShowTabsFeaturesObj({
      ...showTabsFeaturesObj,
      [e.target.name]: e.target.checked,
    });
  };
  const onResetState = () => {
    setActiveTab(initailActiveTab);
    setIsRTL(false);
    setShowTabsFeaturesObj(featuresInitialState);
    setKey(true);
    if (key) {
      setTimeout(() => {
        setKey(false);
      }, 100);
    }
  };
  return (
    <div className="">
      <div className="p-2 shadow-sm sticky-top bg-white">
        <Tabs
          key={key}
          activeTab={activeTab}
          onTabClick={onTabClick}
          // the props returns a group of events to control the tabs such as onLeftBtnClick
          action={tabsRef}
          // sets if the direction of the page is RTL or not
          isRTL={isRTL}
          // sets if the tabs reached the end point of the tab container
          didReachEnd={didReachEnd}
          // sets if the tabs reached the start point container
          didReachStart={didReachStart}
          // sets how many tabs you want to scroll on every move
          // default 3 tabs on each navigation button click
          tabsScrollAmount={showTabsFeaturesObj.tabsScrollAmount}
          // sets the general animation duration when you click on the navigation buttons and when you click out the tabs view
          // default 300s
          animationDuration={showTabsFeaturesObj.animationDuration}
          // sets the animation of the scroll when you click on the navigation buttons
          // note : this will overwirte the animationDuration value
          // default 300s
          navBtnCLickAnimationDuration={
            showTabsFeaturesObj.navBtnCLickAnimationDuration
          }
          // sets the animation of the scroll when you click on a tab that is out of the view
          // note : this will overwirte the animationDuration value
          // default 300s
          selectedAnimationDuration={
            showTabsFeaturesObj.selectedAnimationDuration
          }
          // sets the right navitgation vutton icon
          // default feather arrow-right svg icon
          /* Setting the right navigation button icon. */
          /* Setting the right navigation button icon. */
          // rightBtnIcon={">"}
          // sets the left navitgation vutton icon
          // default feather arrow-left svg icon
          // leftBtnIcon={"<"}
          //hides the navigantion button
          // default false
          hideNavBtns={showTabsFeaturesObj.hideNavBtns}
          // hides the navigation buttons on mobile devices
          // default false
          hideNavBtnsOnMobile={showTabsFeaturesObj.hideNavBtnsOnMobile}
          // shows the scroll of the tabs
          // default false
          showTabsScroll={showTabsFeaturesObj.showTabsScroll}
          // sets the color of navigation buttons if you dont want to use your own
          // it just change the stroke color of the svg icon
          // default #fff
          // you cant use this option if you used your own btns

          navBtnsIconColor={showTabsFeaturesObj.navBtnsIconColor}
          // gets the coordinate of the selected tab
          // returns object of the width and the scrollLeft of the selected tab
          // be carefulwhen you use state with this function it will be triggered on every scroll movement and when the app rerenders
          getTabsBoundingClientRects={getTabsBoundingClientRects}
          tabsContainerClassName={"container"}
        >
          {[...Array(20).keys()].map((item) => (
            <Tab key={item}>item {item}</Tab>
          ))}
        </Tabs>
      </div>

      <div className="container">
        <CustomNavBtns
          tabsRef={tabsRef}
          isRightArrowDisapled={isRightArrowDisapled}
          isLeftArrowDisapled={isLeftArrowDisapled}
        />
        <RtlSwitchBtn />
        <TabsMeta
          activeTab={activeTab}
          isLeftArrowDisapled={isLeftArrowDisapled}
          isRightArrowDisapled={isRightArrowDisapled}
          selectedTabDOMRect={selectedTabDOMRect}
          isRTL={isRTL}
        />
        <div className="row align-items-center mb-3 justify-content-center">
          <InputFeatures
            showTabsFeaturesObj={showTabsFeaturesObj}
            onInputChange={onInputChange}
          />

          <SwitchInputFeatures
            onSwitchChange={onSwitchChange}
            showTabsFeaturesObj={showTabsFeaturesObj}
          />
        </div>

        <ControlTabsBtns tabsRef={tabsRef} />
        <div className="row">
          <div className="col-md-12 d-flex">
            <button
              className="flex-fill btn rn___btn mt-3"
              onClick={onResetState}
            >
              Reset State
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsContainer;
