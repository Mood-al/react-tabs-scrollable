# react-tabs-scrollable

> a simple react scrollable tabs with a lot of additional features and with fully supporting of RTL mode

[![NPM](https://img.shields.io/npm/v/react-tabs-scrollable.svg)](https://www.npmjs.com/package/react-tabs-scrollable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tabs-scrollable
yarn add react-tabs-scrollable
```

## Demo

### <a href="https://react-tabs-scrollable.vercel.app" target="_blank" rel="noopener"><span>Demo</span> </a>

## Features

- Easy to start with it takes you less than minute to start it up!
- It has many features and so easy to customize
- Fully support for RTL (actually the reason why I built this component is because RTL)
- Fully accessible
- You can control in literally everything inside it
- Small size 8k and 3.1k gzipped
- Great to use in navigation , menus and lists or any proper use for tabs
- Easy to style , you have the css file so you can edit it as you would like
- And much more ..

## Usage

```jsx
import React from 'react'
import { Tabs, Tab } from 'react-tabs-scrollable'
import 'react-tabs-scrollable/dist/rts.css'

const SimpleTabs = () => {
  // define state with initial value to let the tabs start with that value
  const [activeTab, setActiveTab] = React.useState(1)

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e)
    setActiveTab(index)
  }

  return (
    <Tabs activeTab={activeTab} onTabClick={onTabClick}>
      {/* generating an array to loop through it  */}
      {[...Array(20).keys()].map((item) => (
        <Tab key={item}>Tab {item}</Tab>
      ))}
    </Tabs>
  )
}

export default SimpleTabs
```

### Full example with all features

```jsx
<Tabs
  // the selected tab state which must be passed to the commponent
  activeTab={activeTab}
  // tab on click function
  // it has two props
  // first one is event object
  // second one is the index of the selected tab
  onTabClick={(val) => console.log(val)}
  // this prop returns a group of events to control the tabs such as onLeftBtnClick , onRightBtnClick to control the tabs
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
  rightBtnIcon={'>'}
  // sets the left navitgation button icon
  // default feather arrow-left svg icon
  // you can pass jsx here or just a string
  leftBtnIcon={'<'}
  //hides the navigantion button
  // default false
  hideNavBtns={false}
  // hides the navigation buttons on mobile devices
  // default true
  hideNavBtnsOnMobile={true}
  // shows the scroll of the tabs
  // default false
  showTabsScroll={false}
  // sets the color of navigation buttons if you dont want to use your own
  // it just changes the stroke color of the svg icon
  // you cant use this option if you used your own btns
  // or you can customize it using css
  navBtnsIconColor={'HEX'}
  // gets the coordinates of the selected tab
  // returns object of the width and the scrollLeft of the selected tab
  // be careful when you use state with this function it will be triggered on every scroll movement and when the app rerenders
  selectedTabCoordinates={(val) => console.log(val)}
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
        <td><code>action</code></td>
        <td>-</td>
        <td>ref</td>
        <td>react ref fired when the component mounts. It's useful if you want to some functionalities programmatically. It supports 4 function : <br />
                <div><code>onLeftBtnClick ,onRightBtnClick, goToStart, goToEnd</code></div>
                <br />  <div><code>onLeftBtnClick</code> : to control the left btn click and use your own navigation button. you can call it by so  <code>ref.onLeftBtnClick()</code> </div> 
        <br/>
       <div> <code>onRightBtnClick</code> : to control the right btn click and use your own navigation button. you can call it by so  <code>ref.onRightBtnClick()</code> 
         <br/>
        </div> 
        <br/>
       <div> <code>goToStart</code> : to control the tabs to go to the start of the tabs container. you can call it by so  <code>ref.goToStart()</code> </div> <br /> 
       <div> <code>goToEnd</code> : to control the tabs to go to the end of the tabs container. you can call it by so  <code>ref.goToEnd()</code> </div> 
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
        <td><code>selectedTabCoordinates</code></td>
        <td>-</td>
        <td> function</td>
        <td>   gets the coordinates of the selected tab
  returns object of the width and the scrollLeft of the selected tab
  be careful when you use state with this function it will be triggered on every scroll movement and when the app rerenders <code> selectedTabCoordinates={(val) => console.log(val)} 
 <br />  // val returns {width : float , left : float} <br />
  // the left turns into right when isRTL={true} </code>  </td>
    </tr>
</table>

<br />

> you can see all the examples in the <a href="https://react-tabs-scrollable.vercel.app" target="_blank" rel="noopener"><span>Demo</span> </a>

> please let me see your reviews and if there're any features you want me to add to them

## License

MIT © [Mohammed Aliwi](https://github.com/Mood-al/react-tabs-scrollable)
