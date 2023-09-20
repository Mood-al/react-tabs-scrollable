# react-tabs-scrollable

> a simple react scrollable tabs with a lot of additional features and with fully supporting of RTL mode

[![NPM](https://img.shields.io/npm/v/react-tabs-scrollable.svg)](https://www.npmjs.com/package/react-tabs-scrollable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tabs-scrollable@latest
yarn add react-tabs-scrollable@latest
```

```bash
npm install --save react-tabs-scrollable@1.0.10
yarn add react-tabs-scrollable@1.0.10
```

## Demos

### <a href="https://react-tabs-scrollable.vercel.app" target="_blank" rel="noopener"><span>Demos</span> </a>

## V1 docs

[V1 docs](https://github.com/Mood-al/react-tabs-scrollable/tree/v1)

## Features

- Typescript out of box
- Many modes to control the behaviour of the selected tab.
- Easy to start with it takes you less than minute to start it up!
- Many features and so easy to customize
- Fully support for RTL (actually the reason why I built this component is because RTL)
- Fully accessible
- You can control and have access to everything inside it.
- Small sized 9.6k (gzipped: 3.9k)
- Great to use in navigation, menus and lists or any proper use for tabs
- Easy to style, you have the css file so you can edit it as you would like, and there are style and className props to all the elements used inside the package.
- You have access to all refs.
- And much more ..

## What's new in V2?

- I rebuild the package from scratch with typescript to avoid the unnecessary bugs and to make it more elegant and easy to use with the typescript auto-complete.

  > Note: this's my first time using typescript so expect many bugs with types since i was interfering a lot of types to any, and because I dont have the proper internet, I couldnt search well for them -\_-.
  > But overall I think everything works fine!.

- I deleted the unnecessary code and made it more readable and clean.

- I deleted `selectedTabCoordinates` and replaced it with `getTabsBoundingClientRects` function that returns DOMRect object for the `tabsContainer` and `tab`, and it's way performant comparing to the old `selectedTabCoordinates`, it just runs when the scroll stops and when you switch to RTL.

- I renamed the two action `onRightBtnClick` and `onLeftBtnClick` to `onRightNavBtnClick` and `onLeftNavBtnClick`

- I made the API and the enternals of the component more exposed to the developers who wants to use it (Please see the API table below to see all the new props), since I added about 15 new props including refs to all the elements inside the pacakge, and I added custom styles to style it as you want.

- I added new features to make the component more compatible with my new package <code> <a href="https://www.npmjs.com/package/react-kfc-menu" target="_blank" rel="noopener"><span>react-kfc-menu</span></a></code> such as <code>mode</code> prop that controls the behavior of the selected tab scroll, now you can change the whole behavior of it with the new 4 modes I've added to it.

- I added `<TabScreen />` component if you want to use tab panels with the tabs.

> I'm planning to add Swipeable component to make the TabScreens more interactive with drag and touch events on both, Desktop and mobile.

Please If you faced any bugs feel free to open an issue.

## Usage

### #Simple Tabs

```jsx
import React from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

const SimpleTabs = () => {
  // define state with initial value to let the tabs start with that value
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };

  return (
    <>
      <Tabs activeTab={activeTab} onTabClick={onTabClick}>
        {/* generating an array to loop through it  */}
        {[...Array(20).keys()].map((item) => (
          <Tab key={item}>Tab {item}</Tab>
        ))}
      </Tabs>
    </>
  );
};

export default SimpleTabs;
```

## #Tabs with TabScreen

```jsx
import React from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
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
      <Tabs activeTab={activeTab} onTabClick={onTabClick}>
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
```

### #Full example with all features

```jsx
<Tabs
  // the selected tab state which must be passed to the commponent
  activeTab={activeTab}
  // tab on click function
  // it has two props
  // first one is event object
  // second one is the index of the selected tab
  onTabClick={(val) => console.log(val)}
  // this prop returns a group of events to control the tabs such as onLeftNavBtnClick , onRightNavBtnClick to control the tabs
  // you should pass here a ref to get the required functionality
  action={tabRef}
  // sets if the direction of the page is RTL or not
  // default false
  isRTL={false}
  // sets if the tabs reached the end point of the tab container
  // function
  didReachEnd={(val) => console.log(val)}
  // sets if the tabs reached the start point container
  // function
  didReachStart={(val) => console.log(val)}
  // sets how many tabs you want to scroll on every move
  // default 3 tabs on each navigation button click
  tabsScrollAmount={3}
  // sets the general animation duration when you click on the navigation buttons and when you click out the tabs view
  // this option will disable navBtnCLickAnimationDuration and selectedAnimationDuration
  // default 300s
  animationDuration={300}
  // sets the animation of the scroll when you click on the navigation buttons
  // note : this will overwirte the animationDuration value
  // default 300s
  navBtnCLickAnimationDuration={300}
  // sets the animation of the scroll when you click on a tab that is out of the view
  // note : this will overwirte the animationDuration value
  // default 300s
  selectedAnimationDuration={300}
  // sets the right navitgation vutton icon
  // default feather arrow-right svg icon
  // you can pass jsx here or just a string
  rightBtnIcon={">"}
  // sets the left navitgation button icon
  // default feather arrow-left svg icon
  // you can pass jsx here or just a string
  leftBtnIcon={"<"}
  //hides the navigantion button
  // default false
  hideNavBtns={false}
  // hides the navigation buttons on mobile devices
  // default true
  hideNavBtnsOnMobile={true}
  // shows the scroll of the tabs
  // default false
  showTabsScroll={false}
  // returns the DOMRect object of the selected tab and the tabs container
  getTabsBoundingClientRects={(val) => console.log(val)}
  // A react ref that can be used to control the tabs programmatically
  //   Check the API section to understand more
  action={ref}
  //   You can change the behaviour of the selected tab scroll by changing the option of it, whether to move it to center, start, end or to center but if the selected tab is in the view.
  //   Check the API section to understand more or you can play with it to understand the idea
  mode="scrollSelectedToCenterFromView"
  //   changes the underline HTML element
  navBtnAs="div"
  //   These props sets the className of their elements
  tabsContainerClassName=""
  tabsUpperContainerClassName=""
  tabsContainerClassName=""
  leftNavBtnClassName=""
  rightNavBtnClassName=""
  navBtnClassName=""
  navBtnContainerClassName=""
  //  Sets the style of these element
  navBtnStyle={{}}
  tabsContainerStyle={{}}
  tabsUpperContainerStyle={{}}
  //    You can get the ref of these elements
  tabsContainerRef={ref}
  tabRef={ref}
  leftNavBtnRef={ref}
  rightNavBtnRef={ref}
>
  <Tab>item </Tab>
  {[...Array(20).keys()].map((tab) => (
    <Tab key={tab}>Tab {tab}</Tab>
  ))}
</Tabs>
```

## API

<table>
    <tr>
        <td>Name</td>
        <td>Default</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td><code>activeTab*</code> </td>
        <td>-</td>
        <td>integer</td>
        <td>the selected tab value which must be passed to the commponent</td>
    </tr>
    <tr>
        <td><code>onTabClick*</code></td>
        <td>-</td>
        <td>function</td>
        <td> <code>function(event, value) =&gt; void</code> callback function fires on tab click. It has two props, the first on is the event object the second on is the selected tab value</td>
    </tr>
     <tr>
        <td><code>mode</code> </td>
        <td>scrollSelectedToStart</td>
        <td>string</td>
        <td>it controls the behavoiur of the selected tab whether to move it to start | center | end | center if the tab is in the view.
        it contains 3 modes:

  <ul>
    <li><code>scrollSelectedToCenter</code>: scrolls the selected tab to the center of view.</li>
    <li><code>scrollSelectedToEnd</code>: scrolls the selected tab to the end of view</li>
      <li><code>scrollSelectedToCenterFromView</code>: scrolls the selected tab to the center of view but even if the selected tab was already in the view.
      if you clicked on a tab in the center of view it wont scroll or move, but if you click on any tab on any side (right of the center or left of center tab) it will scroll to the left or right,depending on which side of the view you are clicking.
      see the demos to understand more!!
     <div>
      <code>I added this option just to make react-tabs-scrollable more compatible with react-kfc-menu</code>
     </div>
       </li>
  </ul>
        </td>
    </tr>
    <tr>
        <td><code>action</code></td>
        <td>-</td>
        <td>ref</td>
        <td>react ref fires when the component mounts. It's useful if you want to control some functionalities programmatically. It supports 4 function : <br />
                <div><code>onLeftNavBtnClick ,onRightNavBtnClick, goToStart, goToEnd</code></div>
                <br />  <div><code>onLeftNavBtnClick</code> : to control the left btn click and use your own navigation button. you can call it by so  <code>ref.current.onLeftNavBtnClick()</code> </div> 
        <br/>
       <div> <code>onRightNavBtnClick</code> : to control the right btn click and use your own navigation button. you can call it by so  <code>ref.current.onRightNavBtnClick()</code> 
         <br/>
        </div> 
        <br/>
       <div> <code>goToStart</code> : to control the tabs to go to the start of the tabs container. you can call it by so  <code>ref.current.goToStart()</code> </div> <br /> 
       <div> <code>goToEnd</code> : to control the tabs to go to the end of the tabs container. you can call it by so  <code>ref.current.goToEnd()</code> </div> 
        <span></span>
     </td>
    </tr>
        <tr>
        <td><code>isRTL</code></td>
        <td>false</td>
        <td>boolean</td>
        <td> sets if the direction of the tabs is RTL or not</td>
    </tr>
      </tr>
        <tr>
        <td><code>didReachEnd</code></td>
        <td>-</td>
        <td>function</td>
        <td> sets if the tabs reached the end point of the container <code>didReachEnd={(val) => console.log(val)}</code>  </td>
    </tr>
       </tr>
      </tr>
        <tr>
        <td><code>didReachStart</code></td>
        <td>-</td>
        <td>function</td>
        <td> sets if the tabs reached the start point of the container <code>didReachStart={(val) => console.log(val)}</code>  </td>
    </tr>
     <tr>
        <td><code>tabsScrollAmount</code></td>
        <td>3</td>
        <td>string | integer</td>
        <td> sets how many tabs you want to scroll on every move <code> tabsScrollAmount={3}</code>  </td>
    </tr>
     <tr>
        <td><code>animationDuration</code></td>
        <td>300s</td>
        <td> integer</td>
        <td>  sets the animation duration of the scroll when you click on the navigation buttons
               note : this will overwirte the animationDuration value <code> animationDuration={300}</code>  </td>
    </tr>
      <tr>
        <td><code>navBtnCLickAnimationDuration</code></td>
        <td>300s</td>
        <td> integer</td>
        <td>  sets the animation of the scroll when you click on the navigation buttons
  note : this will overwirte the animationDuration value <code>  navBtnCLickAnimationDuration={300}</code>  </td>
    </tr>
       <tr>
        <td><code>selectedAnimationDuration</code></td>
        <td>300s</td>
        <td> integer</td>
        <td>    sets the animation of the scroll when you click on a tab that is out of the view
  note : this will overwirte the animationDuration value <code>  selectedAnimationDuration={300}</code>  </td>
    </tr>
      <tr>
        <td><code>rightBtnIcon</code></td>
        <td>feather arrow-right svg icon</td>
        <td> string | jsx </td>
        <td>   sets the right navitgation button icon <code>  rightBtnIcon={'>'}</code>  </td>
    </tr>
     <tr>
        <td><code>leftBtnIcon</code></td>
        <td>feather arrow-left svg icon</td>
        <td> string | jsx </td>
        <td>   sets the left navitgation button icon <code>  leftBtnIcon={'>'}</code>  </td>
    </tr>
      <tr>
        <td><code>hideNavBtns</code></td>
        <td>false</td>
        <td> boolean</td>
        <td>  hides the navigantion button <code>  hideNavBtns={false}</code>  </td>
    </tr>
       <tr>
        <td><code>hideNavBtnsOnMobile</code></td>
        <td>true</td>
        <td> boolean</td>
        <td>  hides the navigation buttons on mobile devices  </td>
    </tr>
        <tr>
        <td><code>showTabsScroll</code></td>
        <td>false</td>
        <td> boolean</td>
        <td>  shows the scroll of the tabsn  </td>
    </tr>
      <tr>
        <td><code>getTabsBoundingClientRects</code></td>
        <td>-</td>
        <td> function</td>
        <td>returns a callback with the DOMRects object of the selected tab and the tabsContainer. </td>
    </tr>
      <tr>
        <td><code>tabsContainerRef</code></td>
        <td>-</td>
        <td> ref</td>
        <td>the tabs container ref object</td>
    </tr>
     <tr>
        <td><code>tabRef</code></td>
        <td>-</td>
        <td>ref</td>
        <td>the tabs ref object and it returns an array of all the tab ref</td>
    </tr>
         <tr>
        <td><code>leftNavBtnRef</code></td>
        <td>-</td>
        <td>ref</td>
        <td>sets the left navigation btn's ref</td>
    </tr>
        <tr>
        <td><code>rightNavBtnRef</code></td>
        <td>-</td>
        <td>ref</td>
        <td>sets the right navigation btn's ref</td>
    </tr>
      <tr>
        <td><code>navBtnStyle</code></td>
        <td>-</td>
        <td>object</td>
        <td>sets the navigation btns' style object</td>
    </tr>
       <tr>
        <td><code>tabsContainerStyle</code></td>
        <td>-</td>
        <td>object</td>
        <td>Sets tabs container's style object</td>
    </tr>
        <tr>
        <td><code>tabsUpperContainerStyle</code></td>
        <td>-</td>
        <td>object</td>
        <td>Sets the tabs upper container's style object</td>
    </tr>
        <tr>
        <td><code>leftNavBtnClassName</code></td>
        <td>-</td>
        <td>string</td>
        <td>Sets the left navigation button's className</td>
    </tr>
       <tr>
        <td><code>rightNavBtnClassName</code></td>
        <td>-</td>
        <td>string</td>
        <td>Sets the right navigation button's className</td>
    </tr>
      <tr>
        <td><code>navBtnClassName</code></td>
        <td>-</td>
        <td>string</td>
        <td>Sets the navigation buttons' className</td>
    </tr>
     <tr>
        <td><code>navBtnContainerClassName</code></td>
        <td>-</td>
        <td>string</td>
        <td>Sets the navigation buttons' container className</td>
    </tr>
    <tr>
        <td><code>tabsUpperContainerClassName</code></td>
        <td>-</td>
        <td>string</td>
        <td>Sets the upper tabs container's className</td>
    </tr>
      <tr>
        <td><code>tabsContainerClassName</code></td>
        <td>-</td>
        <td>string</td>
        <td>Sets the tabs container's className</td>
    </tr>
      <tr>
        <td><code>navBtnAs</code></td>
        <td>button</td>
        <td>string</td>
        <td>Sets the HTML element of the navigation buttons</td>
    </tr>
</table>

## Tab

<table>
    <tr>
        <td>Name</td>
        <td>Default</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
     </tr>
        <tr>
        <td><code>tabAs</code></td>
        <td>button</td>
        <td>string</td>
        <td>  You can change the HTML element of the 
        <code>
            Tab
        </code>
        <div>Note: Changing the underline element will affect on the accessiblity of the tab</div>
        </td>
    </tr>
     </tr>
        <tr>
        <td><code>style</code></td>
        <td>-</td>
        <td>object</td>
        <td> 
            sets Tab's style object
        </td>
    </tr>
      <tr>
        <td><code>className</code></td>
        <td><code>-</code></td>
        <td>string</td>
        <td>you can pass a custom className to the <code>Tab</code> component</td>
    </tr>
</table>

## TabScreen

<table>
    <tr>
        <td>Name</td>
        <td>Default</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td><code>activeTab*</code> </td>
        <td>-</td>
        <td>integer</td>
        <td>the selected tab value which must be passed to the commponent</td>
    </tr>
      <tr>
        <td><code>index*</code> </td>
        <td>-</td>
        <td>integer | string</td>
        <td>the index of the tabscreen which must match the activeTab integer</td>
    </tr>
        <tr>
        <td><code>as</code></td>
        <td>dov</td>
        <td>string</td>
        <td>
            You can change the HTML element of the  <code>
                TabScreen
            </code>
        </td>
    </tr>
     </tr>
        <tr>
        <td><code>style</code></td>
        <td>-</td>
        <td>object</td>
        <td> 
            sets Tab's style object
        </td>
    </tr>
      <tr>
        <td><code>className</code></td>
        <td><code>-</code></td>
        <td>string</td>
        <td>you can pass a custom className to the <code>TabScreen</code> component</td>
    </tr>
    </table>

<br />

> If you liked this project don't forget to see my other projects on NPM and github

## Contrubite

Show your support by giving a ⭐. Any feature requests are welcome!
Anyone is welcomed to contribute in this project.

## Financial Contributions

<a href="https://www.buymeacoffee.com/Mooder" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

Buying me coffee will help me sustain the updates and work on new project for the open-source

## Organizations

Support this project with your organization / company or individual.
