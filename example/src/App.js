import React from 'react'

import { Tabs, Tab } from 'react-tabs-scrollable'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'react-tabs-scrollable/dist/rts.css'
import './main.css'

const App = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  const onTabClick = (e, index) => {
    setActiveTab(index)
  }

  const navBtnsRef = React.useRef()

  const [isLeftArrowDisapled, setIsLeftArrowDisabled] = React.useState(false)
  const [isRightArrowDisapled, setIsRightArrowDisabled] = React.useState(false)
  const [selectedTabCoor, setSelectedTabCoor] = React.useState({})
  const [showTabsFeaturesObj, setShowTabsFeaturesObj] = React.useState({
    tabsScrollAmount: 3,
    animationDuration: 300,
    navBtnCLickAnimationDuration: 300,
    selectedAnimationDuration: 300,
    hideNavBtns: false,
    hideNavBtnsOnMobile: true,
    NavBtnsIconColor: 'rgba(0, 0, 0, 0.6)',
    showTabsScroll: true
  })
  const [isRTL, setIsRTL] = React.useState(false)

  const onRTLSwitcher = () => {
    setIsRTL((prev) => !prev)
  }

  React.useEffect(() => {
    const body = document.querySelector('body')
    isRTL ? body.setAttribute('dir', 'rtl') : body.setAttribute('dir', 'ltr')
  }, [isRTL])

  const didReachEnd = (val) => setIsRightArrowDisabled(val)
  const didReachStart = (val) => setIsLeftArrowDisabled(val)
  const selectedTabCoordinates = (coors) => setSelectedTabCoor(coors)

  const onInputChange = (e) => {
    setShowTabsFeaturesObj({
      ...showTabsFeaturesObj,
      [e.target.name]: e.target.value
    })
  }

  const onSwitchChange = (e) => {
    setShowTabsFeaturesObj({
      ...showTabsFeaturesObj,
      [e.target.name]: e.target.checked
    })
  }

  return (
    <div>
      <div className='tabs-container'>
        <Tabs
          activeTab={activeTab}
          onTabClick={onTabClick}
          // the props returns a group of events to control the tabs such as onLeftBtnClick
          action={navBtnsRef}
          // sets if the direction of the page is RTL or not
          isRTL={false}
          // sets if the tabs reached the end point of the tab container
          didReachEnd={didReachEnd}
          // sets if the tabs reached the start point container
          didReachStart={didReachStart}
          // sets how many tabs you want to scroll on every move
          // default 3 tabs on each navigation button click
          tabsScrollAmount={showTabsFeaturesObj.tabsScrollAmount}
          // sets the general animation duration when you click on the navigation buttons and when you click out the tabs view
          // default 300s
          animationDuration={300}
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
          // default true
          hideNavBtnsOnMobile={false}
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
          selectedTabCoordinates={selectedTabCoordinates}
        >
          {[...Array(25).keys()].map((tab) => (
            <Tab key={tab}>Tab {tab} </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default App
